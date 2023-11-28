import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import { useState } from 'react';

const Tag = () => {

    const [tag, setTag] = useState('');

    function clickHandler() {
        console.log('kuch toh aa rha hai');
        fetchData();
    }

    const { gif, loading, fetchData } = useGif(tag);

    return (
        <div
            className='w-1/2 bg-blue-300 rounded-lg
                border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='mt-[15px]  font-bold text-2xl underline uppercase'>A Random {tag} Gif</h1>
            {
                loading
                    ?
                    <Spinner />
                    :
                    <img src={gif} alt='' width='450' />
            }

            {/* Image Generation Text Input */}

            <input
                placeholder='tell Me!!'
                className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
                onChange={(event) => setTag(event.target.value)}
                value={tag}
            />

            <button
                className='w-10/12 bg-yellow-500  text-lg py-2 rounded-lg mb-[20px]'
                onClick={clickHandler}>
                Generate
            </button>
        </div>
    )
}

export default Tag