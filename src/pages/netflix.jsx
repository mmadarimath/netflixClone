import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import BackgroundImage from '../assets/home.jpg'
import MovieLogo from '../assets/homeTitle.webp'
import { FaPlay } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import styled from 'styled-components'

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className='hero'>
        <img
          className='background-image'
          src={BackgroundImage}
          alt='background'
        />
        <div className='container'>
          <div className='logo'>
            <img src={MovieLogo} alt='Movie Logo' />
          </div>
          <div className='buttons flex'>
            <div className='flex j-center a-center'>
              <button className='flex j-center a-center'>
                <FaPlay /> Play
              </button>

              <button className='flex j-center a-center'>
                <AiOutlineInfoCircle /> More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Netflix;


const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.5rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: #6D6D6E;
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
