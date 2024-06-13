import React, { useEffect, useState } from "react";
import { token } from "../config.js";

const UseFetchData = (url, limit = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const fetchUrl = limit ? `${url}?limit=${limit}` : url;
      const res = await fetch(fetchUrl, {
        headers: { Authorization: `Bearer ${token}` },
      }); 
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }
      setData(result.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {    
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
}

export default UseFetchData;
