function getImages() {
  const context = require.context('../public/sponsors', false, /\.(png|jpe?g|svg)$/);
  const imagePaths = context.keys().map((key) => `/sponsors/${key.replace('./', '')}`);
  return imagePaths;
}

export default getImages;