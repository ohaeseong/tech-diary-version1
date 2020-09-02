import React, { ReactNode } from 'react';
import styled from '@emotion/styled';


const HalfTemplate = styled.div`
  label: half_template;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  border: 1px solid black;

  background-color: white;
`;

type Props = {
  children: ReactNode;
}

function HalfPageTemplate({ children }: Props) {
  return (
    <HalfTemplate>
      {children}
    </HalfTemplate>
  );
}

export default HalfPageTemplate;