# Daniel J. Saldaña - Portfolio

## Deployment Guide

For a step-by-step guide on deploying your code, check out [this deployment guide](https://danieljsaldana.dev/despliega-tu-web-facil-con-azure-static-web-apps).

## Overview

This is the repository for Daniel J. Saldaña's portfolio, showcasing his work and projects. The portfolio is built using Vue.js, Vuex for state management, and Sass for styling. The development environment is set up with Vite for fast and efficient development, and TypeScript for type-checking.

## Features

- **Vue.js 3**: Utilizes the latest version of Vue.js for building interactive user interfaces.
- **Vuex 4**: Manages state in the application to ensure a centralized and predictable state management.
- **Sass**: Enhances the styling capabilities with the power of Sass for maintainable and modular styles.
- **Vite**: The build tool for the project, ensuring fast and optimized development.
- **TypeScript**: Adds static typing to the project, catching errors during development.
- **Vitest**: Testing library for Vue.js applications, ensuring robust and reliable code.
- **Cypress**: End-to-end testing tool for a comprehensive testing strategy.

## Getting Started

1. Clone the repository:

```bash
git clone https://dev.azure.com/danieljsaldana/labs-danieljsaldana/_git/portfolio-vitest
```

2. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run serve
```

3. Open your browser and navigate to http://localhost:3000 to view the portfolio.

## Scripts

Here are the available scripts for this project:

- **npm run serve**: Starts the development server. Use this for local development.
- **npm run build**: Builds the project for production. The optimized files will be in the `dist/` directory.
- **npm run preview**: Previews the production build. This is useful for testing the optimized build locally.
- **npm test**: Runs tests using Vitest. Ensure your tests are in the `tests/` directory.
- **npm run coverage**: Generates test coverage using Vitest. The coverage report will be available in the `coverage/` directory.
- **npm run cypress:open**: Opens the Cypress test runner. Write end-to-end tests in the `cypress/` directory.
- **npm run cypress:run**: Runs Cypress tests in headless mode.

## Folder Structure

The project follows a standard Vue.js project structure. Here's a brief overview:

- **`src/`**: Contains the main source code of the project.
  - **`assets/`**: Images, fonts, and other static assets.
  - **`components/`**: Vue components used in the project.
  - **`views/`**: Top-level views or pages.
  - **`styles/`**: Stylesheets, including Sass files.
  - **`store/`**: Vuex store modules for state management.
  - **`main.ts`**: Main entry file for the application.
- **`public/`**: Public assets and HTML files.

Feel free to explore and customize the folder structure to fit your project needs.

## Customization

1. **Update Content**: Replace the existing content in the Vue components and styles to reflect your portfolio information.

2. **Add Projects**: Add your projects to the `views/Projects.vue` component.

3. **Modify Styles**: Customize the styles in the `styles/` folder to match your design preferences.

## Testing

To run tests using Vitest, use the following script:

```bash
npm test
``` 

### Deployment

To deploy the project, use the following script:

```bash
npm run build
```    

This will generate a production-ready build in the **dist/** directory.

## License

This portfolio is licensed under the [LGPL-3.0-or-later](LICENSE) license. For more details, please see the [LICENSE](LICENSE) file.

## Author

Daniel J. Saldaña | [https://danieljsaldana.dev](https://danieljsaldana.dev)

## Demo

 [Demo web](https://wonderful-bush-0d50b8303.4.azurestaticapps.net)
