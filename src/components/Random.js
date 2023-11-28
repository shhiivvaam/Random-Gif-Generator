import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

    //! use the { useGif -> created}
    const { gif, loading, fetchData } = useGif();

    function clickHandler() {
        console.log('kuch toh ho rha hai')
        fetchData();
    }

    return (
        <div
            className='w-1/2 bg-green-500 rounded-lg
                border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='mt-[15px]  font-bold text-2xl underline uppercase'>A Random Gif</h1>
            {
                loading
                    ?
                    <Spinner />
                    :
                    <img src={gif} alt='' width='450' />
            }
            <button
                className='w-10/12 bg-yellow-500  text-lg py-2 rounded-lg mb-[20px]'
                onClick={clickHandler}>
                Generate
            </button>
        </div>
    )
}

export default Random