import React, { useState } from "react";
import { Container, FormContainer, Input, Label } from "./Login.style";
import Button from "Shared/Button/Button";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Logging in with:", username, password);
  };

  return (
    <Container>
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
