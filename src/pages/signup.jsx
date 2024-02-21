import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header';
import { HiChevronRight } from "react-icons/hi2";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'

import { useNavigate } from 'react-router-dom';

function Signup () {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
    } catch (err) {
      console.log(err)
    }
  }

  onAuthStateChanged(firebaseAuth, currentUser => {
    if (currentUser) navigate('/')
  })

  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className='content'>
        <Header login />
        <div className='body flex column a-center j-center'>
          <div className='text flex column'>
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart your
              membership
            </h6>
          </div>
          <div className='form'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={formValues.email}
              onChange={e =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value
                })
              }
            />

            {showPassword && (
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={formValues.password}
                onChange={e =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value
                  })
                }
              />
            )}

            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started <HiChevronRight style={{fontSize: "1.5rem"}} />
              </button>
            )}
          </div>
          <button onClick={handleSignIn}>Sign Up</button>
        </div>
      </div>
    </Container>
  )
}

export default Signup

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 75vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? '0.5fr 0.5fr' : '1fr 0.5fr'};
        width: 30%;
        input {
          color: #000;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid #000;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1.5rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: #fff;
          font-weight: bold;
          font-size: 1.5rem;
        }
      }
      button {
        padding: 0.5rem 1.5rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: #fff;
        border-radius: 0.2rem;
        font-weight: bold;
        font-size: 1.05 rem;
      }
    }
  }
`
