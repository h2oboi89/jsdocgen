# Documentation Generator
This project serves as a utility wrapper for [JSDoc](http://usejsdoc.org/).

## Package.json
Add the following snippets to your `package.json` file:

### Development Dependencies

```json
{
   "devDependencies": {
      "jsdocgen": "git+https://github.com/h2oboi89/jsdocgen.git#<commit-ish>"
   }
}
```

`<commit-ish>` can be any tag, sha, or branch. Default is nothing (`master`). See [here](https://docs.npmjs.com/files/package.json#git-urls-as-dependencies) for more information.

Commit-ish | Example
---------- | ---------------------------------------------------------
Nothing    | `.../jsdocgen.git`
Branch     | `.../jsdocgen.git#master`
Tag        | `.../jsdocgen.git#v0.2.0`
SHA        | `.../jsdocgen.git#3fbba539739989842d8fbf86ee90bbfbd5cd9ef5`

**NOTE**: First two examples are functionally identical.

### Scripts

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

### Repository

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
`docGenerate` | generates the documentation using [JSDoc](http://usejsdoc.org/)
`docPublish`  | pushes updated documentation to `origin:gh-pages`

**NOTE**: each step will automatically call the preceding step (`docPublish -> docGenerate -> docClone`)

## Testing
The [docGenTest](https://github.com/h2oboi89/docGenTest) repository serves as a means to test this project and also provides some examples on how to use [JSDoc](http://usejsdoc.org/).
