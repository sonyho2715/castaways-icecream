import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="text-8xl mb-6">🍦</div>
      <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black mb-4">
        Looks like this scoop
        <br />
        melted away<span className="text-primary">.</span>
      </h1>
      <p className="text-secondary/50 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
        back to the good stuff.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-primary/90 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}
