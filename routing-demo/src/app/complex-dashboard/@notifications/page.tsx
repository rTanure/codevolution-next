import Card from "@/components/card";
import Link from "next/link";

export default function Notification() {
  return (
    <Card>
      <div>Notification</div>
      <Link className="text-blue-400 font-bold" href={"/complex-dashboard/archived"}>Archived</Link>
    </Card>
  )
}