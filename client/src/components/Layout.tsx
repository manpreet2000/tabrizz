import { ReactNode } from "react";
import logo from "../static/logo.png"
import useAuth from "../hooks/useAuth";

export default function Layout({ children }: { children: ReactNode | undefined }) {
  const {user,signOutUser} = useAuth();
  
  return (
    <div className="bg-primary  dark:text-white">
      <header className="fixed bottom-auto inset-x-0 top-0 z-50 shadow bg-opacity-50 border border-gray-100/10 bg-boxdark-2">
        <nav
          className="flex items-center justify-around lg:justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex ">
            <a href="/" className="-m-1.5 p-1">
              <img className="max-w-100 max-h-10" src={logo} alt="TabRizz" />
            </a>
          </div>
         <div className="flex justify-around  min-w-[30%]">
         <a
                href={"/dashboard"}
                className="text-sm font-semibold leading-6 text-gray-900 duration-300 ease-in-out hover:text-yellow-500 dark:text-white"
              >
                Dashboard
              </a>
         <a
                href={"/"}
                className="text-sm font-semibold leading-6 text-gray-900 duration-300 ease-in-out hover:text-yellow-500 dark:text-white"
              >
                How it works
              </a>

              <a
                href={"/"}
                className="text-sm font-semibold leading-6 text-gray-900 duration-300 ease-in-out hover:text-yellow-500 dark:text-white"
              >
                FAQ
              </a>
         </div>
          <div className="lg:flex lg:gap-x-12">
              <a
                href={user ? "/dashboard" : "/login"}
                className="text-sm font-semibold leading-6 text-gray-900 duration-300 ease-in-out hover:text-yellow-500 dark:text-white"
              >
               { user ? <span>{user.displayName}</span>: <span>Login</span> }
              </a>
              {user && <button onClick={signOutUser}>
                Log out
              </button>
              }
          </div>
          
        </nav>
      </header>
      <div className=" overflow-auto font-sans mx-auto max-w-7xl pt-[10%] max-h-screen">
        {children}
      </div>
    </div>
  );
}
