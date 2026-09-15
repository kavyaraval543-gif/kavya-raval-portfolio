import Image from "next/image";

// A faded, grayscale-with-a-whisper-of-gold historical photo dissolving
// into the page background — atmosphere for one "era" of the hidden
// data-history narrative, with a small museum-label caption. The image
// itself is purely decorative (hidden from assistive tech); the caption
// is real content, so it stays outside the aria-hidden wrapper.
export default function EraPhoto({
  src,
  caption,
  align = "right",
}: {
  src: string;
  caption: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-y-0 hidden sm:block ${
        align === "right" ? "right-0" : "left-0"
      } sm:w-[60%]`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 65% 60% at 50% 50%, black 25%, transparent 88%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 60% at 50% 50%, black 25%, transparent 88%)",
        }}
      >
        <Image
          src={src}
          alt=""
          fill
          sizes="60vw"
          className="object-cover grayscale sepia-[0.35] contrast-[1.15] saturate-[1.4] opacity-[0.32]"
        />
      </div>
      <p
        className={`absolute bottom-6 ${
          align === "right" ? "right-6 text-right" : "left-6 text-left"
        } max-w-[14rem] font-mono text-[10px] uppercase tracking-[0.14em] text-gold/70`}
      >
        {caption}
      </p>
    </div>
  );
}
