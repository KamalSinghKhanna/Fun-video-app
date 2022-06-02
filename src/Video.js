import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares
}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (playing){
            videoRef.current.pause(); 
            setPlaying(false); 
        } else{
            videoRef.current.play();
            setPlaying(true);
        }
              
              
    }

  return (
    <div className='video'>
      <video 
      className='video__player'
      loop 
      ref={videoRef}
      onClick={onVideoPress}
      src={url}>
      </video>
      <VideoFooter 
        channel={channel}
        description={description}
        song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  )
}

export default Video


/*
"https://cdn3.sharechat.com/74316_new_attributed_62070_attribute_removed_new_25.mp4"

<video src="https://v16-webapp.tiktok.com/e0935b053e703aada8f4949aee742780/6297cf17/video/tos/useast2a/tos-useast2a-ve-0068c004/7c7ccfc2943d477fa8eb3bdf5c9f5ac2/?a=1988&amp;ch=0&amp;
cr=0&amp;dr=0&amp;lr=tiktok_m&amp;cd=0%7C0%7C1%7C0&amp;cv=1&amp;br=2914&amp;bt=1457&amp;btag=80000&amp;cs=0&amp;ds=3&amp;ft=eXd.6HwzMyq8ZkElvwe2N9fqyl7Gb&amp;mime_type=video_mp4&amp;qs=0&amp;
rc=aWg5N2c1Mzg2N2c4OjNnOkBpajpxZDs6Zjp1ZDMzNzczM0BjNGAxMTJeNjMxNWBjNC0wYSNfLy9kcjRnLjRgLS1kMTZzcw%3D%3D&amp;l=202206011441180102230980250C2CE972" playsinline="" autoplay="" class="tiktok-1sm3sg-VideoBasic e1yey0rl4"></video>
*/