import { ReactNode } from "react";

const variants = {
  cobalt: "bg-cobalt text-paper",
  paper: "bg-paper text-ink",
  butter: "bg-butter text-ink",
} as const;

export default function ButtonLink({
  href,
  children,
  variant = "cobalt",
  external = false,
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizing =
    size === "sm"
      ? "px-3.5 py-2 text-[12px]"
      : size === "lg"
        ? "px-6 py-4 text-[15px]"
        : "px-5 py-3 text-[13px]";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`press inline-flex items-center justify-center gap-2 rounded-md border-2 border-ink font-mono font-medium uppercase tracking-[0.08em] shadow-hard ${sizing} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
