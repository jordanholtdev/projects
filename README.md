# Projects

This application showcases my portfolio, displaying a collection of my most recent development work. Users can see a complete list of my most recent projects & they can sort the projects based on the technologies used in each one.

## Functionality

[Contentful](https://www.contentful.com/) serves as a CMS for the project data and a React front-end requests and renders this data. The Contentful JavaScript Content Delivery Library is used to make the requests to Contentful. A basic markdown content type is used for each projects description and this is then rendered in React via [marked](https://www.npmjs.com/package/marked). Redux Toolkit is used to manage state throughout the application and Chakra-UI is used as the component library.

## Technology

-   [React](https://reactjs.org/): Front-end user interface library.
-   [Contentful](https://www.contentful.com/): Content management system (CMS) used for this project.
-   [Redux Toolkit](https://redux-toolkit.js.org/): Used for state management.
-   [Charka UI](https://chakra-ui.com/): UI component library used for styling.
-   [marked](https://marked.js.org/): Markdown compiler for parsing the Github markdown
-   [Docker](https://www.docker.com/): Portable container used for deployment.
-   [contentful.js](https://contentful.github.io/contentful.js/contentful/9.1.18/): JavaScript library for the Contentful Content Delivery API and Content Preview API.

## Local development setup

1. Clone the git repository

```
$ git clone https://github.com/jordanholtdev/projects.git my-project
$ cd my-project
```

2. Install Dependencies

```
$ npm install
```

3. Create `.env` file:

```
//example contentful environment variables
REACT_APP_SPACE_ID=YOUR_SPACE_ID
REACT_APP_ACCESS_TOKEN=YOUR_TOKEN
REACT_APP_ENVIRONMENT=YOUR_ENVIRONMENT
```

4. Run development server

```
$ npm start
```

## Build application container image

1. Build container image

```
docker build -f dockerfile.prod -t my-project:prod .
```

2. Start the container using `docker run`:

```
docker run -p 8080:80 my-project:prod
```
