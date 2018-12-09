# react-quick-start

A ready-to-use React / TypeScript / Next.js project structure.

## Tech stack

- React
- TypeScript
- Next.js
- ESLint
- Prettier
- styled-components

## Quick-start

`yarn` to install dependencies

`yarn dev` to start the development server

`yarn build` to build for production

## Deployment

Any `react-quick-start` project is set up to be easily deployed to [now](https://zeit.co/now). Install the `now` cli and run the `now` command in the top-level directory to deploy automatically.

## Analyzing bundle size

When Next.js bundles the code for production it can also create a report of the size of all project dependencies included in the bundle. To do this you use the `BUNDLE_ANALYZE` environment variable in the following way:

```
# Build and analyze the back end server bundle
BUNDLE_ANALYZE=server yarn build

# Build and analyze the front end browser bundle
BUNDLE_ANALYZE=browser yarn build

# Build and analyze both server and browser
BUNDLE_ANALYZE=both yarn build
```

These reports can be found inside `./bundles` and can be opened in a browser of your choice.
