# Requirements

- Node 12.13+

## Required to run app locally (not required for storybook)
- Active internet connection since running locally will currently use api.es-feature.io for data
- An active estatespace account
# Tech stack

- [React](https://reactjs.org/)
- [parcel](https://parceljs.org/) as the bundler
- [tailwindcss](https://tailwindcss.com/) as the CSS framework
- [storybook](https://storybook.js.org/) to organize and develop components
- [axios](https://github.com/axios/axios) for network connections (though most API calls to the interal backend use an internal library)

# Linting
This project uses [ESlint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting.

The linter can be run using `npm run lint`.

It is also highly recommended to use an eslint and a prettier plugin for your IDE. For VSCode, [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugins can be found in those links. It is also recommeneded to have auto fix on save enabled for ESLint and to set prettier as your default formatter.

settings.json

```json
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
```

# Organization
All source code for the project can be found in the `src` folder.

## Folders
### helpers
Contains functions that perform data manipulation or validation as well as some static data.

### hooks
Contains [react hooks](https://reactjs.org/docs/hooks-overview.html) utilized by the app.

### interceptors
Contains [axios interceptors](https://github.com/axios/axios#interceptors) mainly for managing auth, tenant, session refreshes, and other high level API requirements.

### Pages
Contains the different pages for the main site. These pages DO NOT show up in storybook and contain business logic. Each page corresponds to a route (/assets, /properties, etc).

### Routers
Contains routing information that associates routes to pages

### state
Contains [react context hooks](https://reactjs.org/docs/hooks-reference.html#usecontext) that managing high level app states.

### stories
Contains assets and Components. This folder is utilized by both Storybook and the main app. Each Component consists of a jsx file defining the component and a stories file that defines how Storybook reads and utilizes the component.

### App.jsx
The starting point for the main React app.

### constants.js
Defines any constants used in the app.

# Branching and CI/CD deployment

Pushing to specfic branches triggers deployments:

- pushing to `feature` triggers deployment to <https://console.es-feature.io/>
- pushing to `master` triggers deployment to <https://console.es-staging.io/>
- pushing to `master` and tagging the commit with a #.#.# notation triggers deployment to <https://console.estatespace.com./> **This is a production deployment and should only be done if you know are you are doing.**

# Initial setup
1. clone the repo
1. ensure Parcel is installed globally (`npm install -g parcel-bundler`)
1. run `npm i` to install dependencies

# Running the site locally
1. run `npm start` to start the parcel server. The site will be accessible at <http://localhost:1234/> by default.

## Troubleshooting
If you run into caching issues or things aren't updating, try deleting the `.cache` folder created by parcel.

# Running storybook
1. run `npm run storybook` to start the storybook server. The storybook site will open in your browser automatically.

# Building
1. run `npm run build` to run the parcel bundler and create a js bundle. The bundle will be output to the `dist` folder.
