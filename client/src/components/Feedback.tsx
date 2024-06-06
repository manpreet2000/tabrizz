import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { backendUrl } from "../utils/common";
import useApi from "../hooks/useApi";

export default function Feedback() {
  const [feedback, setFeedback] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
const [success,setSuccess] = useState<boolean>(false);

  const {
    refetchData: refetchFeedback,
  } = useApi({ url: `${backendUrl}/users/feedback` });
  
  const addFeedback = async () => {
    setSuccess(false);
    if (!feedback || !firstName ) {
      alert("Please fill feedback and first name");
      return;
    }
    const data = {
      feedback,
      email,
      firstName,
      lastName,
    };
    await refetchFeedback("POST", false, data);
    setSuccess(true);
    setFeedback(null);
    setEmail(null);
    setFirstName(null);
    setLastName(null);
  }


  return (
    <Fade direction="left" triggerOnce>
      <div className="relative pt-8 ml-auto mr-auto bg-primary text-white font-sans gap-6 cursor-default mt-40 lg:mt-10 md:mt-14 flex flex-col justify-center align-middle items-center">
        <span className="text-4xl hover:text-yellow-500">Help us Improve.</span>
        <div className=" rounded-lg p-4 w-full">
          <div>
            <div className="text-4xl hover:text-yellow-500">Feedback</div>
            <textarea
              className="border border-yellow-500 w-full h-32 bg-gray-500 p-2"
              onChange={(e) => setFeedback(e.target.value)}
              value={feedback ?? ""}
            ></textarea>
          </div>
          <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row p-4 justify-between pl-0 pr-0">
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="text-2xl hover:text-yellow-500">Email</div>
              <input
                type="email"
                className="border border-yellow-500 w-full bg-gray-500 p-2"
                onChange={(e) => setEmail(e.target.value)}
                value={email ?? ""}
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="text-2xl hover:text-yellow-500  lg:w-[70%]">
                First Name
              </div>
              <input
                type="text"
                className="border border-yellow-500 w-full bg-gray-500 p-2"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName ?? ""}
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="text-2xl hover:text-yellow-500 lg:w-[70%]">
                Last Name
              </div>
              <input
                type="text"
                className="border border-yellow-500 w-full bg-gray-500 p-2"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName ?? ""}
              />
            </div>
          </div>
          <div className="flex justify-center pt-8">
            <button className="text-2xl border p-5 rounded-3xl pt-5 bg-gray-700 hover:bg-primary hover:text-yellow-500 w-[100%] lg:w-[30%]"
            onClick={addFeedback}>
              {success ? 'Feedback captured 🔥':'Submit 🤗'}
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
}
