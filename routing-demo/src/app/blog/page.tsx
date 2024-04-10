import { Metadata } from "next"

export const metadata: Metadata = {
  // title: "blog"

  title: {
    absolute: "blog"
  }
}

export default function Blog() {
  return <h1>Blog Page</h1>
}