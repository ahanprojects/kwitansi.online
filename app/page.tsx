import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { DownloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-slate-100 min-h-screen">
      <Toolbar />
      <Form />
    </main>
  );
}

export function Toolbar() {
  return (
    <div className="p-2">
      <div className="flex gap-2 justify-center bg-white shadow-lg rounded-lg p-2 w-fit mx-auto">
        <ToggleGroup type="single" variant="outline">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <div className="h-4 w-4 rounded bg-blue-400" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <div className="h-4 w-4 rounded bg-yellow-400" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough">
            <div className="h-4 w-4 rounded bg-red-400" />
          </ToggleGroupItem>
        </ToggleGroup>
        <Select defaultValue="apple">
          <SelectTrigger className="w-[180px]">
            <span className="text-muted-foreground">font:</span>
            <SelectValue defaultValue={"apple"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-2 pl-4">
          <Input placeholder="kuitansi.pdf" />
          <Button>
            <DownloadIcon className="h-4 w-4" />
            <span className="pl-2">Download</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Form() {
  return (
    <div className="relative w-[900px] mx-auto mt-8">
      <Image
        src="/images/biru.jpg"
        alt="Deskripsi gambar"
        className="absolute rounded-xl shadow-xl"
        width={900}
        height={300}
      />
      <Input
        placeholder=""
        className="w-32 h-6 absolute bg-white bg-opacity-90 top-8 left-56"
      />
      <Input
        placeholder="Nama Penerima"
        className="w-[32rem] h-7 absolute bg-white bg-opacity-90 top-14 right-8"
      />
      <Input
        placeholder="JUMLAH PEMBAYARAN"
        className="w-[32rem] h-7 absolute bg-white bg-opacity-90 top-24 right-8 uppercase"
      />
      <Textarea
        placeholder="Detail pembayaran"
        className="w-[32rem] h-0 absolute bg-white bg-opacity-90 top-[8.5rem] right-8"
      />
      <Input
        placeholder="Kota, Tanggal"
        className="w-72 h-7 absolute bg-white bg-opacity-90 top-56 right-8"
      />
      <Input
        placeholder="Nominal"
        className="w-56 h-8 absolute bg-white bg-opacity-90 top-[16.8rem] left-56"
      />
      <div className="w-72 absolute bg-white bg-opacity-90 top-64 right-8 rounded-lg">
        <label htmlFor="ttd" className="text-sm ml-2">TTD</label>
        <Input
          id="ttd"
          type="file"
        />
      </div>
    </div>
  );
}
