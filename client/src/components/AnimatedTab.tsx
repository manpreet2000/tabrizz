import { Fade } from "react-awesome-reveal";
import WebsiteTab from "./WebsiteTab";

export default function AnimatedTab() {
    return (
        <Fade direction="down" triggerOnce>
        <div className="flex justify-center align-middle items-center mt-[15%] pb-2 border-none">
            <WebsiteTab isLandingPage={true}/>
        </div>
        </Fade>
    );
}