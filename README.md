# RENCI's COVID-19 Response Site

## Overview

This is the website for RENCI's COVID-19 response efforts. This site is built with [Gatsby](https://www.gatsbyjs.org), which is a free and open source framework based on [React](https://reactjs.org). Sites built with Gatsby are modern and _fast_. (To reduce bundle size and increase performance here, though, we use [Preact](https://preactjs.com/) instead of React)

The site is served on [GitHub Pages](https://pages.github.com/) at [https://renci.github.io/covid-19](https://renci.github.io/covid-19), and [https://covid-19.renci.org](https://covid-19.renci.org) redirects to this location.

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
│   ├── ... {{contents omitted}}
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
$ tree -L 3 ./src/data
./src/data
├── blog.yaml
├── index.js
├── resources.yaml
└── work
    ├── answering-biomedical-questions
    │   └── index.md
    ├── apogee
    │   └── index.md
    └── literature-co-occurrence-knowledge-graphs
        └── index.md

```

## Contributing Content

To update Our Work or Resources content or to add a blog post, please make the appropriate changes to the source data files in the `./data` directory and submit a pull request.

### Blog Posts and Resources

Blog posts and Resources all live in singles files each, so editing is accomplished simply by following the existing format of each YAML file. 

### Our Work

Because Our Work items are a bit more detailed, each of these items resides in a directory in the `'./src/data/work/` directory. Adding items for Our Work involves creating a directory for the item, inside of which resides the copy and assets for the Our Work item. A Markdown file (index.md) is the minimum requirement to create an Our Work item. Assets referenced in the Markdown should also live in that same directory with references given as relative paths to these assets. To make finding Our Work items easily, please [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles) the directory name, as in `a-quick-brown-fox-jumps-over-the-lazy-dog`, with the Our Work item title. The structure of the Markdown file is as follows.

```
---
path: /quick-brown-fox
title: The Quick Brown Fox Jumps Over the Lazy Dog
blurb: >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit similique nemo a optio.
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio eum tempore
enim dolores itaque exercitationem voluptatibus iure illum laboriosam non,
veniam reprehenderit cumque nobis, ut atque? Ut non eius modi!.

![A brown fox jumping over a lazy dog](fox-and-dog.png)

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit assumenda
repellat, voluptates nihil veritatis iste eaque corporis voluptate excepturi
maiores illum esse quibusdam neque explicabo dolorum aut, laborum accusamus
laboriosam sapiente ut impedit. Quibusdam reprehenderit, eius a mollitia eos
ex, neque amet laudantium maxime doloremque enim provident quisquam dolore
recusandae inventore sunt veniam tempora blanditiis assumenda ab expedita
voluptatibus asperiores.
```

In this example the directory contents would look like the following.

```bash
$ tree ./src/data/work/a-quick-brown-fox-jumps-over-the-lazy-dog
./src/data/work/a-quick-brown-fox-jumps-over-the-lazy-dog
├── index.md
├── fox-and-dog.png
```

Note the section of between the pair of three dashes at the top of the Markdown file. This section, called the frontmatter, contains three required fields to publish an Our Work item: path, title, and blurb. The main content (in Markdown or HTML syntax) goes beneath that. Each Our Work item gets used in two places. The first place work items are rendered is as cards in the list on the [/work view](https://covid-19.renci.org/work). The title populates the card header, and the blurb occupies the body of the card. Each of these cards receives a button to "Read More," which links to a specifc page (accessible at the path specified in the frontmatter) that contains the transformed Markdown content.

### Contribution Quick Reference

| Content Type  | What to Edit  |
| ------------- | ------------- |
| Blog          | [./src/data/blog.yaml](https://github.com/RENCI/covid-19/blob/master/src/data/blog.yaml) |
| Resources     | [./src/data/resources.yaml](https://github.com/RENCI/covid-19/blob/master/src/data/resources.yaml) |
| Our Work      | [./src/data/work/*](https://github.com/RENCI/covid-19/tree/master/src/data/work) |


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
