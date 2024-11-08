import Image from "next/image";

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
    </div>
  );
}
