import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotification() {
  return (
    <Card>
      <div>Archived Notification</div>
      <Link className="text-blue-400 font-bold" href={"/complex-dashboard"}>Default</Link>
    </Card>
  )
}