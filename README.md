# Documentation Generator
This project serves as a utility wrapper for [JSDoc](https://www.npmjs.com/package/jsdoc).

## Overview
This package provides the following advantages over using [JSDoc](https://www.npmjs.com/package/jsdoc) by itself:
- provides ready made configuration that is ready to use out of the box
- is integrated with `git` and [GitHub Pages](https://pages.github.com/)

Simply run `npm run docPublish` to create a `gh-pages` branch in your repository, generate the documentation from your source, and push it to [GitHub](https://github.com/). After that all you need to do is find the link under `<Project> -> Settings -> GitHub Pages` and make it the project website link on the projects home page in [GitHub](https://github.com/). See the [Usage](#usage) section for more details.

This project will take your `README.md` file and turn it into a homepage with links to the documentation from your source code as defined by [JSDoc](https://www.npmjs.com/package/jsdoc). See [jsdocgenTest](https://github.com/h2oboi89/jsdocgenTest) as an example.

## Requirements
### JSDoc
`npm install -g jsdoc`

[JSDoc](https://www.npmjs.com/package/jsdoc) cannot be used as library and must be installed globally.

### Package.json
Add the following snippets to your `package.json` file:

#### Development Dependencies

```json
{
   "devDependencies": {
      "jsdocgen": "git+https://github.com/h2oboi89/jsdocgen.git#<commit-ish>"
   }
}
```

`<commit-ish>` can be any tag, sha, or branch. Default is nothing (`master`). See [here](https://docs.npmjs.com/files/package.json#git-urls-as-dependencies) for more information.

Commit-ish | Example
---------- | -----------------------------------------------------------
Nothing    | `.../jsdocgen.git`
Branch     | `.../jsdocgen.git#master`
Tag        | `.../jsdocgen.git#v0.2.0`
SHA        | `.../jsdocgen.git#3fbba539739989842d8fbf86ee90bbfbd5cd9ef5`

**NOTE**: First two examples are functionally identical.

#### Scripts

```json
{
   "scripts": {
      "docClone": "jsdocgen clone",
      "docGenerate": "jsdocgen generate",
      "docPublish": "jsdocgen publish"
   }
}
```

These provide a means of running `jsdocgen`. See [Usage](#usage) for more details.

#### Repository

```json
{
   "repository": {
      "type": "git",
      "url": "<repo SSH link>"
   }
}
```

This is how `jsdocgen` will know where to put the documentation.

Get the `<repo SSH link>` by copying the URL provided by GitHub `SSH clone URL`.

**Example**: `git@github.com:h2oboi89/jsdocgenTest.git`

**NOTE**: you can use the `HTTP clone URL` if you so desire, but we recommend the `SSH clone URL` instead.

## Usage
From your project root call the following via `npm run <Command>`:

Command       | Result
------------- | --------------------------------------------------------------------------------
`docClone`    | clones the project repository into `./doc/` and checks out the `gh-pages` branch
`docGenerate` | generates the documentation using [JSDoc](https://www.npmjs.com/package/jsdoc)
`docPublish`  | pushes updated documentation to `origin:gh-pages`

**NOTE**: each step will automatically call the preceding step (`docPublish -> docGenerate -> docClone`)

## Advanced
You can tweak the [JSDoc](https://www.npmjs.com/package/jsdoc) settings by modifying [jsdoc.json](./jsdoc.json).

You can tweak the `GitHub` integration by modifying the files found in `./src`.

## Testing
The [jsdocgenTest](https://github.com/h2oboi89/jsdocgenTest) repository serves as a means to test this project and also provides some examples on how to [use JSDoc](http://usejsdoc.org/).
