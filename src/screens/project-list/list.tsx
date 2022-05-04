import styled from "@emotion/styled";
import { Table, TableProps } from "antd";
import dayjs from "dayjs";
import React from "react";
// react-router 和 react-router-dom关系 类似于 react和react-dom/react-native/react-vr
import { Link } from "react-router-dom";
import { User } from "./search-panel";

// TODO 把所有id改为number类型
export interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created: number;
}

interface ListProps extends TableProps<Project> {
  users: User[];
}

export default function List({ users, ...props }: ListProps) {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          sorter(a, b) {
            return a.name.localeCompare(b.name);
          },
          render(value, project) {
            return <Link to={String(project.id)}>{project.name}</Link>;
          },
        },
        {
          title: "部门",
          dataIndex: "organization",
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },
        {
          title: "创建时间",
          render(value, project) {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format("YYYY-MM-DD")
                  : "无"}
              </span>
            );
          },
          dataIndex: "created",
        },
      ]}
      {...props}
    ></Table>
  );
}
