const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
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
};

module.exports.createListing = async (req, res, next) => {
  try {
    let url = req.file.path;
    let filename = req.file.filename;
    console.log(req.file);
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  } catch (err) {
    next(err);
  }
};

module.exports.renderEditForm = async (req, res) => {
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
};

module.exports.updateListing = async (req, res) => {
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
};

// module.exports.filterListings = async (req, res, next) => {
//     const { q } = req.params;
//     const filteredListings = await Listing.find({category: q }).exec();
//     if (!filteredListings.length) {
//         req.flash("error", "No Listings exists for this filter!");
//         res.redirect("/listings");
//         return;
//     }
//     res.locals.success = `Listings Filtered by ${q}`;
//     res.render("listings/index.ejs", { allListings: filteredListings });
// }

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted");
  res.redirect("/listings");
};

// module.exports.search = async(req, res) => {
//     console.log(req.query.q);
//     let input = req.query.q.trim().replace(/\s+/g, " "); //remove start and end space
//     console.log(input);
//     if(input == "" || input == " "){
//         //search value is empty
//         req.flash("error", "Search value empty!!!");
//         res.redirect("/listings");
//     }

//     //convert every word first letter capital and other small
//     let data = input.split("");
//     let element = "";
//     let flag = false;
//     for(let index = 0; index < data.length; index++) {
//         if (index == 0 || flag) {
//             element = element + data[index].toUpperCase();
//         } else {
//             element = element + data[index].toLowerCase();
//         }
//         flag = data[index] == " ";
//     }
//     console.log(element);

//     let allListings = await Listing.find({
//         title: { $regex: element, $options: "i"},
//     });
//     if(allListings.length !=0 ){
//         res.locals.success = "Listings searched by title";
//         res.render("listings/index.ejs", {allListings});
//         return;
//     }
//     if(allListings.length == 0){
//         allListings = await Listing.find({
//             category: { $regex: element, $options: "i"},
//         }).sort({_id: -1});
//         if(allListings.length != 0) {
//             res.locals.success = "Listings searched by category";
//             res.render("listings/index.ejs", {allListings});
//             return;
//         }
//     }
//     if(allListings.length == 0) {
//         allListings = await Listing.find({
//             country: { $regex: element, $options: "i"},
//         }).sort({_id: -1});
//         if(allListings.length != 0) {
//             res.locals.success = "Listings searched by country";
//             res.render("listings/index.ejs", {allListings});
//             return;
//         }
//     }
//     if(allListings.length == 0) {
//         allListings = await Listing.find({
//             location: { $regex: element, $options: "i"},
//         }).sort({_id: -1});
//         if(allListings.length != 0) {
//             res.locals.success = "Listings searched by location";
//             res.render("listings/index.ejs", {allListings});
//             return;
//         }
//     }

//     const intValue = parseInt(element, 10); //10 for decimal return - int ya NaN
//     const intDec = Number.isInteger(intValue); //check intValue is number or not

//     if(allListings.length == 0 && intDec) {
//         allListings = await Listing.find({ price: { $lte: element }}).sort({
//             price: 1,
//         });
//         if(allListings.length != 0) {
//             res.locals.success = `Listings searched for less than Rs ${element}`;
//             res.render("listings/index.ejs", { allListings });
//             return;
//         }
//     }
//     if(allListings.length == 0) {
//         req.flash("error", "Listings is not here !!!");
//         res.redirect("/listings");
//     }
// }
