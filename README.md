## Image Gallery Editor

A simple React application for browsing and editing images from the Lorem Picsum API. This app allows you to browse through a gallery of images, select an image to edit, and apply various transformations such as resizing, grayscale filtering, and blur effects.

## Features

-   Browse paginated gallery of images from Lorem Picsum
-   View image author information
-   Edit images with the following options:
    -   Adjust width and height
    -   Apply grayscale filter
    -   Add blur effects (level 0-10)
    -   Persistent settings through URL parameters
    -   Responsive design

## Prerequisites

-   Node.js 18.x (recommended: 18.18.x or higher)
-   npm 8.x or higher

## Getting Started

1. **Set up Node.js 18.x**

If you have nvm installed:
`bash nvm install 18.18.0 nvm use 18.18.0 `

Or download from [Node.js website](https://nodejs.org/)

2. **Install dependencies**

`bash npm install `

3. **Start the development server**

`bash npm start `

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

To create a production build:

`bash npm run build `

The build artifacts will be stored in the `build/` directory, ready for deployment.

## Project Structure

-   `src/App.tsx` - Main application component with routing
-   `src/components/GalleryPage.tsx` - Image gallery with pagination
-   `src/components/EditPage.tsx` - Image editor with various controls
-   `src/components/ImageCard.tsx` - Card component for displaying images
-   `src/styles/` - CSS files for styling components

## Technologies Used

-   React 18
-   TypeScript
-   React Router 6
-   Lorem Picsum API for images

## API Reference

This project uses the [Lorem Picsum API](https://picsum.photos/) for images:

-   Gallery listing: `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
-   Image by ID: `https://picsum.photos/id/${id}/${width}/${height}`
-   Optional params: `?grayscale` and `?blur=${level}`

## License

[MIT](https://choosealicense.com/licenses/mit/)
