import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      {/* <navbar/> */}
      <Link href="/login">
        <span>login form</span>
      </Link>
      {/* <h1>Helllo</h1> */}
    </div>
  );
}
