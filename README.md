https://storybook.js.org/docs/react/essentials/controls
https://stasonmars.ru/javascript/pogruzhaemsya-v-raboty-s-children-na-react/

Steps to fix your error
Make sure your tsconfig.json file has "declarationDir": "types" to direct the bundler's typescript plugin to create and store declaration files in the types folder when you run npm run rollup
Uninstall the existing @rollup/plugin-typescript package version by running npm un @rollup/plugin-typescript --save-dev
Install @rollup/plugin-typescript with the command npm i @rollup/plugin-typescript@8.3.3 --save-dev. As you see, we are picking a specific version.


https://allorion.github.io/fui