import ActivityContent from "./ActivityContent";

async function getInitialActivity() {
  const res = await fetch("http://localhost:3000/api/activity/", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ActivityServer() {
  const activity = await getInitialActivity();

  return <ActivityContent activity={activity} />;
}