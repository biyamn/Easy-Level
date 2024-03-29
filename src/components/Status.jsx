import React from 'react';
import Progress from './Progress';

import styled from 'styled-components';

const Status = ({ status }) => {
  const Title = () => {
    return (
      <TitleWrapper>
        <TitleText>현황</TitleText>
      </TitleWrapper>
    );
  };

  const Status = () => {
    const text = status.map((item) => {
      return (
        <StatusWrapper key={item.id}>
          {item.text} ({item.status})
          <Progress now={item.percent} label={`${item.percent}%`} />
        </StatusWrapper>
      );
    });

    return <>{text}</>;
  };

  return (
    <Container>
      <Title />
      <Status />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 4;
  width: 100%;
  flex-direction: column;
  white-space: pre-line;

  @media screen and (max-width: 768px) {
    border-top: 1px solid white;
    margin-top: 5%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 768px) {
    margin-top: 5%;
  }
`;

const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-bottom: 1.5rem;
  color: white;
`;

const TitleText = styled.h1`
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default Status;
