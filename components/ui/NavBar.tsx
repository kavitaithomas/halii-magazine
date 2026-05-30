import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-cream flex h-16 items-center justify-between p-4">
      <Link href="/">
        <Image src="/logo.svg" width={100} height={50} alt="HALII logo" />
      </Link>
      <div className="flex gap-x-4">
        <Link
          href="/magazines"
          className="text-black/80 font-serif uppercase font-bold hover:text-yellow-600"
        >
          Magazines
        </Link>
      </div>
    </nav>
  );
}
