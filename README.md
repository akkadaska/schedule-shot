# SCHEDULE SHOT / スケジュールショット
A web app that creates schedule shots from text-based data by React and React Pixi  
テキストベースのデータからスケジュールショットを作成するReactとReactPixiで開発したWebアプリ
## What's this? / これは何?
This app enables you to create easily a image of schedule list which streamers and virtual streamers often post SNSs from text-based data.  
配信者やVTuberの方がよくSNSで投稿される、自身の配信スケジュールのキャプチャ画像をテキストベールのスケジュールデータから簡単に作成/編集するためのウェブアプリです。
## Terms of Use / 利用にあたって
- You can use this web app for any use without any permission.  
ウェブアプリはどのような利用目的でも、許可なしにご利用頂けます。  
- You can use this script under MIT licence.  
スクリプトはMITライセンスの下ご自由にご利用頂けます。  
- This is a test app for my studying web programming. It would work but may contain critical problems. Make sure you need to be responsible yourself. I'm glad if you tell me bugs, suggestions or just comments via issues or [Twitter](https://twitter.com/akkadaska).  
これは、私がウェブプログラミングを勉強するために作ったテストアプリです。動作するとは思いますが、致命的な問題を含んでいるかもしれません。私は一切の責任を負うことができませんのでご了承ください。バグや提案、コメントなどをissueや[Twitter](https://twitter.com/akkadaska)で教えてくれると喜びます。  
## For Developers / 開発者向け情報
### Overview
- Node.js and Node Package Manager is required for developing.
- Main language is **TypeScript**.
- **React** is used as the main framework.
- **React Pixi** is used for rendering image.
- **Webpack** is used for compile and bundle scripts.
- **GitHub Pages** is used for histing.
### Directory Organization
- [`/`](./): config files
- [`src`](./src) 
- `dist` : When bundling, dist directory will be created and have bundled files. This directory should be a web root when serving.
### Workflow
Some npm run commands are ready.
- **Launch webpack dev server on port 8081 for debugging**
  ```sh
  npm run start
  ```
  If you use VSCode, you can launch Chrome debug mode after launch webpack dev server. The `.vscode/launch.json` is provided in this repository.
- **Build with webpack**
  ```sh
  npm run build # with production mode using webpack.prod.js as config
  npm run build-dev # with developing mode using webpack.dev.js as config
  ```
  After run these commands, the `/dist/` directory will be created and have compiles bundle files. This directory is root when hosting.
- **Serve this web app at localhost**
  ```sh
  npm run serve # Make sure you have dist directory and bundled files.
  ```
## License
&copy; akkadaska, 2021. Licensed under a [MIT license](./LICENSE).