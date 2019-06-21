window.onload = function () {
  // starting position
  let x = 1;
  let y = 1;

  document.onkeydown = function (e) {

    $(`.r${y}c${x}`).find('img').remove() // remove target pika image

    switch (e.key) {
      case "ArrowUp":
        if (y > 1)
          y--;
        break;
      case "ArrowRight":
        if (x < 10)
          x++;
        break;
      case "ArrowDown":
        if (y < 10)
          y++;
        break;
      case "ArrowLeft":
        if (x > 1)
          x--;
        break;
    }
    console.log(x, y);
    $(`.r${y}c${x}`).append(`<img src="pika.gif"/>`) // this will add new pika image in target loation



    // $(`.r${x}c${y}`) // this is the span of our target location
    // $(`.r${x}c${y}`).find('img') // this is the image within the span of our target location

  }


}