import Button from "../../components/Button";
import { Header } from "../../components/Header";

export default function Estoque() {
  return (
    <div>
      <Header />
      <div className="flex items-center px-2 py-20">
        <div className="container mx-auto flex flex-col gap-4">
          <div className="flex w-full items-center justify-between">
            <span className="text-2xl font-semibold">Cadastro de estoque</span>
            <Button text="Adicionar item" type="button" variant="tertiary" />
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <form
              action=""
              className="grid grid-cols-2 grid-rows-4 gap-4 gap-x-16 rounded-xl bg-slate-50 px-20 py-16"
            >
              <div className="flex flex-col gap-4">
                <label className="font-semibold" htmlFor="nomeItem">
                  Nome do item
                </label>
                <input
                  type="text"
                  id="nomeItem"
                  className="rounded-2xl border border-slate-400 px-6 py-3 focus:outline-indigo-600"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-semibold" htmlFor="especie">
                  Espécie
                </label>
                <select
                  id="especie"
                  className="rounded-2xl border border-green-400 px-6 py-3 focus:outline-green-600"
                >
                  <option value="cao">Cão</option>
                  <option value="gato">Gato</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <label className="font-semibold" htmlFor="quantidade">
                    Quantidade
                  </label>
                  <input
                    type="number"
                    id="quantidade"
                    min="0"
                    required
                    className="rounded-2xl border border-slate-400 px-6 py-3 focus:outline-indigo-600"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="font-semibold" htmlFor="tipoUnidade">
                    Tipo de unidade
                  </label>
                  <select
                    id="tipoUnidade"
                    required
                    className="rounded-2xl border border-green-400 px-6 py-3 focus:outline-green-600"
                  >
                    <option value="opcao">Opção 1</option>
                    <option value="opcao">Opção 2</option>
                    <option value="opcao">Opção 3</option>
                    <option value="opcao">Opção 4</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-semibold" htmlFor="raca">
                  Raça
                </label>
                <input
                  type="text"
                  id="raca"
                  required
                  className="rounded-2xl border border-slate-400 px-6 py-3 focus:outline-indigo-600"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-semibold" htmlFor="comportamento">
                  Comportamento
                </label>
                <input
                  type="text"
                  id="comportamento"
                  required
                  className="rounded-2xl border border-slate-400 px-6 py-3 focus:outline-indigo-600"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-semibold" htmlFor="porte">
                  Porte
                </label>
                <input
                  type="text"
                  id="porte"
                  required
                  className="rounded-2xl border border-slate-400 px-6 py-3 focus:outline-indigo-600"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-semibold" htmlFor="animalConjunto">
                  Animal conjunto
                </label>
                <input
                  type="text"
                  id="animalConjunto"
                  required
                  className="rounded-2xl border border-slate-400 px-6 py-3 focus:outline-indigo-600"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-semibold" htmlFor="doencas">
                  Doenças
                </label>
                <input
                  type="text"
                  id="doencas"
                  required
                  className="rounded-2xl border border-slate-400 px-6 py-3 focus:outline-indigo-600"
                />
              </div>
            </form>
            <div className="mt-8 flex w-full justify-end">
              <Button text="Finalizar" type="submit" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
