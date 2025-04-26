import { url } from "inspector";
import { instance } from "./config";
import { toast } from "sonner";
import { useMutation, useQuery } from "@tanstack/react-query";

type CustomError = {
  response?: {
    data?: {
      message?: string;
    };
    status?: number;
    statusText?: string;
  };
  request?: any; // You can adjust this type as needed
  message?: string;
};


export const fetchData = async (url: string) => {
    try {
        const {data} = await instance.get(url)
        return data
    } catch (error) {
        handleAxiosError(error as CustomError)
    }
}

export const useFetchData = (key: Array<string>, url: string, options = {}) => {
  return useQuery({
    queryKey: key,
    queryFn: () => fetchData(url),
    ...options,
  });
};


export const postData = async ({
  url,
  payload,
}: {
  url: string;
  payload?: any;
}) => {
  const { data } = await instance.post(url, payload);
  return data;
};

export const usePostData = (options: {}) => {

    return useMutation({
        mutationFn: postData,
        onSuccess(data) {
            toast.success(data.message)
        },
        onError(error) {
            console.log(error)
            handleAxiosError(error)
        },
        ...options
    })

}


export const handleAxiosError = (error: CustomError) => {
  if (error?.response) {
    console.log("response data:", error.response.data);
    console.log("Status Code:", error.response.status);
    console.log("Status Text:", error.response.statusText);

    // Check for 500 status and throw custom error message

    if (error.response.status === 500) {
      toast.error(`Something went wrong`, {
        position: "top-right",
      });
    } else if (error.response.data && error.response.data.message) {
      toast.error(`${error.response?.data?.message}`, {
        position: "top-right",
      });
    }
  } else if (error.request) {
    console.log(error?.message);
    toast.error(`${error?.message}`, {
      position: "top-right",
    });
  } else {
    console.log(error?.message);
    toast.error(`${error?.message}`, {
      position: "top-right",
    });
  }
};