import { Fade } from "react-awesome-reveal";
import selectEmojis from "../static/selectEmoji.png";
import time from "../static/time.png";
import tab from "../static/tab.png";

export default function Script() {
  return (
    <div id="work">
      <div className="flex flex-col lg:flex-row pt-10 lg:pt-0 justify-between mt-[15%]">
        <Fade direction="left" triggerOnce>
          <div className="flex flex-col gap-8 text-white items-center lg:items-start">
            <h1 className="text-2xl lg:text-4xl hover:text-yellow-500">
              Choose Emojis
            </h1>
            <p className="text-gray-500 w-[70%] text-sm lg:text-lg">
              {/* complete the sentence  */}
              Select Emojis you like 😋
            </p>
            <div className="w-[80%]">
              <img src={selectEmojis} alt="Emoji selector" />
            </div>
          </div>
        </Fade>
        <Fade direction="right" triggerOnce>
          <div className="flex flex-col gap-8 text-white items-center lg:items-end">
            <h1 className="text-2xl lg:text-4xl hover:text-yellow-500">
              preferred time
            </h1>
            <p className="text-gray-500 text-sm lg:text-lg">
              {/* complete the sentence  */}
              Select the time interval for the emojis to change
            </p>
            <div className="w-[80%]">
              <img src={time} alt="time selector" />
            </div>
          </div>
        </Fade>
      </div>
      <div className="flex flex-col lg:flex-row pt-10 lg:pt-0 justify-between mt-[10%]">
        <Fade direction="left" triggerOnce>
          <div className="flex flex-col gap-8 text-white items-center lg:items-start">
            <h1 className="text-2xl lg:text-4xl hover:text-yellow-500">
              Generate a Script
            </h1>
            <p className="text-gray-500 w-[70%] text-sm lg:text-lg">
              {/* complete the sentence  */}
              Select Emojis 😋 and set the Time interval
            </p>
            <div className="text-sm lg:text-lg font-thin border p-5 rounded-3xl bg-gray-700 hover:bg-primary hover:text-yellow-500 ">
              {"<"}script defer src="http://www.tabrizz.com"
              data-id="5ffad31abd7" script{"/>"}
            </div>
          </div>
        </Fade>
        <Fade direction="right" triggerOnce>
          <div className="flex flex-col gap-8 pt-8 lg:pt-0 text-white items-center lg:items-end">
            <h1 className="text-2xl lg:text-4xl hover:text-yellow-500">
              Paste it in your website
            </h1>
            <p className="text-sm lg:text-lg text-gray-500 ">
              Use the script for your website. just paste it in HTML file and
              it's done 😎
            </p>
            <div className="w-[50%] rounded-2xl">
              <img className="rounded-3xl" src={tab} alt="tab" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
