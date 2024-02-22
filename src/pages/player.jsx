import React from 'react'
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs'
import video from '../assets/video.mp4'
import { useNavigate } from 'react-router-dom';

const Player = () => {

    const navigate = useNavigate();

  return (
    <Container>
     <div className="player">
        <div className="back" onClick={() =>navigate -1}>
            <BsArrowLeft />
        </div>
        <video src={video} autoPlay loop controls muted></video>
     </div>
    </Container>
  )

}

export default Player;

const Container = styled.div``;
