import { GiAbstract051 } from "react-icons/gi";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Playfair_Display_SC, UnifrakturMaguntia } from "next/font/google";
import { cn } from "@/lib/utils";

const infableFont = UnifrakturMaguntia({
  subsets: ["latin"],
  weight: "400",
});

const infableFont2 = Playfair_Display_SC({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className=" flex flex-col items-center justify-center">
          <p
            className={cn(
              infableFont2.className,
              " tracking-widest text-8xl text-center text-red-200 pb-20"
            )}
          >
            <span className="[text-shadow:_12px_8px_10px_rgb(250_223_223_/_60%)]">
              Infable
            </span>{" "}
            <span className="text-white">Game Studio</span>
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Goosebump-Inducing User Experience"
            className={cn(
              infableFont2.className,
              "text-left text-[36px] md:text-4xl lg:text-5xl px-20 mb-20"
            )}
          />

          {/* <p className="text-center md:tracking-wider m-4 mt-10 text-[20px] md:text-lg lg:text-2xl max-w-[70vw]">
            Infable Games is founded by industry experts and focused on Hybrid
            casual and Mid Core mobile games.
          </p> */}

          <a href="#about">
            <MagicButton
              title="Contact us"
              icon={<GiAbstract051 />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
