import * as contentful from 'contentful';

const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    environment: process.env.REACT_APP_ENVIRONMENT,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

export default client;
