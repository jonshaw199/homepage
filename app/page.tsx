import Link from "next/link";

const links = [
  {
    label: "Blog",
    href: "https://blog-tan-two-96.vercel.app/blog",
    description: "Posts, notes, and other writing.",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jonshaw199",
    description: "Work history and professional profile.",
  },
  {
    label: "GitHub",
    href: "https://github.com/jonshaw199",
    description: "Code, projects, and repos.",
  },
] as const;

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-1 items-center px-5 py-12 sm:px-8 lg:px-10">
      <section className="w-full border border-border bg-surface-strong px-6 py-10 shadow-[0_24px_80px_rgba(23,23,23,0.08)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
          Hi, I&apos;m{" "}
          <span className="font-display text-6xl leading-[0.92] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            Jon Shaw,
          </span>{" "}
          a{" "}
          <span className="font-semibold text-foreground sm:text-2xl">
           software engineer
          </span>{" "}
          from California and this is my homepage. Click the links below to learn more and hit me up if you&apos;re interested in building cool shit together.
        </p>

        <div className="mt-12 border-t border-border pt-6">
          <div className="space-y-3">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-6 border border-transparent px-1 py-4 hover:border-border"
              >
                <div>
                  <div className="text-2xl font-semibold text-foreground">
                    {link.label}
                  </div>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {link.description}
                  </p>
                </div>
                <span className="pt-1 text-sm text-muted transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
