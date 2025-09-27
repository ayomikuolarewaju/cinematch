import Hero from "@/components/Hero";
import Movies from "@/components/Movies";
import {CreateMovie} from "@/app/api/action"

function Home() {

  const CallF = async()=>{
    await CreateMovie()
  }
  CallF()
  return (
    <div className="container px-4 flex flex-col mx-auto w-full relative top-[50px] space-y-10">
      <Hero />
      <Movies />
    </div>
  );
}

export default Home;
