import Image from "next/image";

// A faded, grayscale historical photo dissolving into the page background —
// atmosphere for one "era" of the hidden data-history narrative. Purely
// decorative: hidden from assistive tech, contributes no content.
export default function EraPhoto({
  src,
  align = "right",
}: {
  src: string;
  align?: "left" | "right";
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 ${
        align === "right" ? "right-0" : "left-0"
      } w-full sm:w-[60%]`}
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
        sizes="(min-width: 640px) 60vw, 100vw"
        className="object-cover grayscale contrast-[1.15] opacity-[0.32]"
      />
    </div>
  );
}
