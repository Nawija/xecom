import Link from "next/link";

export default function Home() {
    return (
        <main>
            Home page<Link href="/admin">Admin Link</Link>
        </main>
    );
}
