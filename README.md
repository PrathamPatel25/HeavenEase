# HeavenEase

## Live Demo

Explore HeavenEase live: <br />
🔗 [HeavenEase Live Demo](https://heavenease.onrender.com/listings)

---

## Table of Contents

- [HeavenEase](#heavenease)
  - [Live Demo](#live-demo)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
    - [Frontend:](#frontend)
    - [Backend:](#backend)
  - [Installation](#installation)
    - [Clone the Repository](#clone-the-repository)
    - [Install Dependencies](#install-dependencies)
    - [Configure Environment Variables](#configure-environment-variables)
    - [Run the Application](#run-the-application)
  - [Environment Variables](#environment-variables)
  - [Contact](#contact)

---

## Overview

HeavenEase is a rental platform, offering a seamless experience for property listings, browsing, and bookings. It is designed to help users find their perfect temporary homes with ease and comfort.

---

## Features

- **Dynamic Property Listings:** Create, view, update, and delete property listings.
- **Image Upload:** Cloud-based image storage with Cloudinary integration.
- **Responsive Design:** Optimized for all screen sizes using modern design principles.
- **Secure Authentication:** User login and signup powered by Passport.js and session management.
- **Database Management:** MongoDB Atlas for secure and scalable data storage.
- **Error Handling:** Enhanced user experience with detailed error notifications.
- **File Upload:** Integrated Multer for seamless file uploads.
- **Environment-Specific Configurations:** Simplified setup with `.env` variables.

---

## Tech Stack

### Frontend:

- **EJS:** Templating engine for rendering dynamic content.

### Backend:

- **Node.js**: Server-side runtime environment.
- **Express.js**: Web application framework.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **Passport.js**: Authentication middleware.
- **Multer**: Middleware for handling file uploads.
- **Cloudinary**: Image storage and optimization.

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/PrathamPatel25/HeavenEase.git
cd HeavenEase
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables. See [Environment Variables](#environment-variables) for details.

### Run the Application

Start the development server:

```bash
nodemon run app.js
```

Access the app at `http://localhost:8080`.

---

## Environment Variables

In the root directory, create a `.env` file and configure the following variables:

```plaintext
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

ATLASDB_URL=your_mongodb_atlas_connection_string

SECRET=your_secret_key
```

---

## Contact

For any queries or feedback, please reach out:

- **LinkedIn**: [Profile](https://www.linkedin.com/in/pratham-patel-0920-/)
