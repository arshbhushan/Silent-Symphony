import { useCallback, useState,useEffect } from "react";
import { Await } from "react-router-dom";


export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const activeHttpRequests=useRef([]);

    const sendRequest = useCallback (async(
        url, 
        method = 'GET', 
        body = null, 
        headers = {}
        ) => {
            setIsLoading(true);
            const httpAboartCtrl= new AbortController();
            activeHttpRequests.current.push(httpAboartCtrl);
        try {
            const response = await fetch(url, {
                method,
                body,
                headers,
                signal:httpAboartCtrl.signal
            });
            const ResponseData = await response.json();

            if (!response.ok) {
                throw new Error(ResponseData.message);
            };
            return ResponseData;
        } catch (error) {
            setError(err.message);
        }
        setIsLoading(false);
    }, []);
    const clearError=()=>{
        setError(null);
    };
    useEffect(()=>{
        return ()=>{
            activeHttpRequests.current.forEach(abortCtrl=>abortCtrl.abortCtrl());
        };
    },[]);

    return {isLoading,error,sendRequest};
};