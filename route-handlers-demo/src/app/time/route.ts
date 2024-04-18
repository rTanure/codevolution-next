export const dynamic = "force-dynamic" // default: "auto" -> will cache everything that's possibler

export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString()
  })
}