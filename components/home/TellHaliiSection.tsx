import Link from "next/link";
import Image from "next/image";

export default function TellHaliiSection() {
  return (
    <section className="relative w-full px-6 py-20 md:py-32 overflow-hidden min-h-175">
      <div className="flex flex-col justify-center gap-y-16">
        <div className="flex flex-row justify-center gap-x-80">
          <Image
            src="/home_assets/orangebubble1.webp"
            width={245}
            height={381}
            alt="orange bubble"
          />
          <Image
            src="/home_assets/greenbubble1.webp"
            width={245}
            height={381}
            alt="orange bubble"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/home_assets/speechbubble.webp"
            width={500}
            height={500}
            alt="orange bubble"
          />
        </div>
        <div className="flex flex-row justify-center gap-x-80">
          <Image
            src="/home_assets/yellowbubble1.webp"
            width={245}
            height={381}
            alt="orange bubble"
          />
          <Image
            src="/home_assets/yellowbubble2.webp"
            width={245}
            height={381}
            alt="orange bubble"
          />
        </div>
      </div>
    </section>
  );
}
