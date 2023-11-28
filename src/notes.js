//! Random.js

// import Spinner from './Spinner';
// import useGif from '../hooks/useGif';

// // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const Random = () => {

//     // const [gif, setGif] = useState('');
//     // const [loading, setLoading] = useState(false);
    
//     // // calling with API KEY for Gifs 
//     // async function fetchData() {

//     //     setLoading(true);
        
//     //     // TODO: change the API key from here, when testing done
//     //     const url = `https://api.giphy.com/v1/gifs/random?api_key=TSMkTCNl9Cv1ytCCaRKQ3OSaL72sKxnS`;
//     //     const { data } = await axios.get(url);

//     //     const imageSource = data.data.images.downsized_large.url;
//     //     // const imageSource = data?.data?.data?.images?.downsized_large?.url;
        
//     //     setGif(imageSource);
//     //     setLoading(false);

//     //     // console.log(imageSource);
//     //     // console.log(data);
//     // }
//     // useEffect(() => {
//     //     fetchData();
//     // },[])

//     //* use the { useGif -> created}
//     const {gif, loading, fetchData}  = useGif();

//     function clickHandler() {
//         console.log('kuch toh ho rha hai')
//         fetchData();
//     }

//     return (
//         <div 
//             className='w-1/2 bg-green-500 rounded-lg
//                 border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
//             <h1 className='mt-[15px]  font-bold text-2xl underline uppercase'>A Random Gif</h1>
//             {
//                 loading
//                     ?
//                 <Spinner/>
//                     :
//                 <img src={gif} alt='' width='450'/> 
//             }
//             <button 
//                 className='w-10/12 bg-yellow-500  text-lg py-2 rounded-lg mb-[20px]'
//                 onClick={clickHandler}>
//                 Generate
//             </button>
//         </div>
//     )
// }

// export default Random




//! Tag.js

// import Spinner from './Spinner';
// import useGif from '../hooks/useGif';
// import { useState } from 'react';

// // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const Tag = () => {

//     const [tag, setTag] = useState('');
//     // const [gif, setGif] = useState('');
//     // const [loading, setLoading] = useState(false);
    
//     // // calling with API KEY for Gifs 
//     // async function fetchData() {

//     //     setLoading(true);
        
//     //     // TODO: change the API key from here, when testing done
//     //     const url = `https://api.giphy.com/v1/gifs/random?api_key=TSMkTCNl9Cv1ytCCaRKQ3OSaL72sKxnS&tag=${tag}`;
//     //     const { data } = await axios.get(url);

//     //     const imageSource = data.data.images.downsized_large.url;
//     //     // const imageSource = data?.data?.data?.images?.downsized_large?.url;
        
//     //     setGif(imageSource);
//     //     setLoading(false);

//     //     // console.log(imageSource);
//     //     // console.log(data);
//     // }
//     // useEffect(() => {
//     //     fetchData();
//     // },[])

//     const {gif, loading, fetchData} = useGif(tag);

//     return (
//         <div 
//             className='w-1/2 bg-blue-300 rounded-lg
//                 border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
//             <h1 className='mt-[15px]  font-bold text-2xl underline uppercase'>A Random {tag} Gif</h1>
//             {
//                 loading
//                     ?
//                 <Spinner/>
//                     :
//                 <img src={gif} alt='' width='450'/> 
//             }

//             {/* Image Generation Text Input */}

//             <input 
//                 className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
//                 onChange={(event) => setTag(event.target.value)}
//                 value={tag}
//                 />

//             <button 
//                 className='w-10/12 bg-yellow-500  text-lg py-2 rounded-lg mb-[20px]'
//                 onClick={() => fetchData(tag)}>
//                 Generate
//             </button>
//         </div>
//     )
// }

// export default Tag





//! useGif


// import { useState, useEffect } from 'react'
// import axios from 'axios';

// // Todo: Url ki api API_KEY variable k throught pass krna hai, direct nhi
// // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// // const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=TSMkTCNl9Cv1ytCCaRKQ3OSaL72sKxnS`;
// // const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=TSMkTCNl9Cv1ytCCaRKQ3OSaL72sKxnS&tag=${tag}`;

// const useGif = (tag) => {

//     const [gif, setGif] = useState('');
//     const [loading, setLoading] = useState(false);

//     // calling with API KEY for Gifs 
//     async function fetchData(tag) {

//         setLoading(true);
//         const { data } = await axios.get(tag ? `${randomMemeurl}&tag=${tag}` : randomMemeurl);
//         const imageSource = data.data.images.downsized_large.url;
//         // const imageSource = data?.data?.data?.images?.downsized_large?.url;

//         setGif(imageSource);
//         setLoading(false);
//         // console.log(imageSource);
//         // console.log(data);
//     }
//     useEffect(() => {
//         fetchData();
//     }, [])

//     return { gif, loading, fetchData }

// }

// export default useGif