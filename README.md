[![Netlify Status](https://api.netlify.com/api/v1/badges/49dd7362-65d3-4846-9805-dfe4c9a0b4a1/deploy-status)](https://app.netlify.com/sites/my-starbucks-clone-proj1/deploys)

# ☕ STARBUCKS Main page Clone Project

<div align="center">
<img width=" 100px" height=100px src ="./images/markdown_logo.png" alt = "logo">
</div>

---

# :bell: Visit the site

➡️ [<u>Go to Site</u>](https://my-starbucks-clone-proj1.netlify.app/ "Open page")

## 🧐 About

Starbucks homepage clone with HTML, CSS and JavaScript. It supports various transition effects and dynamic features.

## 💡Features

## 📑 Initial Settings

<h3>🔥Favicon(favorite icon)</h3>

---

Favicon is a logo that represents the page.  
It can be found next to Web Page title on 'tab'.

❓<strong>How to use favicon </strong>❓

- `favicon.ico`
- `favicon.png`
- `favicon.png` provides better quality.

> All favicon file should be at root directory!

⚡Use `favicon.ico`

1. Generate `.ico` file at [iconifier.net](https://iconifier.net/)
2. Place `favicon.ico` file at root directory.
3. It will be automatically set as favicon.

![Starbucks](./favicon.ico)
<br></br>
⚡Use `favicon.png`

1. Place `favicon.png` file at root directory.
2. Add following codes at `head` tag.

```html
<link rel="icon" href="./favicon.png" type="image/x-icon" />
```

<img src = "./favicon.png" alt = "Starbucks" width = 200 />

<h3>🔥Reset-CSS</h3>

---

Reset the Browser's CSS style for Cross Browsing.

🎯 <strong>Steps</strong> 🎯

1. Go to web site for reset-css.
   > [reset-css](https://www.jsdelivr.com/package/npm/reset-css)
2. Copy HTML code.
3. Paste at `head` tag.

  <h3>OR</h3>

Just copy the following code and paste it! 😆

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css"
/>
```

<h3>🔥Open Graph Protocol</h3>

---

Set the preference information when using Social network.

<div align = "center">

**_KakaoTalk_**

<img width= "250" src = "./images/kakaotalk.jpg" alt = "kakaotalk image"><br>

**_Discord_**

<img width= "500" src = "./images/discord.jpg" alt = "discord image">

</div>
<br>
⬇️ Following codes are used in my project. ⬇️

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta
  property="og:description"
  content="More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more."
/>
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta
  property="og:url"
  content="https://my-starbucks-clone-proj1.netlify.app/"
/>
```

- `og:type` : Type of page (Ex: `website`, `video.movie`)
- `og:site_name` : Name of the page it belongs to
- `og:title` : Title of the pate
- `og:description` : Simple description of the page
- `og:image` : Path of the page's representative icon
- `og:url` : URL of the page

<br>🐤<strong>Twitter Card</strong>

---

Twitter card is similar with Open Graph Protocol, but it's used when using Twitter.

⬇️ Codes for Twitter Card in my project. ⬇️

```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Starbucks" />
<meta property="twitter:title" content="Starbucks Coffee Korea" />
<meta
  property="twitter:description"
  content="More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more."
/>
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
<meta
  property="twitter:url"
  content="https://my-starbucks-clone-proj1.netlify.app/"
/>
```

- `twitter:card` : Type of page(card) (Ex: `summary`, `player`)
- `twitter:site` : Name of the page it belongs to
- `twitter:title` : Title of the page
- `twitter:description` : Simple description of the page
- `twitter:image` : Path of the page's representative icon
- `twitter:url` : URL of the page

<h3>🔥Google Fonts and Material Icons</h3>

---

⭐ Following Fonts are used in this project.

- `Nanum Gothic`: Regular 400, Bold 700

🎯 <strong>Steps</strong> 🎯

1. Go to Google Font Site.
   > [Google Font](https://fonts.google.com/ "Google Font")
2. Search for `Nanum Gothic`.
3. Add `Regular 400` and `Bold 700`.
4. Copy the `link` section and paste in `head` tag.
   > `link` tag should be inserted before `css link` tag!

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

5. copy `css rules` and paste in `body` tag selector in css file.

```css
body {
  font-family: "Nanum Gothic", sans-serif;
}
```

<br>
⭐ Using Google Meterial Icons  <br></br>

> ❕Material icons are treated as `font`.

🎯 <strong>Steps</strong> 🎯

1. Paste Following code in `head` tag.
   > `link` tag should be inserted before `css link` tag!

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

2. Go to Google Material Icons ite.
   > [Google Material Icons](https://fonts.google.com/icons?selected=Material+Icons "Google Material Icons")
3. Search for Icons to use.
4. Write code in following format.
   > Just change the `search` part to name of icon.  
   > Leave the class name as `material-icons`

```html
<div class="material-icons">search</div>
```

## 📚 Libraries

<h3> 📖 Javascript Libraries</h3>

---

<h4> 📂 lodash.js </h4>
- Provides various utility functions.

</br>

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
  integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
```

:arrow_forward: I used following functions.

- `_.throttle(function(){}, time);` : give time amount of delay to function.

<h4> 📂 gsap.js </h4>
- Provides various animation functions.

</br>

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"
  integrity="sha512-f8mwTB+Bs8a5c46DEm7HQLcJuHMBaH/UFlcgyetMqqkvTcYg4g5VXsYR71b3qC82lZytjNYvBj2pf0VekA9/FQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
```

:arrow_forward: I used following functions.

- `gsap.to(element, time, {css objects}` : give time amount animation to given css objects

## ⛏️Built with

- <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
- <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
- <img src ="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
- <img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
