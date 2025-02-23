import { Header } from "../components/Header";
import Image from "next/image";

import blueDogIcon from "../assets/icon-dog.svg";
import RedCatIcon from "../assets/icon-cat-red.svg";
import {
  lastClinicalExpenses,
  lastRegisterAnimals,
} from "./mockRegisterAnimals";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex min-h-[960px] items-center px-2 py-20">
        <div className="container mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Card Cachorros */}
          <div className="flex flex-col items-center gap-8 rounded-2xl bg-slate-50 py-10 text-center">
            <div className="flex min-w-40 flex-col items-center justify-center gap-4">
              <Image
                src={blueDogIcon}
                alt="Ícone de cachorro"
                width={83}
                height={83}
              />
              <h2 className="w-full rounded-full bg-indigo-600 px-2 py-1 text-white">
                Cachorros
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-bold">212</span> cachorros cadastrados
              </p>
              <p>
                <span className="font-bold">298kg</span> de ração no estoque
              </p>
            </div>
            <p>
              Temos ração para os cachorros por{" "}
              <span className="font-bold">12</span> dias
            </p>
          </div>

          {/* Card Gatos */}
          <div className="flex flex-col items-center gap-8 rounded-2xl bg-slate-50 py-10 text-center">
            <div className="flex min-w-40 flex-col items-center justify-center gap-4">
              <Image
                src={RedCatIcon}
                alt="Ícone de gato"
                width={83}
                height={83}
              />
              <h2 className="w-full rounded-full bg-red-400 px-2 py-1 text-white">
                Gatos
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-bold">212</span> gatos cadastrados
              </p>
              <p>
                <span className="font-bold">298kg</span> de ração no estoque
              </p>
            </div>
            <p>
              Temos ração para os gatos por <span className="font-bold">6</span>{" "}
              dias
            </p>
          </div>

          {/* Últimos Gastos Clínicos */}
          <div className="flex flex-col gap-8 rounded-2xl bg-slate-50 px-4 py-10 md:px-8 lg:px-12">
            <h2 className="text-lg font-semibold">Últimos Gastos Clínicos</h2>
            <ul className="divide-y divide-slate-300">
              {lastClinicalExpenses.map((expense, index) => (
                <li key={index} className="flex gap-2 py-3">
                  <span className="w-1/5 font-medium text-red-400">
                    {" "}
                    - R$ {expense.valor}
                  </span>
                  <span className="w-4/5 font-normal">{expense.descricao}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Últimos Animais Registrados */}
          <div className="flex flex-col gap-8 rounded-2xl bg-slate-50 px-4 py-10 md:px-8 lg:px-12">
            <h2 className="text-lg font-semibold">
              Últimos animais registrados
            </h2>
            <ul className="divide-y divide-slate-300">
              {lastRegisterAnimals.map((animal, index) => (
                <li key={index} className="flex gap-3 p-3 font-normal">
                  <span className="w-1/4">{animal.nome}</span>
                  <span className="w-1/4">{animal.tipo}</span>
                  <span className="w-1/4">{animal.idade}</span>
                  <span className="w-1/4">{animal.data}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
