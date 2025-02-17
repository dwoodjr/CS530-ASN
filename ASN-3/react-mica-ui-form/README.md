# React Mica UI Form

## Overview

This is a simple interactive React web application that allows users to enter and submit their name and age. The app validates user input and displays the submitted data in a structured format. The UI follows a Mica-inspired design with a blue and yellow color scheme.

## Features

- **Form Component:** Allows users to input name and age.
- **Validation Component:** Ensures the name is not empty and age is a positive number.
- **Display Component:** Shows submitted user data.
- **Mica UI Design:** Blue and yellow theme with modern UI elements.
- **Animations:** Smooth transitions using Framer Motion.
- **PropTypes for Validation:** Ensures strict type-checking for component props.

## Technologies Used

- **Framework:** React + Vite (for Tailwind CSS integration)
- **Styling:** Tailwind CSS (version 4) with PostCSS
- **UI Effects:** Custom Mica-inspired design with backdrop blur
- **Development Server:** Vite for faster builds and HMR
- **PropTypes:** Used for runtime prop validation

## Installation

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Steps

1. Clone the repository from GitLab:

   ```sh
   git clone https://gitlab.com/your-repo/react-mica-ui-form.git
   cd react-mica-ui-form
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`

## Implementation Details

- The application is structured using **React components**:
  - `Form.jsx` handles user input and validation.
  - `Display.jsx` shows submitted data.
  - `Layout.jsx` organizes components and ensures a structured UI.
- **Tailwind CSS (v4) with PostCSS** is used for styling with custom classes to achieve a **Mica UI look** (blurred glass effects, soft shadows, neon highlights).
- **State Management** is handled via `useState` for form data submission.
- **PropTypes** is used in `Form.jsx` and `Display.jsx` to enforce runtime type checking and ensure data integrity.
- **Fully responsive design** that scales well on different screen sizes, optimized for 1080p.

## License

This project is open-source under the MIT License.
