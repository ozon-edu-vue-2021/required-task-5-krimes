const IMAGES = require.context("../assets/images/", true, /\.webp$/);

export default new (class {
  getImages() {
    console.log("load Images once", new Date().getTime());
    const images = IMAGES;
    const result = [];
    images
      .keys()
      .forEach((key) => result.push({ pathLong: images(key), pathShort: key }));
    return result;
  }

  IMAGES_LIST = this.getImages();

  getRandomImageName() {
    const randomIndex = Number(
      (Math.random() * 1000) % (this.IMAGES_LIST.length - 1)
    ).toFixed();

    return this.IMAGES_LIST[randomIndex].pathLong;
  }

  getRandomImagePath() {
    return this.getRandomImageName();
  }
})();
