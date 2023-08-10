import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3 className="text-center bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit border rounded-lg border-gray-300  dark:border-gray-600 px-3 py-2">
        Discover Your Perfect Phone: Join Mobile Phone Review Collection
      </h3>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] drop-shadow-[0_0_0.3rem_#00000070]"
          src="/iPhone-14-Transparent.png"
          alt="Mobile Phone"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="grid lg:text-left">
        <Link
          href="/reviews"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30  hover:shadow-md hover:shadow-blue-600 active:shadow-inner active:shadow-blue-600"
        >
          <h3 className="mb-1 font-semibold">
            Add Review
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className="m-0 max-w-[25ch] text-sm opacity-50">
            Craft a review that highlights your mobile phone.
          </p>
        </Link>
      </div>
    </main>
  );
}
