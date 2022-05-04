import React from "react";
import styled from "@emotion/styled";
import { Button, Dropdown, Menu } from "antd";
import { useAuth } from "context/auth-context";
import ProjectListScreen from "screens/project-list";
import { Row } from "components/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";

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
  const { logout, user } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={"18rem"} color={"rgb(38,132,255)"} />
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={"logout"}>
                  <a onClick={logout}>登出</a>
                </Menu.Item>
              </Menu>
            }
          >
            <a onClick={(e) => e.preventDefault()}>Hi,{user?.name}</a>
          </Dropdown>
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
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;
const Main = styled.main``;
