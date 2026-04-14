import Link from "next/link";
import Scroll from "@/components/ui/Scroll";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="text-9xl flex min-h-screen w-full max-w-3xl">
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-start pt-24 pb-14 gap-x-6">
            <h1 className="font-coterie">Halii</h1>
            <h1 className="font-ephesis text-red-900">Magazine</h1>
          </div>
          <div>
            <Link className="text-2xl" href="/magazines/Feb-26">
              Read the latest issue
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
