"use client";
import { useState } from "react";
import Image from "next/image";
import CatIcon from "@/assets/icon-cat.svg";
import DogIcon from "@/assets/logo-petx.svg";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import Link from "next/link";
import { login } from "@/services/api"; // Importe a função de login

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await login({ email, password });
      // Redirecionar ou mostrar mensagem de sucesso
      console.log("Login realizado com sucesso:", response);
      // Redirecionar para a página inicial ou dashboard
      window.location.href = "/"; // Ou use o Next.js Router para navegação
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocorreu um erro desconhecido.");
      }
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex h-full w-full justify-center bg-indigo-50 p-8 sm:w-full lg:w-3/4">
        <div className="flex w-full flex-col items-center justify-center gap-4 rounded-2xl bg-white lg:w-3/4">
          <Image src={DogIcon} alt="" />
          <h1 className="text-xl">Faça o login</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <TextField
              placeholder="Digite Seu Email"
              type="email"
              icon="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              placeholder="Digite Sua Senha"
              type="password"
              icon="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <Button type="submit" text="Entrar" icon="SignIn" />
          </form>
          <Link href="/registro" className="text-base text-slate-500">
            Não possui uma conta? <u>Cadastre-se</u>
          </Link>
          <Link href="#" className="text-base text-slate-500 underline">
            Esqueceu a senha?
          </Link>
        </div>
      </div>
      <div className="hidden sm:w-full md:w-2/4 lg:flex lg:w-full lg:items-center lg:justify-center">
        <Image src={CatIcon} alt="" />
      </div>
    </div>
  );
}
