import styled from "@emotion/styled";
import { ReactNode } from "react";


const PageHeadeWarp = styled.header`
  label: header;
  width: 100%;
  z-index: 100;
  margin-bottom: 2rem;
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
`;

const LayoutWrap = styled.div`
  label: layout_wrap;
  display: flex;
  align-items: center;
  border-left: 0.5rem solid #DDFFAA;
  height: 5rem;
`;

const PageTitle = styled.div`
  label: page_title;
  font-size: 1.4rem;
  padding-left: 1rem;
`;

type Porps = {
  title: string;
}

function PageHeade({ title }: Porps) {
  return (
    <>
    <PageHeadeWarp>
      <LayoutWrap>
        <PageTitle>{title}</PageTitle>
      </LayoutWrap>
    </PageHeadeWarp>
    </>
  );
}

export default PageHeade;
