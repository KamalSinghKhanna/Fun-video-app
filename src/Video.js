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


//<video src="https://v16-webapp.tiktok.com/4a9522c635be1a59747154ce642eeb17/62989767/video/tos/maliva/tos-maliva-ve-0068c799-us/acce0c70413942918d366a51cdfc9627/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok_m&amp;cd=0%7C0%7C1%7C0&amp;cv=1&amp;br=3284&amp;bt=1642&amp;btag=80000&amp;cs=0&amp;ds=3&amp;ft=eXd.6HwzMyq8Z3xdkwe2N02jyl7Gb&amp;mime_type=video_mp4&amp;qs=0&amp;rc=OWlkZDc4OWY0Zjo4OmllPEBpM2czMzo6ZnRkOzMzZzczNEBfNjUtXi5jNjExX15iYjVeYSMvaTUxcjRnNnJgLS1kMS9zcw%3D%3D&amp;l=2022060204562101019204603710023C41" playsinline="" autoplay="" class="tiktok-1sm3sg-VideoBasic e1yey0rl4"></video>

//<video src="https://v16-webapp.tiktok.com/d3a4d72d09d952a1b6ee9ca1d2b6f312/62989765/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/5a0b8539af494987a51f419bf1b4012d/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok&amp;cd=0%7C0%7C1%7C0&amp;cv=1&amp;br=3892&amp;bt=1946&amp;btag=80000&amp;cs=0&amp;ds=3&amp;ft=eXd.6HwzMyq8Z3xdkwe2N02jyl7Gb&amp;mime_type=video_mp4&amp;qs=0&amp;rc=PGU5Nzo3aWhkZmhmN2Q3ZUBpamxtdTo6Zms2ZDMzZjgzM0AwLzQtMWExXjExYTIwLi5jYSMzcTQ1cjQwZGBgLS1kL2Nzcw%3D%3D&amp;l=2022060204562101019204603710023C41" playsinline="" autoplay="" class="tiktok-1sm3sg-VideoBasic e1yey0rl4"></video>