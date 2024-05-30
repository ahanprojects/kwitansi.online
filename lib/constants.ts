import {  Inter, Kalam, Roboto_Mono } from "next/font/google";

export type Font = {
  name: string;
  fontFamily: string;
  className: string;
  url:string;
};

export type Kuitansi = {
  no: string;
  pengirim: string;
  penerima: string;
  jumlah: string;
  detail: string;
  nominal: string;
  tanggal: string;
}

export type Color = {
  name: string,
  hue: number,
  imageSrc: string
}

export const Colors: Color[] = [
  {name: 'blue', hue: 0, imageSrc: '/images/blue.jpg'},
  {name: 'yellow', hue: 210, imageSrc: '/images/yellow.jpg'},
  {name: 'red', hue: 140, imageSrc: '/images/red.jpg'},
  {name: 'green', hue: 300, imageSrc: '/images/green.jpg'},
]

export const formal = Inter({ subsets: ["latin"] });
export const handwriting = Kalam({ subsets: ["latin"], weight: "400" });
export const monospace = Roboto_Mono({ subsets: ["latin"] });


export const Fonts: Font[] = [
  { name: "Formal", fontFamily: 'Inter', url: '/fonts/Inter-Regular.ttf', className: formal.className },
  { name: "Handwriting", fontFamily: "Kalam", url: '/fonts/Kalam-Regular.ttf', className: handwriting.className },
  { name: "Monospace", fontFamily: "Roboto Mono", url: '/fonts/RobotoMono-Regular.ttf', className: monospace.className },
];