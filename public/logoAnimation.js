const animationFunction = () => {
  const arrayOfFonts = [
    { 'name': 'Benn-Free', 'url': 'url(./fonts/Benn-Free.woff)' },
    { 'name': 'Coconat-Regluar', 'url': 'url(./fonts/Benn-Free.woff)' },
    { 'name': 'Galderglynn Esquire W00 Book', 'url': 'url(./fonts/Benn-Free.woff)' },
    { 'name': 'Kaerukaeru-Regular', 'url': 'url(./fonts/Kaerukaeru-Regular.woff)' },
    { 'name': 'MAZIUSREVIEW20.09-Regular', 'url': 'url(./fonts/MAZIUSREVIEW20.09-Regular.woff)' },
    { 'name': 'Millimetre-Regular_web', 'url': 'url(./fonts/Millimetre-Regular_web.woff)' },
    { 'name': 'Mobile Sans', 'url': 'url(./fonts/Mobile-Sans.woff)' },
    { 'name': 'Ortica-Bold', 'url': 'url(./fonts/Ortica-Bold.woff)' },
    { 'name': 'Pilowlava-Regular', 'url': 'url(./fonts/Pilowlava-Regular.woff)' },
    { 'name': 'Porpora-Regular', 'url': 'url(./fonts/Porpora-Regular.woff)' },
    { 'name': 'Redaction_50-Regular', 'url': 'url(./fonts/Redaction_50-Regular.woff)' },
    { 'name': 'Ribes-Black', 'url': 'url(./fonts/Ribes-Black.woff)' },
    { 'name': 'TINY5x3-100', 'url': 'url(./fonts/TINY5x3-100.woff)' },
  ];

  const loadFont = (selectedFont) => {
    return arrayOfFonts.name === selectedFont
  };
  const logoElement = document.getElementById('logo');

  let
    logoDOMElement = document.getElementById('logo'),
    logoComputedStyle = window.getComputedStyle(logoElement),
    currentLogoFont = logoComputedStyle.getPropertyValue('font-family');


  let
    idxMultiplier = arrayOfFonts.length,
    fontIDX = Math.floor(Math.random() * idxMultiplier);

  let selectedFont = arrayOfFonts[fontIDX].name;

  if (currentLogoFont === selectedFont) { animationFunction()
  } else {
  let
    fontToLoad = arrayOfFonts.find(({ name }) => name === selectedFont);
  let newFontFace = new FontFace(fontToLoad.name, fontToLoad.url);

  let fontLoader = (loadedFont) => {
    logoDOMElement.style.setProperty('font-family', loadedFont)};
  console.log({selectedFont}, {fontToLoad}, {newFontFace})

  return newFontFace.load().then(fontLoader(selectedFont)).catch(error => console.log(error))
}
console.log();
};

const throttle = (callback, delay) => {
  let throttleTimeout = null;
  let storedEvent = null;

  const throttledEventHandler = event => {
    storedEvent = event;

    const shouldHandleEvent = !throttleTimeout;

    if (shouldHandleEvent) {
      callback(storedEvent);

      storedEvent = null;

      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;

        if (storedEvent) {
          throttledEventHandler(storedEvent);
        }
      }, delay);
    }
  };

  return throttledEventHandler;
};
window.addEventListener('mousemove', throttle(animationFunction, 300));
