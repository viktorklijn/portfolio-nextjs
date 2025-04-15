export default function Home() {
  return (
    <main className="flex flex-col gap-2 p-20 h-full">
      <h1 className="text-6xl text-accent">Viktor Klijn</h1>
      <div className="grid grid-cols-5 gap-5 h-full">
        <div className="rounded-xl bg-foreground drop-shadow-sm drop-shadow-shade-1 p-10 col-span-2 row-span-2">
          <h2>About Me</h2>
        </div>
        <div className="rounded-xl bg-foreground drop-shadow-sm drop-shadow-shade-1 p-10">
          <h2>Skills</h2>
        </div>
        <div className="rounded-xl bg-foreground drop-shadow-sm drop-shadow-shade-1 p-10 row-span-2">
          <h2>Work experience</h2>
        </div>
        <div className="rounded-xl bg-foreground drop-shadow-sm drop-shadow-shade-1 p-10 col-start-3 row-start-2 row-span-2">
          <h2>Work experience</h2>
        </div>
        <div className="rounded-xl bg-foreground drop-shadow-sm drop-shadow-shade-1 p-10">
          <h2>Images</h2>
        </div>
      </div>
    </main>
  );
}
