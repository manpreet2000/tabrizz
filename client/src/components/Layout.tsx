import { ReactNode, useState } from "react";
import logo from "../static/logo.png";
import useAuth from "../hooks/useAuth";
import { Dialog } from "@headlessui/react";
import { HiBars3 } from "react-icons/hi2";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Layout({
  children,
}: {
  children: ReactNode | undefined;
}) {
  const { user, signOutUser, isLoading } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-primary  dark:text-white">
      <header className="fixed bottom-auto inset-x-0 top-0 z-50 shadow bg-opacity-20 border border-gray-100/10 backdrop-blur-lg bg-navbar ">
        <nav
          className="flex items-center justify-around lg:justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex ">
            <a href="/" className="-m-1.5 p-1">
              <img className="max-w-100 max-h-10" src={logo} alt="TabRizz" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HiBars3 className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex justify-around  min-w-[30%]">
            <a
              href={"/dashboard"}
              className="text-sm font-semibold leading-6 text-gray-900 duration-300 ease-in-out hover:text-yellow-500 dark:text-white"
            >
              Dashboard
            </a>
            <a
              href={"#work"}
              className="text-sm font-semibold leading-6 text-gray-900 duration-300 ease-in-out hover:text-yellow-500 dark:text-white"
            >
              How it works
            </a>

            <a
              href={"#features"}
              className="text-sm font-semibold leading-6 text-gray-900 duration-300 ease-in-out hover:text-yellow-500 dark:text-white"
            >
              Features
            </a>
          </div>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary text-white  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <AiFillCloseCircle className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root ">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 flex flex-col justify-start">
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
                  <div className="py-6 flex justify-start flex-col items-start">
                    <a
                      href={user ? "/dashboard" : "/login"}
                      className=" text-sm font-semibold leading-6 text-gray-900 duration-300 ease-in-out hover:text-yellow-500 dark:text-white"
                    >
                      {user ? (
                        <span>{user.displayName}</span>
                      ) : (
                        <span>Login</span>
                      )}
                    </a>
                    <button onClick={signOutUser}>Log out</button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
          <div className=" hidden lg:flex lg:gap-x-12">
            <a
              href={user ? "/dashboard" : "/login"}
              className="text-sm font-semibold leading-6 text-gray-900 duration-300 ease-in-out hover:text-yellow-500 dark:text-white"
            >
              {user ? <span>{user.displayName}</span> : <span>Login</span>}
            </a>
            {user && <button onClick={signOutUser}>Log out</button>}
          </div>
        </nav>
      </header>
      <div className="font-sans mx-auto max-w-7xl pt-[10%] max-h-screen">
        {children}
      </div>
    </div>
  );
}
