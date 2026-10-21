import Container from "@/components/ui/Container";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-cream">
      <Container className="flex flex-col gap-3 py-6 font-mono text-[12px] font-medium uppercase tracking-[0.12em] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top" className="self-start underline decoration-2 underline-offset-4 hover:text-butter sm:self-auto">
          Back to top ↑
        </a>
      </Container>
    </footer>
  );
}
