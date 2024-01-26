import React, { useState } from "react";
import { Container, FormContainer, Input, Label } from "./Login.style";
import Button from "Shared/Button/Button";
import { useAuthStore } from "stores/authStore";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "Constants/routes";
import LogoIcon from "Shared/icons/LogoIcon";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const handleLogin = async () => {
    const result = await login(username, password);
    if (result.status === "success") navigate(RoutePaths.Home);
  };

  return (
    <Container>
      <LogoIcon />
      <FormContainer>
        <Label>Username</Label>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Label>Password</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="button" onClick={handleLogin}>
          Login
        </Button>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
