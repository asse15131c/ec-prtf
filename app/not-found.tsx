import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-sm">
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="underline text-blue">
        Return Home
      </Link>
    </div>
  );
}
