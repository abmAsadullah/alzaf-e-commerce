import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div>
       <Image
        src="/banner.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '60vh', objectFit: 'cover' }}
        alt="Banner"
      />
            <Button>Click me</Button>
    </div>
  );
}
