import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../context/appContext';

const FakeLoginContainer = styled('div')`
  width: 360px;

    .fake-login__title{
      color: white;
      text-align: center;
      margin: 5vh 0;
      padding: 0 30px;
      font-weight: var(--bold);
      font-size: var(--font-xl);
    }
    .fake-login__users{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 5vh;
    }
    .fake__user{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      border: 2px solid var(--primary);
      border-radius: 10px;
      width: 120px;
      height: 120px;
      background-color: white;
      margin: 20px;
      cursor: pointer;
      transition-duration: 200ms;
    }
      .fake__user:hover{
        background-color: var(--primary);
        color: white;
        transform: scale(1.2);
      }
    .fake__user-img{
      margin-top: 15px;
    }
    .fake__user-name{
      font-weight: var(--semi-bold);
      font-size: var(--font-lg);
      margin-bottom: 15px;
    }
`

const FakeLogin = () => {

  const { fakeLogin } = useContext(AppContext);

  return (
    <FakeLoginContainer>
      <p className="fake-login__title">Selecciona un psicologo para hacer login</p>
      <div className="fake-login__users">
        <button className="fake__user" onClick={() => fakeLogin(1)}>
          <img src="/static/gerard.png" alt="Gerardo" className="fake__user-img" />
          <p className="fake__user-name">Gerardo</p>
        </button>
        <button className="fake__user" onClick={() => fakeLogin(2)}>
          <img src="/static/aileen.png" alt="Aileen" className="fake__user-img" />
          <p className="fake__user-name">Aileen</p>
        </button>
      </div>
    </FakeLoginContainer>
  )
}

export default FakeLogin;
