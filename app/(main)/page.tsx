import { getServerSession } from "next-auth";
import { ToastButton } from "./toast-button";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div>
      <ToastButton />
      {session && <pre>{JSON.stringify(session, undefined, 2)}</pre>}
    </div>
  );
}
