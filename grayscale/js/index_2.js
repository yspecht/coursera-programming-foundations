var image = null;

function upload() {
  var fileinput = document.getElementById("finput");
  image = new SimpleImage(fileinput);
  var canvas = document.getElementById("orig");
  image.drawTo(canvas);
}
function makeGray() {
  for (var pixel of image.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var canvas = document.getElementById("gray");
  image.drawTo(canvas);
}