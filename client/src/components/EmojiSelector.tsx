import { useState } from "react";
import { listOfEmojies } from "../utils/emojies";

export default function EmojiSelector({setEmojiState, emojiState}: {setEmojiState: React.Dispatch<React.SetStateAction<string[]>>, emojiState: string[]}) {
  const handleEmoji = (emoji: string) => {
    if (emojiState.length < 5) {
      setEmojiState([...emojiState, emoji]);
    }
  };

  const removeEmoji = (emoji: string) => {
    const remainingEmojies = emojiState.filter((e) => e !== emoji);
      setEmojiState([...remainingEmojies]);
    
  };
  return (
    <div className="container border border-white p-6 flex flex-col min-h-40">
      <div className="pb-4">
        <span className="text-2xl">
          Select{" "}
          <span className="hover:text-yellow-500">
            Emojies {emojiState.length > 0 ? `(${emojiState.length})` : ""}
          </span>
        </span>
      </div>
      <div className="border min-h-[80%] border-stone-600 grid grid-cols-8 pl-3 pt-2 gap-1 overflow-scroll overflow-y-auto">
        {listOfEmojies.map((emoji, idx) => (
          <div
            key={idx}
            className="cursor-pointer hover:scale-150"
            style={{ scale: "1.2" }}
            onClick={() => handleEmoji(emoji)}
          >
            {emoji}
          </div>
        ))}
      </div>
      <div>
        <span className="pt-4 pr-2 text-2xl max-w-[20%] hover:text-yellow-500">
          Emojies:{" "}
        </span>
        <span>
          {emojiState.map((emoji, idx) => (
            <span
              className="cursor-pointer hover:scale-150"
              style={{ scale: "2" }}
              key={idx}
              onClick={() => removeEmoji(emoji)}
            >
              {emoji}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
