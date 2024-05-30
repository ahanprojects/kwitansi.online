"use client"

import { ChangeEvent, useRef, useState } from 'react';

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageSrc, setImageSrc] = useState<string>('');
  const [text, setText] = useState<string>('Your Text Here');

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImageSrc(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const drawTextOnImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const image = new Image();

      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        if (ctx) {
          ctx.drawImage(image, 0, 0);
          ctx.font = '36px Inter';
          ctx.fillStyle = 'black';
          ctx.fillText("001", 400, 85);
          ctx.fillText("Farhan Nur Hidayat Denira", 640, 140);
          ctx.fillText("DUA PULUH TIGA JUTA RUPIAH", 640, 210);
          ctx.fillText("Magna veniam aute ex Lorem anim amet ut dolore offi", 640, 260);
          ctx.fillText("Magna veniam aute ex Lorem anim amet ut dolore officia except Lore", 350, 305);
          ctx.fillText("Magna veniam aute ex Lorem anim amet ut dolore officia except Lore", 350, 350);
          ctx.fillText("2.000.000", 420, 515);
          ctx.fillText("Jakarta, 20 September 2012", 1000, 400);
          ctx.fillText("Jakarta, 20 September 2012", 1050, 500);
        }
      };

      image.src = imageSrc;
    }
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'image-with-text.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div>
      <h1>Image Text Overlay</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={drawTextOnImage}>Draw Text</button>
      <button onClick={handleDownload}>Download Image</button>
      <canvas ref={canvasRef} style={{ display: imageSrc ? 'block' : 'none' }}></canvas>
    </div>
  );
};

export default Home;
