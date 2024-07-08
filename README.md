# interactive-comic

*An interactive comic reader.*

## Maintenance

To get started editing this repository:

1. Have [Git Bash](https://git-scm.com/downloads) and [NodeJS](https://nodejs.org/en/download/package-manager) installed on your computer
2. Clone this repository to your computer with `git clone`
3. With your favorite text editor (VSCode, IntelliJ IDEA, Notepad++, ...), open the repository
4. Run the command `npm i` to install dependencies
5. Run the command `npm run dev` to spin up the development server to see your local changes
6. When you're ready to push your changes to GitHub, push to the `main` branch
7. Update the `production` branch with what's on `main` through the command `git push origin main:production`
8. The GitHub Actions workflow will build and deploy the website to `<username>.github.io/<repository-name>`

## Files

### `components`

#### `InteractiveComic`

Displays the reader for the current page.

#### `Navigation`

The navbar and route hooks.

### `data`

The JSON data files contain the information for each comic, including page ID, image, available actions the player can take, and what flags should be set for certain actions to appear.

### `types.d.ts`

Type declarations used to parse the data files, and add type safety for custom theme variables defined in `theme.tsx`

### `pages`

Contains the top level component served at each route.

### `main.tsx`

The root component which contains the route tree.

---

*Created with the [Material UI + Vite.js](https://github.com/mui/material-ui/tree/next/examples/material-ui-vite-ts) template*
