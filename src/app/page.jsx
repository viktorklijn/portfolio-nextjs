import {RoundNav} from "@/ui/RoundNav";

export default function Home() {
  return (
    <>
      <RoundNav />
      <header className="h-5/6 flex flex-row justify-center">
        <div className="w-full h-full bg-secondary-background rounded-b-3xl shadow-sm">
          <h1>Hero</h1>
        </div>

      </header>
      <main className="flex flex-col h-full">

      </main>
    </>
  );
}