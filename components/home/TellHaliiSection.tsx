import Link from "next/link";
import Image from "next/image";

export default function TellHaliiSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Section heading */}
      <header className="mb-12">
        <h1 className="font-coterie text-4xl text-black md:text-5xl">
          TELL HALII
        </h1>
      </header>

      {/* DESKTOP */}
      <div
        className="hidden md:block relative mx-auto"
        style={{ maxWidth: 900, height: 600 }}
      >
        {/* Speech bubble center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <Image
            src="/home_assets/speechbubble.webp"
            width={350}
            height={350}
            alt="We want to hear it from you"
            className="object-contain"
          />
        </div>

        {/* Green */}
        <div
          className="absolute z-10"
          style={{ top: 20, left: 20, transform: "rotate(-8deg)" }}
        >
          <Image
            src="/home_assets/greenbubble.webp"
            width={300}
            height={300}
            alt="Reader question"
            className="object-contain"
          />
        </div>

        {/* Blue*/}
        <div
          className="absolute z-10"
          style={{ top: 2, right: 30, transform: "rotate(6deg)" }}
        >
          <Image
            src="/home_assets/bluebubble.webp"
            width={190}
            height={240}
            alt="Reader question"
            className="object-contain"
          />
        </div>

        {/* Yellow*/}
        <div
          className="absolute z-10"
          style={{ bottom: 10, left: 10, transform: "rotate(5deg)" }}
        >
          <Image
            src="/home_assets/yellowbubble.webp"
            width={300}
            height={300}
            alt="Reader question"
            className="object-contain"
          />
        </div>

        {/* Pink */}
        <div
          className="absolute z-10"
          style={{ bottom: 20, right: 20, transform: "rotate(-7deg)" }}
        >
          <Image
            src="/home_assets/pinkbubble.webp"
            width={300}
            height={300}
            alt="Reader question"
            className="object-contain"
          />
        </div>
      </div>

      {/* MOBILE*/}
      <div className="md:hidden relative flex flex-col items-center gap-6">
        <div className="flex items-end justify-between w-full px-2">
          <div style={{ transform: "rotate(-8deg)" }}>
            <Image
              src="/home_assets/greenbubble.webp"
              width={180}
              height={180}
              alt="Reader question"
              className="object-contain"
            />
          </div>
          <div style={{ transform: "rotate(6deg)" }}>
            <Image
              src="/home_assets/bluebubble.webp"
              width={95}
              height={120}
              alt="Reader question"
              className="object-contain"
            />
          </div>
        </div>

        <Image
          src="/home_assets/speechbubble.webp"
          width={260}
          height={260}
          alt="We want to hear it from you"
          className="object-contain z-10"
        />

        <div className="flex items-start justify-between w-full px-2">
          <div style={{ transform: "rotate(5deg)" }}>
            <Image
              src="/home_assets/yellowbubble.webp"
              width={180}
              height={180}
              alt="Reader question"
              className="object-contain"
            />
          </div>
          <div style={{ transform: "rotate(-7deg)" }}>
            <Image
              src="/home_assets/pinkbubble.webp"
              width={180}
              height={180}
              alt="Reader question"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
