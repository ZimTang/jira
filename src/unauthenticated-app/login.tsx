import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL;
export default function LoginScreen() {
  const { login, user } = useAuth();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">用户名</label>
      <input type="text" id={"username"} />
      <label htmlFor="password">密码</label>
      <input type="password" id={"password"} />
      <button type={"submit"}>登录</button>
    </form>
  );
}