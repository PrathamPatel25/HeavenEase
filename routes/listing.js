const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js"); // Keep this in code
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing, isReviewAuthor } = require("../middleware.js");

// Index Route
router.get("/", async (req, res, next) => {
  try {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  } catch (err) {
    next(err);
  }
});

// New Route
router.get("/new", isLoggedIn, (req, res) => {
  console.log(req.user);
  res.render("listings/new.ejs");
});

// Show Route
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
      })
      .populate("owner");
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// Create Route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res, next) => {
    try {
      const newListing = new Listing(req.body.listing);
      newListing.owner = req.user._id;
      await newListing.save();
      req.flash("success", "New Listing Created!");
      res.redirect("/listings");
    } catch (err) {
      next(err);
    }
  })
);

// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, async (req, res, next) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  } catch (err) {
    next(err);
  }
});

// Update Route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      let listing = await Listing.findById(id, {
        ...req.body.listing,
      }).populate("owner");
      if (!listing.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission to edit");
        return res.redirect(`/listings/${id}`);
      }

      await Listing.findByIdAndUpdate(id, { ...req.body.listing });
      req.flash("success", "Listing updated successfully!");
      res.redirect(`/listings/${id}`);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
);

// Delete Route
router.delete("/:id", isLoggedIn, isOwner, async (req, res, next) => {
  const { id } = req.params;
  const deletedListing = await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing deleted successfully!");
  res.redirect("/listings");
});

module.exports = router;
