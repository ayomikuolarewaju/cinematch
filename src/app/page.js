import Hero from "@/components/Hero";
import Movies from "@/components/Movies";

function Home() {
  return (
    <div className="container px-4 flex flex-col mx-auto w-full relative top-[50px] space-y-10">
      <Hero />
      <Movies />
    </div>
  );
}

export default Home;
