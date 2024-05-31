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
       <a href="https://www.producthunt.com/posts/tabrizz?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tabrizz" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=460513&theme=dark" alt="TabRizz - Bring&#0032;back&#0032;lost&#0032;users&#0032;on&#0032;your&#0032;website&#0032;with&#0032;Emojis | Product Hunt" width="250" height="54" /></a>
    </div>
    </div>
    </Fade>

);
}