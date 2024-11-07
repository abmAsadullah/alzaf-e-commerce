import Image from 'next/image'

export default function Home() {
  return (
    <div>
       <Image
        src="/banner.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        alt="Banner"
      />
    </div>
  );
}
