import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "./useAuth";

const useApi = ({url}: {url:string}) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user, isLoading: userLoading } = useAuth();
  const refetchData = async (
    type: string,
    isAuthRequired: boolean,
    data?: any
  ) => {
    try {
      setIsLoading(true);
      let token;
      if (isAuthRequired) {
        if (userLoading == false && !user) {
          setError("User is not authenticated");
          return;
        }
        token = await user?.getIdToken();
      }
      const res = await axios({
        method: type,
        url: url,
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
        data: JSON.stringify(data),
      });
      if (res) setResponse(res.data);
      setIsLoading(false);
    } catch (error) {
      setError(`${JSON.stringify(error)}`);
      setIsLoading(false);
    }
  };

  return { response, error, isLoading, refetchData };
};

export default useApi;
