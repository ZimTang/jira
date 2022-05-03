import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";
import { useAuth } from "context/auth-context";
import ProjectListScreen from "screens/project-list";

/**
 * grid and flex
 * 1. 要考虑是一维布局还是二维布局，一般来说 一维布局用flex，二维布局用grid
 * 2. 是从内容出发还是从布局出发
 *    内容出发：先有内容（数量不固定），然后希望他们均匀的分布在容器中，由内容自己大小决定占据空间
 *    布局出发：先规划网格，再把元素往里面填充，一般来说，网格数量比较固定
 * 从内容出发用flex
 * 从布局出发用grid
 *
 */

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <h3>logo</h3>
          <h3>xiangmu</h3>
          <h3>yonghu</h3>
        </HeaderLeft>
        <HeaderRight>
          <Button type="primary" onClick={logout}>
            登出
          </Button>
        </HeaderRight>
      </Header>
      <Nav>nav</Nav>
      <Main>
        <ProjectListScreen />
      </Main>
      <Aside>aside</Aside>
      <Footer>footer</Footer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr 6rem;
  grid-template-columns: 20rem 1fr 20rem;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-gap: 10rem;
  height: 100vh;
`;

// grid-area 用来给grid元素起名字
const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  grid-area: header;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div``;
const Main = styled.main`
  grid-area: main;
`;
const Nav = styled.nav`
  grid-area: nav;
`;
const Aside = styled.aside`
  grid-area: aside;
`;
const Footer = styled.footer`
  grid-area: footer;
`;
