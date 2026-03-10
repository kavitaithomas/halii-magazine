import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/" className="font-bold text-xl">
        Logo
      </Link>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/magazines">Magazines</Link>
      </div>
    </nav>
  );
}
