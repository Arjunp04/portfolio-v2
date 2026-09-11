// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
      <p className="text-accent font-semibold text-sm">404</p>
      <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
      <p className="text-foreground-muted text-sm max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-2 bg-accent hover:bg-accent-hover text-white font-medium px-5 py-2.5 rounded-md text-sm transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
