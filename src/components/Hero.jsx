import React from "react";
import HeroImg from "@/images/cinema.jpg";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center mx-auto container px-4 lg:w-full w-[400px] h-[300px]">
      <div>
        <Image
          src={HeroImg}
          alt="Hero Image"
          className="w-[1000px] h-[400px] object-cover rounded-2xl"
        />
      </div>
      <div className="absolute top-[10px] z-50 text-white lg:w-[700px] w-[300px] mx-auto flex flex-col space-y-5 bg-gray-800/40 p-4">
        <h1 className="lg:text-4xl text-center font-bold text-lg">
          Discover Your Next Favorite Movie
        </h1>
        <p className="lg:w-[500px] w-[300px] font-medium lg:text-lg text-white text-center text-xs">
          Get personalised movies based on your taste.Join million of movies
          lovers finding their match.
        </p>
        <button className="p-3 text-white rounded-lg w-[200px] bg-red-800 mx-auto font-bold cursor-pointer">
          <Link href="/discover">Start Discovering</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
