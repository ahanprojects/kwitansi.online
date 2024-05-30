"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NextImage from "next/image";
import { DownloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useRef, useState } from "react";
import {
  Colors,
  Font,
  Fonts,
  Color,
  Kuitansi,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Home() {
  const [color, setColor] = useState<Color>(Colors[0]);
  const [font, setFont] = useState<Font>(Fonts[0]);
  const [filename, setFilename] = useState("");

  const [formData, setFormData] = useState<Kuitansi>({
    no: "",
    pengirim: "",
    penerima: "",
    jumlah: "",
    detail: "",
    nominal: "",
    tanggal: "",
  });

  // Signature
  const [ttdSrc, setTtdSrc] = useState<string | null>(null);
  const ttdRef = useRef<HTMLInputElement>(null);

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setTtdSrc(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDownload = () => {
    download({
      form: formData,
      filename: filename || "kuitansi",
      color: color,
      font: font,
      ttdSrc: ttdSrc,
    });
  };

  return (
    <main className="bg-slate-100 min-h-screen">
      {/* Toolbar */}
      <div className="p-2">
        <div className="flex gap-2 justify-center bg-white shadow-lg rounded-lg p-2 w-fit mx-auto">
          {/* Select Color */}
          <ToggleGroup type="single" variant="outline" defaultValue="blue">
            {Colors.map((c) => (
              <ToggleGroupItem
                key={c.name}
                value={c.name}
                aria-label={c.name}
                onClick={() => setColor(c)}>
                <div
                  className={cn(
                    `h-4 w-4 rounded`,
                    c.name == "blue" ? "bg-blue-400" : "",
                    c.name == "green" ? "bg-green-400" : "",
                    c.name == "yellow" ? "bg-yellow-400" : "",
                    c.name == "red" ? "bg-red-400" : ""
                  )}
                />
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          {/* Select Font */}
          <Select
            onValueChange={(v) => setFont(Fonts[parseInt(v)])}
            defaultValue={"0"}>
            <SelectTrigger className="w-[180px]">
              <span className="text-muted-foreground">font:</span>
              <SelectValue className={font.className} />
            </SelectTrigger>
            <SelectContent>
              {Fonts.map((font, i) => (
                <SelectItem key={font.name} value={i.toString()}>
                  {font.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex gap-2 pl-4">
            <Input
              placeholder="kuitansi.pdf"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
            />
            <Button onClick={handleDownload}>
              <DownloadIcon className="h-4 w-4" />
              <span className="pl-2">Download</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className={`relative w-[900px] mx-auto mt-8 ${font.className}`}>
        <NextImage
          src={'/images/blue.jpg'}
          alt="Deskripsi gambar"
          className="absolute rounded-xl shadow-xl"
          width={900}
          height={300}
          style={{ filter: `hue-rotate(${color.hue}deg)` }}
        />
        <Input
          placeholder=""
          className="w-32 h-6 absolute bg-white bg-opacity-90 top-8 left-56"
          name="no"
          value={formData.no}
          onChange={handleChange}
        />
        <Input
          placeholder="Nama Pengirim"
          className="w-[32rem] h-7 absolute bg-white bg-opacity-90 top-14 right-8"
          name="pengirim"
          value={formData.pengirim}
          onChange={handleChange}
        />
        <Input
          placeholder="JUMLAH PEMBAYARAN"
          className="w-[32rem] h-7 absolute bg-white bg-opacity-90 top-[5.8rem] right-8 uppercase"
          name="jumlah"
          value={formData.jumlah}
          onChange={handleChange}
        />
        <Textarea
          placeholder="Detail pembayaran"
          className="w-[32rem] min-h-[4.5rem] absolute bg-white bg-opacity-90 top-[8rem] right-8"
          name="detail"
          maxLength={180}
          value={formData.detail}
          onChange={handleChange}
        />
        <Input
          placeholder="Tempat, Tanggal"
          className="w-72 h-7 absolute bg-white bg-opacity-90 top-52 right-8"
          name="tanggal"
          value={formData.tanggal}
          onChange={handleChange}
        />
        <Input
          placeholder="Nominal"
          className="w-56 h-8 absolute bg-white bg-opacity-90 top-[16.8rem] left-56"
          name="nominal"
          value={formData.nominal}
          onChange={handleChange}
        />
        <div
          onClick={() => {
            ttdRef.current?.click();
          }}
          className="w-72 absolute bg-white bg-opacity-90 top-60 right-8 rounded-lg h-16 flex justify-center items-center cursor-pointer">
          <Input
            id="ttd"
            type="file"
            accept="image/*"
            onChange={onImageChange}
            ref={ttdRef}
            className="hidden"
          />
          {!ttdSrc && <span className="text-gray-500">Upload TTD</span>}
          {ttdSrc && (
            <img src={ttdSrc} alt="Signature preview" className="h-full" />
          )}
        </div>
        <Input
          placeholder="Nama Penerima"
          className="w-72 h-7 absolute bg-white bg-opacity-90 top-[19.2rem] right-8"
          name="penerima"
          value={formData.penerima}
          onChange={handleChange}
        />
      </div>

      {/* Logo */}
      <h1 className="absolute bottom-2 left-2 text-4xl font-semibold text-slate-600 font-mono">
        Kwitansi.online
      </h1>
    </main>
  );
}

// Functions
type DownloadProps = {
  form: Kuitansi;
  ttdSrc: string | null;
  filename: string;
  color: Color;
  font: Font;
};

async function download(props: DownloadProps) {
  const { form, ttdSrc, filename, color, font } = props;
  const row1 = form.detail.slice(0, 50);
  const row2 = form.detail.slice(50, 115);
  const row3 = form.detail.slice(115, 180);

  // TODO: Monospace
  // const row1 = form.detail.slice(0, 40);
  // const row2 = form.detail.slice(40, 96);
  // const row3 = form.detail.slice(96, 150);

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const kuitansiImage = new Image();

  const fontFace = new FontFace(font.fontFamily, `url(${font.url})`)
  await fontFace.load()
  document.fonts.add(fontFace)

  kuitansiImage.onload = () => {
    canvas.width = kuitansiImage.width;
    canvas.height = kuitansiImage.height;
    ctx.drawImage(kuitansiImage, 0, 0);

    ctx.font = `36px ${font.fontFamily}`;
    ctx.fillStyle = "black";
    ctx.fillText(form.no, 400, 85);
    ctx.fillText(form.pengirim, 640, 140);
    ctx.fillText(form.jumlah, 640, 210);
    ctx.fillText(row1, 640, 260);
    ctx.fillText(row2, 350, 305);
    ctx.fillText(row3, 350, 350);
    ctx.fillText(form.nominal, 450, 520);
    ctx.fillText(form.tanggal, 1030, 400);
    ctx.fillText(form.penerima, 1030, 540);

    if (ttdSrc) {
      const ttdImage = new Image();
      ttdImage.onload = () => {
        const h = 180;
        const w = h * (ttdImage.width / ttdImage.height);
        ctx.drawImage(ttdImage, 1050, 370, w, h);
  
        const link = document.createElement("a");
        link.download = `${filename}.png`;
        link.href = canvas.toDataURL();
        link.click();
      };
  
      ttdImage.src = ttdSrc;
    }
    else {
      const link = document.createElement("a");
      link.download = `${filename}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
    
  };

  kuitansiImage.src = color.imageSrc;
}
