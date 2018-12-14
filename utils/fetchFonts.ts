/* tslint:disable-next-line */
const FontFaceObserver = require("fontfaceobserver");

const fetchFonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Lato';
  link.rel = 'stylesheet';

  if (document.head) {
    document.head.appendChild(link);
  }

  const lato = new FontFaceObserver('Lato');

  lato.load().then(() => {
    if (document.documentElement) {
      document.documentElement.classList.add('Lato');
    }
  });
};

export default fetchFonts;
