import React, { useEffect, useRef } from 'react';
import profileImg from '../../images/profile_image.png';
import p5 from "p5";
const sketch = (p) => {
  let img;
  let posX, posY;
  let canvas;
  let c;
  let arr = [];
  const nDots = 150;
  const imgWidth = 150;
  const imgHeight = 200;


  p.preload = () => {
   img = p.loadImage(profileImg)
  }

  p.setup = () => {
    canvas = p.createCanvas(imgWidth, imgHeight);
    canvas.position((p.windowWidth - imgWidth) / 2, (p.windowHeight - imgHeight) / 2);
    p.image(img, 0, 0, imgWidth, imgHeight);
    img.resize(imgWidth, imgHeight)

    for (let gridY = 0; gridY < imgHeight; gridY += 1) {
      for (let gridX = 0; gridX < imgWidth; gridX += 1) {
        let tileX = 1;
        let tileY = 1;
        posX = tileX * gridX;
        posY = tileY * gridY;
        arr.push([posX, posY]);
      }
    };
    
    arr = arr.reverse();
  };

  p.draw = () => {
    if (!arr.length) return;

    for (let i = 0; i < nDots; i++) {
      const obj = arr.pop();
    
      if (!obj) return;
      const [x, y] = obj;
      // console.log(x, y);
      c = img.get(x, y);
      p.push();
      p.stroke(p.color(c));
      p.translate(x, y);
      p.rotate(p.radians(p.random(360)));
      p.noFill();
      p.strokeWeight(p.random(3));
      // p.point(x, y);
      p.strokeWeight(p.random(3));
      p.curve(x, y, p.sin(x) * 3, p.cos(y) * p.sin(x) * 4, 0, 0, p.cos(y) * p.sin(x) * 2, p.cos(y) * p.sin(x) * 5)
      p.pop();
    }
    
  }
}


export const ProfileImage = (props) => {
  const ref = useRef();

  useEffect(() => {
    // drawing stuff for generative profile
    // const p = new p5(sketch, ref.current);

  }, [])

  return (
    <div className='profile-container' ref={ref}>
      {/* <img width="150px" height="200px" src="https://github.com/heungseok/heungseok.github.io/raw/master/src/images/profile_image.jpeg" alt="failed to load"/> */}
      <img width="150px" height="200px" src="https://github.com/heungseok/heungseok.github.io/blob/master/static/images/profile_image.jpeg?raw=true" alt="failed to load"/>
    </div>
  )
}