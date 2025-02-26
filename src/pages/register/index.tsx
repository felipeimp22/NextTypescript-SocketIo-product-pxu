import React, { useState } from "react";
import { registerUser } from "@/services/registerUser";
import { toast } from "react-toastify";
import {
  FormGroup,
  Input,
  Label,
  PageContainer,
  RegisterForm,
  SubmitButton,
  Title,
} from "@/styles/shared/forms";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if(password !== repeatPassword){
        toast.error("The password should match", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return
      }

      await registerUser(email, password);

      router.push("/home");

    } catch (error) {
      console.error("Registration failed:", error);

      toast.error("Registration failed!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <PageContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <Title>Register</Title>
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
        <FormGroup>
          <Label htmlFor="password">repeat the Password</Label>
          <Input
            id="password"
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Register</SubmitButton>
      </RegisterForm>
    </PageContainer>
  );
};

export default RegisterPage;
