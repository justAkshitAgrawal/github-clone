import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <div className="relative z-50">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
      <div>
        <div className="overflow-hidden">
          <div className="relative ">
            <img
              className="absolute top-0 transition duration-200 ease-in max-xl:right-[-1050px] xl:right-[-970px] image"
              src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
              alt=""
              width="4377"
            />
          </div>
          <div className="px-3 Hero-section">
            <Hero />
          </div>
        </div>
      </div>
    </div>
  );
}
