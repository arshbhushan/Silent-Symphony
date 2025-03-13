import { useCallback, useState,useRef,useEffect } from "react";


export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const activeHttpRequests=useRef([]);

    const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setIsLoading(true);
        const httpAbortCtrl = new AbortController();
        activeHttpRequests.current.push(httpAbortCtrl);
    
        try {
            const response = await fetch(url, {
                method,
                body,
                headers,
                signal: httpAbortCtrl.signal
            });
    
            const responseData = await response.json();
    
            // Check if the request was aborted
            if (response.ok) {
                setIsLoading(false);
                return responseData;
            } else {
                throw new Error(responseData.message);
            }
        } catch (err) {
            if (err.name === 'AbortError') {
                //console.log('Request aborted by user');
                // Handle aborted request (e.g., return a specific value)
            } else {
                setError(err.message);
                setIsLoading(false);
                throw err;
            }
        }
    }, []);
    
    const clearError=()=>{
        setError(null);
    };
    useEffect(() => {
        const activeHttpRequestsCopy = activeHttpRequests.current;
        return () => {
            activeHttpRequestsCopy.forEach(abortCtrl => abortCtrl.abort());
        };
    }, []);
    
    


    return{isLoading, error, sendRequest, clearError};

};