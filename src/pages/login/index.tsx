import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { FormGroup, Input, Label, LoginForm, PageContainer, SubmitButton, Title } from "@/styles/shared/forms";

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <PageContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <SubmitButton
          type="submit">Login</SubmitButton>
      </LoginForm>
    </PageContainer>
  );
};

export default LoginPage;
