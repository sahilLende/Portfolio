import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" flex h-[50vh] w-full flex-col items-center justify-center  bg-white">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="underline underline-offset-2" href="/">
        Return Home
      </Link>
    </div>
  );
}
