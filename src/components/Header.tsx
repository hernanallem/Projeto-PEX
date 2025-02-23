"use client"; // Adicione isso no topo do arquivo para usar hooks do React
import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.svg";
import Link from "next/link";

export const Header = () => {
  const user = null; // Replace this with actual user state or context

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
                  onClick={() => alert("Sair")}
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
