import { useEffect, useState } from "react";
import { listOfEmojies } from "../utils/emojies";

export default function WebsiteTab() {
  const [emoji, setEmoji] = useState("✨");
    const [title, setTitle] = useState("");
    useEffect(() => {
        const randomListOfEmoji =
          listOfEmojies[Math.floor(Math.random() * listOfEmojies.length)];
        const intervalId = setInterval(() => {
          setEmoji(randomListOfEmoji);
        }, 1000);
    
        return () => clearInterval(intervalId);
      });
      
    return (
        <div className="container border border-white p-6 flex flex-col min-h-40">
          <div className="pb-4">
            <span className="text-2xl">
              Got a <span className="hover:text-yellow-500">Website?</span>
            </span>
          </div>
          <span className=" text-gray-400">
            This is going to be your Tab, give it a name.
            
          </span>
          <div className="mt-20 flex justify-between border border-b-0 rounded-2xl align-bottom">
            <div className="flex justify-center max-w-[80%]">
              <span
                className="hover:scale-125 self-center "
                style={{ scale: "1.5" }}
              >
                
                {emoji}
              </span>
              <input
                type="text"
                placeholder="tabrizz"
                className="p-3 pl-5 w-[80%] text-white rounded-lg bg-primary outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="self-center pr-6" style={{ scale: "1.5" }}>
              ⨯
            </div>
          </div>
        </div>
    );
}