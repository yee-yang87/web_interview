# Requirements

- Node 12.13+
# Tech stack

- [React](https://reactjs.org/)
- [parcel](https://parceljs.org/) as the bundler
- [tailwindcss](https://tailwindcss.com/) as the CSS framework
- [storybook](https://storybook.js.org/) to organize and develop components

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

# Running storybook
1. run `npm run storybook` to start the storybook server. The storybook site will open in your browser automatically.

# Building
1. run `npm run build` to run the parcel bundler and create a js bundle. The bundle will be output to the `dist` folder.
