"use client"

import { useRouter } from "next/navigation"

export default function OrderProduct() {

  const router = useRouter()

  const handleClick = () => {
    console.log("Placing your order")
    router.push("/")

    // router.replace("/") // Will replace the routes stack
    // router.back() // Back to the previous Page
    // router.forward() // Navigate to the forward page
  }

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  )
}