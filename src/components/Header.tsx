"use client"; // Adicione isso no topo do arquivo para usar hooks do React
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "../assets/logo-petx.svg";
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
      <main className="flex justify-center">
        <header className="flex w-full items-center justify-around bg-background p-6 text-white">
          <Image src={Logo} alt={""} />
          <nav>
            <ul className="flex list-none items-center gap-4 text-sm md:gap-12">
              <Link
                className="text-white duration-500 hover:text-indigo-400 hover:underline hover:transition-all"
                href="/"
              >
                Painel Principal
              </Link>
              <Link
                className="text-white duration-500 hover:text-indigo-400 hover:underline hover:transition-all"
                href="/Animais"
              >
                Animais
              </Link>
              <Link
                className="text-white duration-500 hover:text-indigo-400 hover:underline hover:transition-all"
                href="/estoque"
              >
                Estoque
              </Link>
              <Link
                className="text-white duration-500 hover:text-indigo-400 hover:underline hover:transition-all"
                href="/configuracoes"
              >
                Configurações
              </Link>
              {user ? ( // Verifica se o usuário está autenticado
                <button
                  onClick={handleLogout} // Chama a função de logout
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
            </ul>
          </nav>
        </header>
      </main>
    </>
  );
};
