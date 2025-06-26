import React, { useEffect, useState } from 'react'
import { getVideosByMovieId } from '../services/moviesService'
const VideoBackground = ({ movieId }) => {
 const [movieTrailer,setMovieTrailer]=useState(null) // save also in redux

  useEffect(() => {
    const fetchVideosByMovieId = async () => {
      let getVideos = await getVideosByMovieId(movieId);
  
      let filterVideo = getVideos.filter((video) => {
        return video.type === 'Trailer'
      })
      let trailer = filterVideo.length ? filterVideo[1] : getVideos[0]
      let newMovieTrailer = `https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&enablejsapi=1`
      setMovieTrailer(newMovieTrailer)
    };
    fetchVideosByMovieId();
  }, [movieId])

  return (
    <div>
      <iframe
      className=' w-screen aspect-video'
       src={movieTrailer}
       title="YouTube video player"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       referrerPolicy="strict-origin-when-cross-origin">
        </iframe>
    </div>
  )

}


export default VideoBackground