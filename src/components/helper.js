export function calculateRatio(image) {
  let width = 0, height = 0, x = 0, y = 0;

  if(image) {
    const imageWidth = image.width;
    const imageHeight = image.height;
    const imageRatio = imageHeight/imageWidth;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const screenRatio = screenHeight/screenWidth;

    if(imageRatio > screenRatio) {
      width = screenWidth;
      height = screenWidth * imageRatio;
      x = 0
      y = (screenHeight - height)/2;
    } else {
      height = screenHeight;
      width = screenHeight / imageRatio;
      x = (screenWidth - width) / 2;
      y = 0;
    }
  }
  return {width, height, x, y};
}