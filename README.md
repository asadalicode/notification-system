# Vite React TypeScript Project

## Overview

This is a React application built with Vite and TypeScript. It includes Firebase integration, environment-based configuration, and Tailwind CSS for styling.

## Project Structure

Here's a high-level overview of the project structure:

src/
- ├── @types/ # TypeScript interfaces and namespaces
- │ └── ... # Custom types and interfaces
- ├── components/ # React components
- │ └── ... # Component files
- ├── assets/ # Static assets (images, fonts, etc.)
- │ └── ... # Asset files
- ├── firebase/ # Firebase configuration and related files
- │ ├── config.ts # Firebase configuration file
- │ └── ... # Additional Firebase setup files
- ├── pages/ # React pages/views
- │ └── ... # Page components
- ├── services/ # Service files for API calls, Firebase interactions, etc.
- │ └── ... # Service files
- └── App.tsx # Main app component

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://gitlab.com/co-ios/co-mean/notifications-system.git
   cd notifications-system

npm install

Environment Variables
The project uses environment variables for configuration. Create two files in the root directory:

.env.development: Environment variables for development.
.env.production: Environment variables for production.

Example .env.development:

```sh 
VITE_FIREBASE_API_KEY=your-development-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-development-auth-domain
VITE_FIREBASE_PROJECT_ID=your-development-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-development-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-development-messaging-sender-id
VITE_FIREBASE_APP_ID=your-development-app-id
```

# Example .env.production:

```sh
VITE_FIREBASE_API_KEY=your-production-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-production-auth-domain
VITE_FIREBASE_PROJECT_ID=your-production-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-production-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-production-messaging-sender-id
VITE_FIREBASE_APP_ID=your-production-app-id
```

Note: Make sure to replace the placeholder values with your actual Firebase credentials.

# Firebase Configuration
Firebase configuration is located in src/firebase/config.ts. This file uses environment variables to configure Firebase.

# Scripts
Start Development Server:
npm run dev
# or
yarn dev

# Build for Development and Production:

For development:
npm run build:dev

For production:
npm run build:prod




