import { ReactNode } from "react";

export default function Container({children}: { children: ReactNode }) {
    return (
        <div className="relative w-full ml-auto mr-auto bg-primary text-white font-sans cursor-default mt-40 lg:mt-10 md:mt-14">
        {children}
        </div>
    );
    }