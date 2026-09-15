import Container from "@/components/ui/Container";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-line-soft py-8">
      <Container>
        <div className="flex flex-col items-start justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ivory-faint sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <a href="#top" className="transition-colors hover:text-ivory">
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
