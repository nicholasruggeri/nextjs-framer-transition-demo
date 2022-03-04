import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" scroll={false}>Home</Link>
        <Link href="/about" scroll={false}>About</Link>
      </div>
    </nav>
  );
}
