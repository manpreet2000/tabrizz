import { Fade } from "react-awesome-reveal";
const Feature=({title,description,dir}:{title:string,description:string,dir:"left"|"right"})=>{
    return(
        <Fade direction={dir} triggerOnce>
            <div className="w-full pt-10">
                <h1 className="text-xl lg:text-4xl hover:text-yellow-500">{title}</h1>
                <p className="text-gray-500  pt-4 text-sm lg:text-lg">{description}</p>
            </div>
        </Fade>
    )
}
export default function Features() {
    return (
        <Fade direction="left" triggerOnce>
        <div className="flex flex-col gap-12 pt-10 lg:pt-0 items-center justify-center w-full h-full mt-[15%]" id="features">
            <h1 className="text-6xl font-bold pb-5 hover:text-yellow-500">Features</h1>
            <div className="grid lg:grid-flow-row lg:grid-cols-2 pl-[10%] pr-[10%] w-full pb-10">
                <Feature title="Free to use" description="No payment required 💸❌" dir="left"/>
                <div className="flex justify-end items-end">
                <Feature title="Open source code" description="Community helps 😎" dir="right"/>
                </div>
                <Feature title="Single Script per User" description="Generate once, use unlimited 🤑" dir="left"/>
                <div className="flex justify-end items-end">
                <Feature title="So mannyy Emojis" description="👿 🫶 😇 😎 😋 😏 🥺 🔥" dir="right"/>
                </div>
            </div>
            </div>
            <div className="w-full flex justify-center">
            <a 
        href="/dashboard"
          className="text-xl border p-5 rounded-3xl bg-gray-700 hover:bg-primary hover:text-yellow-500"
        >Convinced? 🫣</a>
            </div>
        </Fade>

    );
}