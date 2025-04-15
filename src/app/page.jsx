import TitleComponent from '@/ui/TitleComponent';

export default function Home() {
  return (
    <main className="flex flex-col gap-10 p-20 h-full">
      <TitleComponent />
      <div className="grid grid-cols-5 auto-rows-fr auto-cols-fr gap-5 h-full">
        <div className="rounded-xl bg-foreground drop-shadow-sm drop-shadow-shade-1 p-10 row-span-1 col-span-4">
          <h2>Skills</h2>
        </div>
        <div className="rounded-xl bg-foreground drop-shadow-sm drop-shadow-shade-1 p-10 col-start-5 row-span-2">
          <h2>Certificates</h2>
        </div>

        <div className="rounded-xl bg-foreground drop-shadow-sm drop-shadow-shade-1 p-10 row-span-2">
          <h2>Projects</h2>
        </div>
        <div className="rounded-xl bg-foreground drop-shadow-sm drop-shadow-shade-1 p-10 col-span-1 row-span-1 ">
          <h2>Images</h2>
        </div>
        <div className="rounded-xl bg-foreground drop-shadow-sm drop-shadow-shade-1 p-10 row-span-1 col-span-2">
          <h2>Work experience</h2>
        </div>
      </div>
    </main>
  );
}
