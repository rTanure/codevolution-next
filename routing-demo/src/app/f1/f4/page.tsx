import Link from "next/link";

export default function F4() {
  return (
    <div>
      <h1>F4 Page</h1>
      <Link href="/f1/f3">go to f3</Link>
      <Link href="/about">go to about</Link>
    </div>
  )
}