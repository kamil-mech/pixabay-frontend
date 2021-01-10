# Pixabay Frontend

This demo implements MVP Pixabay frontend as described in the spec

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

Before starting, copy `.env.sample` to `.env` and populate those variables appropriately
```
cp .env.sample .env
```

### `npm run proxy`

Sets up a local proxy backend. Running this is required.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Testing

This repo follows the black-box methodology [as evangelized by Kent C Dodds](https://kentcdodds.com/testing/)\
Especially:
- https://kentcdodds.com/blog/testing-implementation-details/
- https://kentcdodds.com/blog/stop-mocking-fetch

On top of that, it follows design-by-contract when it comes to interactions with the APIs. This means that ideally both the frontend and the backend should use the same sample fixtures and validation (e.g. JSON schema), by reference. This would ensure that at no point ever the contract between the provider and the consumer would be broken. Due to limitations (no access to BE repo), I have included those fixtures in the frontend (the consumer)

Some files of interest:
- .storybook/preview
- src/setupTests
- src/testUtils
- src/contract
- store/registry

### Responsive testing

[jsdom does not yet support css @media queries](https://github.com/jsdom/jsdom/blob/d6f8a97b5fb7709d6ad0215c1ae95fd4cab58489/lib/jsdom/level2/style.js#L29-L30). Thus it is not possible to test some breakpoints, like css-only rules embedded in styled-components. However, with some ugly hacks, it is possible to mock window.matchMedia. Arguably, proper implementation is more important than 100% test coverage. If we want confidence, we should emulate as close to the real environment as possible (e.g. tests should set browser width, not set up mocks upon mocks). For now this can be most confidently tested at the E2E layer. Ideally we should help improve jsdom by introducing a PR with responsive capabilities - and then finally write some clean tests

### Snapshot testing

Every project I was on, snapshot testing was eventually removed. It's a shortcut that feels productive, but eventually backfires in a nasty way (or becomes completely abandoned). It has a very high noise-to-signal ratio

### Testing styling & css

At the moment I believe that no amount of programmatic testing can compete with the human eye. Storybook can greatly aid this manual process. In theory we could snapshot-test the pixels, but that would likely end up being noise too

## Store

This project uses [zustand](https://www.npmjs.com/package/zustand). It's much simpler and much more minimalistic than Redux and even Recoil. It's hooks based and allows us to split the code into self-contained microstores. It doesn't require any middleware to use and can even operate outside of the hooks realm. And we still get to keep all the advantages of a fully-fledged store system

## Forms

This project doesn't require forms, but if it did, it would use [react-hook-form](https://www.npmjs.com/package/react-hook-form) with [ajv](https://www.npmjs.com/package/ajv)
