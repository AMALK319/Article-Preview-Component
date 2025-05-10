# Frontend Mentor - Article preview component
<img src="https://github.com/catherineisonline/article-preview-component-frontendmentor/blob/main/images/project-preview.png?raw=true"></img>


<h1 align="center">Article preview component</h1>

<div align="center">
  <h3>
    <a href="https://amalk319.github.io/Article-Preview-Component/" color="white">
      Live
    </a>
    <span> | </span>
    <a href="https://github.com/AMALK319/Article-Preview-Component">
      Solution
    </a>
   <span> | </span>
    <a href="https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT">
      Challenge
    </a>
  </h3>
</div>

<br>
<br>
<br>

## 🧠 Key Learnings

### 1. Advanced Element Positioning
```css
.share-box {
  position: relative;
  bottom: 80px; /* From bottom to top*/
  transform: translate(-50%, 0); /* Horizontal centering */
}

```

### 2. Pseudo-element Magic (::after)

```css
.share-box::after {
  content: ""; /* Mandatory for pseudo-elements */
  position: absolute;
  bottom: -10px; 
  left: 50%; /* Horizontal alignment */
}

```

### 3. CSS Triangle Technique

```css
.share-box::after {
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid var(--veryDarkGrayishBlue);
  border-bottom: 0;
}

```
