import Link from "next/link";

/* 
Contact
About
Tell Halii
Contribute
Sponsor
Magazines
Halii's Next Top Model
Instagram
Tiktok
*/

export default function Footer() {
  return (
    <nav className="flex bg-red-900 items-center justify-between p-4">
      <div className="flex gap-4">
        <Link href="/magazines">Magazines</Link>
        <Link href="/about">About</Link>
        <Link href="/about">Contact Us</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
