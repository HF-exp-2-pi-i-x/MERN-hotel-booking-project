import { useEffect,useState } from "react";
import axios from "axios";

// axios is promised-based HTTP client for js, it can make HTTP requests from browser and handle the transformation of request and response data

const useFetch = (url) => {

  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try{
        const res = await axios.get(url);
        setData(res.data);
      }catch(err){
        setError(err);
      }
      // set false before finish the get request?
      setLoading(false);
    };
    fetchData();
  },[url]);

  const reFetch = async () => {
    setLoading(true);
    try{
      const res = await axios.get(url);
      setData(res.data);
    }catch(err){
      setError(err);
    }
    setLoading(false);
  };

  return { data,loading,error,reFetch };

};

export default useFetch;