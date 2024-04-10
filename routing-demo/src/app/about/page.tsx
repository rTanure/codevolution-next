import { Metadata } from "next/types"

// Exporting a metadata object
export const metadata: Metadata = {
  title: "About Codevolution",
}

export default function About() {
  return <h1>About this app</h1>
}