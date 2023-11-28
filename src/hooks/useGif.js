import { useState, useEffect } from 'react'
import axios from 'axios';

// Todo: Url ki api API_KEY variable k throught pass krna hai, direct nhi
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=TSMkTCNl9Cv1ytCCaRKQ3OSaL72sKxnS`;
// const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=TSMkTCNl9Cv1ytCCaRKQ3OSaL72sKxnS&tag=${tag}`;

const useGif = (tag) => {

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    // calling with API KEY for Gifs 
    async function fetchData(tag) {

        setLoading(true);
        const { data } = await axios.get(tag ? `${randomMemeurl}&tag=${tag}` : randomMemeurl);
        const imageSource = data.data.images.downsized_large.url;
        // const imageSource = data?.data?.data?.images?.downsized_large?.url;

        setGif(imageSource);
        setLoading(false);
        // console.log(imageSource);
        // console.log(data);
    }
    useEffect(() => {
        fetchData();
    }, [])

    return { gif, loading, fetchData }

}

export default useGif