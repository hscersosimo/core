# Core App - Design System

We are using Next.js, you can learn more about it here > https://nextjs.org/learn.
To run a local dev server, go to your terminal > project folder, and type `npm run dev`.

You'll need to download and install all required node modules first. You can do this by typing `npm install` or `yarn`.

## Pushing to Git & Heroku

`git add .` - Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEADYOUR-FILE'.

`git commit -m "First commit"` - Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.

`git push -u origin main` - Pushes the changes in your local repository up to the remote repository you specified as the origin

`git push heroku main` - Pushes the same content to Heroku. Typing `heroku open` will open the URL in your browser.

## Naming Conventions

`lowerCamelCase` for file names and folders, and `UpperCamelCase` for components. For example, a page (or a folder) can be named `designSystem`, and a component `PageHeader`.

## File Formatting

Make sure you install `prettier` as an extension in VSCode, and set it as the default formatter. Check this URL for step by step instructions https://www.alphr.com/use-prettier-vs-code/

## React vs HTML attributes

Remember that all HTML tags need closure. For example, an `<input>` must have a slash at it's end (`<input />` or `</input>`).

Some HTML attributes must be defined differently when compared to pure HTML; most classes use a camelCase version instead of the usual name.
Here's a list with the most usual cases: `className` (instead of `class`), `colSpan`, `defaultValue` (instead of `value` or `selected`), `htmlFor` (instead of `for`), `readOnly`, `defaultChecked` (instead of `checked`), `autoComplete`, `minLenght`, `maxLenght`, `tabIndex`.
