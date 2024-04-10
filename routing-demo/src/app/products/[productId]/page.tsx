import { Metadata } from "next"

type Props = {
  params: {
    productId: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  // Fetch API
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`IPhone ${params.productId}`)
    },0)
  })
  
  return {
    title: `product ${title}`
  }
}

export default function ProductDetail({ params }: Props) {
  return <h1>Details about product {params.productId}</h1>
}