import Link from "next/link"
import "./style.css"

export default function Home() {
  return <>
    <h1>Welcome home!</h1>
    <Link href="/blog">Blog</Link>
    <Link href="/products">Products</Link>
  </>
}