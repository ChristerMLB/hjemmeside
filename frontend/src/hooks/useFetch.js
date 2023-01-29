import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url){

    const [fetchedPieces, setFetchedPieces] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(
        () => {
            const fetchData = async () => {
                setLoading(true);
                try{
                    const res = await axios.get(url);
                    setFetchedPieces(res.data.data);
                    setLoading(false);
                } catch (error) {
                    setError(error);
                    setLoading(false);
                }
            }
            fetchData();
        },
        [url]
    );

    return { fetchedPieces, error, loading }

}