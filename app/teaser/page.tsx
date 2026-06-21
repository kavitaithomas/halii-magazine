import SpinningCircle from "@/components/home/SpinningCircle";

export default function TeaserPage() {
  return (
    <main className="w-screen h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Square container — adjust max-w for recording frame size */}
      <div className="relative w-full max-w-150 aspect-square">
        <SpinningCircle />

        {/* "COMING SOON" overlay — centred, does not spin */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p
            className="font- uppercase text-red-950 text-center"
            style={{
              fontSize: "clamp(1rem, 6vw, 4rem)",
              letterSpacing: "0.05em",
            }}
          >
            Coming
            <br />
            Soon
          </p>
        </div>
      </div>
    </main>
  );
}
