"use client"; // Adicione isso no topo do arquivo para usar hooks do React
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Para redirecionamento

export const Header = () => {
  const [user, setUser] = useState<string | null>(null); // Estado para armazenar o usuário autenticado
  const router = useRouter(); // Hook para redirecionamento

  // Simulação de verificação de autenticação (substitua pela lógica real)
  useEffect(() => {
    const storedUser = localStorage.getItem("user"); // Verifica se há um usuário no localStorage
    if (storedUser) {
      setUser(storedUser); // Define o usuário autenticado
    }
  }, []);

  // Função para fazer logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove o usuário do localStorage
    localStorage.removeItem("token"); // Remove o token de autenticação (se houver)
    setUser(null); // Atualiza o estado para refletir que o usuário não está mais autenticado
    router.push("/login"); // Redireciona para a página de login
  };

  return (
    <>
      <div className="flex min-h-24 items-center bg-slate-900 p-4">
        <div className="container mx-auto flex w-full flex-col items-center justify-between gap-3 md:flex md:flex-row">
          <Link href="/">
            <Image src={Logo} alt="Logo" />
          </Link>
          <ul className="flex list-none items-center gap-4 text-sm md:gap-12">
            <li>
              <Link
                className="text-white duration-500 hover:text-indigo-400 hover:underline hover:transition-all"
                href="/"
              >
                Painel Principal
              </Link>
            </li>
            <li>
              <Link
                className="text-white duration-500 hover:text-indigo-400 hover:underline hover:transition-all"
                href="/animais"
              >
                Animais
              </Link>
            </li>
            <li>
              <Link
                className="text-white duration-500 hover:text-indigo-400 hover:underline hover:transition-all"
                href="/estoque"
              >
                Estoque
              </Link>
            </li>
            <li>
              <Link
                className="text-white duration-500 hover:text-indigo-400 hover:underline hover:transition-all"
                href="/configuracoes"
              >
                Configurações
              </Link>
            </li>
            <li>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="text-white duration-500 hover:text-indigo-400 hover:underline hover:transition-all"
                >
                  Sair
                </button>
              ) : (
                <Link
                  className="text-white duration-500 hover:text-indigo-400 hover:underline hover:transition-all"
                  href="/login"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
