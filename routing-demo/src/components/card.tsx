export default function Card({
  children
}: {
  children: React.ReactNode
}) {
  return(
    <div className="p-24 m-2 shadow-md border-black border-2 flex justify-center items-center">
      {children}
    </div>
  )
}