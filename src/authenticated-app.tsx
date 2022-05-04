import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";
import { useAuth } from "context/auth-context";
import ProjectListScreen from "screens/project-list";
import { Row } from "components/lib";

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
      <Header between={true}>
        <HeaderLeft gap={true}>
          <h2>logo</h2>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Button type="primary" onClick={logout}>
            登出
          </Button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  height: 100vh;
`;

// grid-area 用来给grid元素起名字
const Header = styled(Row)``;

const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;
const Main = styled.main``;
