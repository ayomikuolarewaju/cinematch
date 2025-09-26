import Link from "next/link";
import bad from "@/images/404.jpg";
import Image from "next/image";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 w-screen overflow-hidden">
      <div>
        <Image alt="bad" src={bad} />
      </div>
      <div className=" z-50 absolute top-[100px]">
        <h1 className="text-3xl font-bold text-red-600 text-center mt-20 ">
          404 - Page Not Found
        </h1>
        <Link href="/">Kindly return to Home page</Link>
      </div>
    </div>
  );
}

export default NotFound;
