
//после миксина на изображения добавляем babel-loader - преобразует js в код по старым стандартам
npm install babel-loader @babel/preset-env --save-dev

Download your package: 
Extract this package in the root of your web site. If your site is http://www.example.com, you should be able to access a file named http://www.example.com/favicon.ico.
Insert the following code in the <head> section of your pages:
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">



    /*, не нужно каждый запускать приложение
    "watch": "webpack --mode development --watch"
  */