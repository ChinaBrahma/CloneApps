import React, {useState} from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const Movie = ({id, item}) => {
    const [like, setLike] = useState(false)

  return (
    <>
     <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-auto block hover:animate-scale"
                src={`http://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
              />
              <div
                className="absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white flex justify-center items-center"
              >
                <p className="whitespace-normal text-xs md:text-sm font-bold text-center">
                  {item?.title}
                </p>
                <p>
                    {like ? <FaHeart className="absolute top-4 left-4 text-gray-300"/> : <FaRegHeart className="absolute top-4 left-4 text-gray-300"/>}
                </p>
              </div>
            </div>
    </>
  )
}

export default Movie