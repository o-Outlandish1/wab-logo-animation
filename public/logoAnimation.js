const animationFunction = () => {

  let arrayOfFonts = [
    `'Big Shoulders Inline Text', cursive`,
    `'Big Shoulders Stencil Display', cursive`,
    `'Dancing Script', cursive`,
    `'Goldman', cursive`,
    `'Modak', cursive`,
    `'Playfair Display', serif`,
    `'Stalinist One', cursive`
  ];

  const
    logoElement = document.getElementsByClassName('logo');
    // logoFontStyle = logoElement.style.fontFamily;

  let
    idxMultiplier = arrayOfFonts.length + 1,
    fontIDX = Math.floor(Math.random() * idxMultiplier);

  let selectedFont = arrayOfFonts[fontIDX];

  // if (logoFontStyle === selectedFont) { animationFunction() }
  console.log('logoElement:', logoElement)
  // return logoDomElement = selectedFont;

};

// window.document.onscroll = animationFunction();
// document.addEventListener('DOMContentLoaded', animationFunction());
