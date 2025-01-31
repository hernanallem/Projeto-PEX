"use client";
import { useState } from "react";
import Image from "next/image";
import CatIcon from "@/assets/icon-cat.svg";
import DogIcon from "@/assets/logo-petx.svg";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import Link from "next/link";
import { registrarUsuario } from "@/services/api"; // Importe a função de registro

function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    // Validação básica
    if (password !== confirmarSenha) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      const response = await registrarUsuario({ email, password });
      setSuccess("Usuário registrado com sucesso!");
      console.log("Resposta do servidor:", response);

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocorreu um erro desconhecido ao registrar o usuário.");
      }
    }
  };

  return (
    <div>
      <div className="flex h-screen">
        <div className="flex h-full w-full justify-center bg-indigo-50 p-8 sm:w-full lg:w-3/4">
          <div className="flex w-full flex-col items-center justify-center gap-4 rounded-2xl bg-white lg:w-3/4">
            <Image src={DogIcon} alt="" />
            <h1 className="text-xl">Registre sua conta</h1>
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
              <TextField
                placeholder="Confirme Sua Senha"
                type="password"
                icon="password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
              <Button type="submit" text="Criar Conta" icon="SignIn" />
            </form>
            <Link href="/login" className="text-base text-slate-500">
              possui uma conta? faça <u>login</u>
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
    </div>
  );
}

export default Registro;
