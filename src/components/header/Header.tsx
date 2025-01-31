import Image from "next/image";
import React from "react";
import Logo from "../../assets/logo.svg";
import Link from "next/link";

export const Header = () => {
  const User = "pierre";

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
              {User === "pierre" ? (
                <Link
                  className="text-white duration-500 hover:text-indigo-400 hover:underline hover:transition-all"
                  href="/login"
                >
                  Sair
                </Link>
              ) : (
                <Link
                  className="text-white duration-500 hover:text-indigo-400 hover:underline hover:transition-all"
                  href="/logout"
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
