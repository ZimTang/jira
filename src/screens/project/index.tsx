import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";
import { KanbanScreen } from "screens/kanban";
import { EpicScreen } from "screens/epic";

export default function ProjectScreen() {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to="kanban">看板</Link>
      <Link to="epic">任务组</Link>
      <Routes>
        <Route path="/kanban" element={<KanbanScreen />}></Route>
        <Route path="/epic" element={<EpicScreen />}></Route>
        {/* 重定向 */}
        <Route
          path="*"
          element={<Navigate to={window.location.pathname + "/kanban"} />}
        ></Route>
      </Routes>
    </div>
  );
}
