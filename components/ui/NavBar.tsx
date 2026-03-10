import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/">
        <Image src="/logo.svg" width={100} height={50} alt="HALII logo" />
      </Link>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/magazines">Magazines</Link>
      </div>
    </nav>
  );
}
