# RENCI's COVID-19 Response Site

## Overview

This is the website for RENCI's COVID-19 response efforts. This site is built with [Gatsby](https://www.gatsbyjs.org), which is a free and open source framework based on [React](https://reactjs.org). Sites built with Gatsby are modern and _fast_. (To reduce bundle size and increase performance here, though, we use [Preact](https://preactjs.com/) instead of React)

The site is served on [GitHub Pges](https://pages.github.com/) at [https://renci.github.io/covid-19](https://renci.github.io/covid-19), and [https://covid-19.renci.org](https://covid-19.renci.org) redirects to this location.

This site is rather small and consists of four main views: 
- Home: information about to the general response efforts and relatied blog posts on renci.org
- Our Work: specific projects on which RENCI researchers are focusing
- Resources: general resources to learn about and research the pandemic
- Contact: details on getting in touch to partner against the pandemic

## Project Structure

The portion of the project one mostly interacts with lives within the `src` directory. Its structure is shown below, and the directories described in this document are expanded to their state at the time of its writing.

```bash
$ tree -L 2

├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── LICENSE
├── node_modules
│   ...
├── package.json
├── package-lock.json
├── public
│   ├── icons
│   ├── index.html
│   ├── manifest.webmanifest
│   ├── page-data
│   └── static
├── README.md
└── src
    ├── components
    ├── contexts
    ├── data
    ├── hooks
    ├── images
    ├── pages
    ├── styles
    ├── theme
    └── util
```

## Source Data

Much of the static content lives directly in the pages themselves (React components in the `./pages` directory). The `./data` directory consists of source data for managing content that is subject to frequent change. The content for the Our Work and Resource views lives here, as does the list of blog posts rendered on the Home view.

```bash
 $ tree -L 2 ./src/data/
./src/data/
├── blog.yaml
├── index.js
├── resources.yaml
└── work
    ├── answering-biomedical-questions.md
    └── literature-co-occurrence-knowledge-graphs.md

```

## Contributing Content

To update Our Work or Resources content or to add a blog post, please make the appropriate changes to the source data files in the `./data` directory and submit a pull request.

## Development Contributions

If you would like to contribute to the development of this site, feel free to propose changes with pull requests. The `master` branch will always represent the deployed production version of the site, so please branch feature branches off of `master`.

For local development you will need `node` and the `gatsby-cli`. Once this repo is cloned, execute `npm i` to install all dependencies, after which `gatsby develop` can be run from the project root to spin up the development server, which is served on port 8000 by default. With the development server's built-in hot module reloading, changes can be seen and tested as they are made to the source code.

Before submitting a pull request, please ensure your changes will result in a successful build. To test this execute

- `gatsby clean` (clears cached files),
- `gatsby build` (builds site), and
- `gatsby serve` (serves build files on port 9000)

(or in one line: `gatsby clean && gatsby build && gatsby serve`).

## Deployment

This site is deployed using [GitHub Pages](https://pages.github.com/). There is a script (see `package.json`) to build the site for production and deploy to GitHub Pages. To do so, execute the following command.

```bash
$ npm run deploy
```

Be sure a local build is error-free before deploying the actual site using the clean, build, and serve commands described above.

TODO: GitHub action to automate deployment

Barring any build errors, the production will be available at https://renci.github.io/covid-19 in a few minutes.

## Resources

- [React](https://reactjs.org/)
    + [Gatsby](https://www.gatsbyjs.org/)
    + [Preact](https://preactjs.com/)
- Data Sources
    + [Markdown](https://www.markdownguide.org/basic-syntax/)
    + [YAML](https://en.wikipedia.org/wiki/YAML)
- [GitHub Pages](https://pages.github.com/)
