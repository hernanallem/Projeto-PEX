"use client"; // Adicione isso no topo do arquivo para usar hooks do React
import Image from "next/image";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Logo from "../assets/logo.svg";
import Link from "next/link";

export const Header = () => {
  const { data: session } = useSession();

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
            {session && (
              <li className="text-white duration-500 hover:text-indigo-400 hover:underline hover:transition-all">
                {`Olá, ${session?.user?.name}`}
              </li>
            )}
            <li>
              {session ? (
                <button
                  onClick={() => signOut()}
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
