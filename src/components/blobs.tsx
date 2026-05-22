export function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <div
        className="blob animate-blob"
        style={{
          width: 520, height: 520, top: -120, left: -100,
          background: "radial-gradient(circle, oklch(0.7 0.22 295), transparent 60%)",
        }}
      />
      <div
        className="blob animate-blob"
        style={{
          width: 460, height: 460, top: 120, right: -120,
          background: "radial-gradient(circle, oklch(0.7 0.18 210), transparent 60%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="blob animate-blob"
        style={{
          width: 380, height: 380, bottom: -120, left: "30%",
          background: "radial-gradient(circle, oklch(0.7 0.2 330), transparent 60%)",
          animationDelay: "-12s",
        }}
      />
    </div>
  );
}
