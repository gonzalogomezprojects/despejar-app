import ActivityContent from "./ActivityContent";

async function getInitialActivity() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/activity`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ActivityServer() {
  const activity = await getInitialActivity();

  return <ActivityContent activity={activity} />;
}