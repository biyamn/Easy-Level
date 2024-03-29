import React from "react";
import styled from "styled-components";
import { signOut } from "firebase/auth";

const Header = ({ auth, currentUser, todayString, setSelectedInterview }) => {
  const logoutButton = <Button onClick={() => signOut(auth)}>로그아웃</Button>;
  const button = currentUser !== null && logoutButton;

  return (
    <Container>
      <Img
        src="assets/logo.png"
        width="160px"
        onClick={() => setSelectedInterview(null)}
      />
      <Wrapper>
        <Date>{todayString}</Date>
        {button}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: #1a202c;
  position: fixed;
  z-index: 1;
  overflow: auto;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const Img = styled.img`
  margin: 0 2rem;
  cursor: pointer;
  padding-top: 1rem;
  @media (max-width: 768px) {
    width: 100px;
    margin: 0 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Date = styled.div`
  font-size: 1.3rem;
  color: white;
  font-weight: bold;
  margin: 0 2rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0 0.5rem;
    display: none;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: #a8dcfa;
  border: none;
  font-size: 1.5rem;
  height: 3rem;
  cursor: pointer;
  margin: 0 2rem;
  font-weight: bold;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0 1rem;
  }
`;

export default Header;
