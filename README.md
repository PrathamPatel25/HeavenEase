<div align="center">

# 🏠 HeavenEase

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://heavenease.onrender.com/listings)
[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![EJS](https://img.shields.io/badge/EJS-black?style=flat&logo=ejs&logoColor=white)](https://ejs.co/)

Your gateway to exceptional temporary homes and unique stays

[Live Demo](https://heavenease.onrender.com/listings) | [Report Bug](https://github.com/PrathamPatel25/HeavenEase/issues) | [Request Feature](https://github.com/PrathamPatel25/HeavenEase/issues)

</div>

## ✨ Key Features

- 🏡 **Property Management**

  - Create, edit, and delete property listings
  - Rich media uploads (image)
  - Detailed property descriptions

- 👥 **User Features**

  - Secure authentication and registration
  - Property reviews and ratings

- 💫 **Platform Features**
  - Responsive design for all devices
  - Advanced search and filtering

## 🛠️ Tech Stack

### Core Technology

- **Runtime Environment:** Node.js (v20.12.2)
- **Web Framework:** Express.js (v4.21.0)
- **Template Engine:** EJS (v3.1.10) with EJS-Mate
- **Database:** MongoDB with Mongoose ODM

### Authentication & Security

- **Authentication:** Passport.js with Local Strategy
- **Session Management:** Express Session
- **Data Validation:** Joi Schema Validation
- **Security Middleware:** Various Express security packages

### File Handling & Storage

- **Image Upload:** Multer (v1.4.5-lts.1)
- **Cloud Storage:** Cloudinary (v2.5.1)
- **Storage Management:** Multer-Storage-Cloudinary

### Additional Tools

- **Method Override:** For RESTful routes
- **Flash Messages:** Connect-flash for user notifications
- **Session Store:** Connect-Mongo for session persistence
- **Environment Variables:** Dotenv for configuration
- **Favicon:** Serve-favicon for site identity

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.12.2 or higher)
- MongoDB
- npm or yarn
- Cloudinary account

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/PrathamPatel25/HeavenEase.git
   cd HeavenEase
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file:

   ```env
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ATLASDB_URL=your_mongodb_atlas_connection_string
   SECRET=your_secret_key
   ```

4. **Start the server**
   ```bash
   nodemon app.js
   ```

## 🔑 Key Features Breakdown

### For Property Owners

- Easy listing creation and management
- image uploads
- Pricing management

### For Guests

- Advanced search filters
- Review and rating system

## 🎯 Roadmap

- [ ] Add payment gateway integration
- [ ] Enhance search with filters
- [ ] Add Google Maps integration
- [ ] Implement user verification
- [ ] Add booking calendar

## 👨‍💻 Author

**Pratham Patel**

- LinkedIn: [Pratham Patel](https://www.linkedin.com/in/pratham-patel-0920-/)
- GitHub: [@PrathamPatel25](https://github.com/PrathamPatel25)

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)
- [Passport.js](http://www.passportjs.org/)
- [EJS](https://ejs.co/)

---

<div align="center">

If you find HeavenEase helpful, please consider giving it a ⭐️!

</div>
