import Image from "next/image";

export default function Home() {
  return (
    <div>
       <Image className="hidden md:block"
        src="/banner.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '45vh', objectFit: 'cover' }}
        alt="Banner"
      />
       <Image className="block md:hidden"
        src="/banner.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '20vh', objectFit: 'cover' }}
        alt="Banner"
      />
    </div>
  );
}
