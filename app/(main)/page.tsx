import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div>
      <div>Hello world</div>
      {session && <pre>{JSON.stringify(session, undefined, 2)}</pre>}
    </div>
  );
}
