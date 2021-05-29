import React,{useEffect,useRef,useState} from 'react';
import styled from 'styled-components';



const VideoPlaying = () => {

    const videoRef = useRef(null);
    const [start,setStart] = useState(false); 

    useEffect(() => {
    console.log(start,"use effect called");
    
      
    }, [videoRef,start]);
  
    

    const handleVideo =() =>{
        console.log("handlevideo called ",start);
        setStart(!start);
        navigator.mediaDevices
        .getUserMedia({ video: { width: 300 } })
        .then(stream => {
           
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch(err => {
          console.error("error:", err);
        });
    }
    const handleStop = () =>{
        let video = videoRef.current;
        video.srcObject.getTracks()[0].stop();
          

    }
  
    return (
      <div>
        <div>
          <button onClick={handleVideo}>start</button>
          <button onClick={handleStop}>stop</button>
          <video ref={videoRef} />
        </div>
      </div>
    );
  };

 
export default VideoPlaying;

const Videodiv = styled.div`

    background-color: #3a8589;

`