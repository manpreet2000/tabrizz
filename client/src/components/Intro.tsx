import { Fade } from "react-awesome-reveal"

export default function Intro() {

return (
    <Fade direction="left" triggerOnce> 
           <div className="relative pt-8 ml-auto mr-auto bg-primary text-white font-sans cursor-default mt-40 lg:mt-10 md:mt-14 flex justify-center">
    <div className="flex flex-col align-middle items-center gap-8 text-center max-w-[50%] self-center">
        <div className="text-8xl hover:text-yellow-500 drop-shadow-2xl" style={{'textShadow': '#FC0 1px 0 10px'}}><span>TabRizz.</span></div>
        <div className="text-lg lg:text-3xl max-w-[100%] lg:max-w[85%]">No more Boring Tabs, Rizzup your Website with Awesome Tabs 🔥</div>
        <div className="text-sm lg:text-lg text-gray-500">Get traffic on your website, select Emojis ✨, set the timining, generate the script. it's that Simple!! 💸</div>
        <a 
        href="/dashboard"
          className="text-xl border p-5 rounded-3xl bg-gray-700 hover:bg-primary hover:text-yellow-500"
        >Jump In 👻</a>
    </div>
    </div>
    </Fade>

);
}