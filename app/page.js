import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-56px)] w-100 flex-col items-center justify-center p-4 lg:p-14 ">
      <h3 className="text-center text-xl font-bold bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit border rounded-lg border-gray-300  dark:border-gray-800 px-3 py-2">
        Discover Your Perfect Phone: Join Mobile Phone Review Collection
      </h3>
      <p className="text-center w-11/12 my-6">
        Are you on the hunt for the ultimate mobile phone that perfectly matches
        your style, need and preferences? Look no further! Our Mobile Phone
        Review Collection is here to help you make the best choice. We&apos;ve
        curated a comprehensive collection of reviews to guide you through this
        exciting journey.
      </p>
      <div className="relative flex flex-col md:flex-row justify-between items-center w-full bg-gradient-to-b from-zinc-100 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit border rounded-lg border-gray-300  dark:border-gray-600 px-3 py-3">
        <div className="w-11/12 mb:w-4/5 px-4 order-2 md:order-1">
          <h3 className="text-lg font-semibold mb-1">
            Join the Community: Add Your Favorite Mobile Phone to Our Collection
          </h3>
          <p className="mt-1 font-light">
            We believe in the power of community insights. If you&apos;ve
            recently discovered a mobile phone that has left you impressed, we
            invite you to contribute to our Mobile Phone Review Collection.
            Sharing your experience can help others who are also searching for
            their ideal device.
          </p>
          <p className="mt-1 font-light">
            screen Let&apos;s create a space where technology enthusiasts can
            come together, learn from one another, and celebrate the wonderful
            world of mobile phones. Your favorite device could be the key to
            someone else&apos;s smartphone happiness!
          </p>

          <p className="text-md font-medium mt-3">
            Contribute to Our Mobile Phone Review Collection today and be a part
            of shaping the mobile phone choices of tomorrow. Together,
            let&apos;s find the mobile phones that truly enrich our lives!
          </p>
        </div>
        <Image
          className="order-1 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] drop-shadow-[0_0_0.3rem_#00000070] mb-3 md:mb-0"
          src="/iPhone-14-Transparent.png"
          alt="Mobile Phone"
          width={250}
          height={40}
          priority
        />
      </div>

      <div className="grid lg:text-left mt-7">
        <Link
          href="/reviews"
          className="group px-5 py-3 transition-colors rounded-lg border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-700/30 shadow-md shadow-gray-500 hover:shadow-blue-600 active:shadow-inner active:shadow-blue-600"
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
