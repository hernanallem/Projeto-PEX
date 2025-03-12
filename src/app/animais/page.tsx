import Button from "../../components/Button";
import { Header } from "../../components/Header";

export default function Animais() {
  return (
    <div className="rouded-2xl flex w-full flex-col">
      <Header />
      <div className="flex items-center px-2 py-12">
        <div className="container mx-auto items-center">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <h1 className="col-span-4 mb-4 text-xl font-semibold">
              Animais registrados
            </h1>
            <div className="flex w-full items-center gap-2 md:w-auto">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Pesquisar"
                className="rounded-2xl border border-slate-400 px-6 py-3 focus:outline-indigo-600"
              />
              <Button text="Pesquisar" type="button" variant="primary" />
            </div>
            <Button
              text="Cadastrar novo"
              type="link"
              href="/lista-animais"
              variant="primary"
            />
          </div>
          <div className="mt-4 overflow-x-auto md:overflow-visible">
            <div className="min-w-full md:min-w-0">
              <div className="mt-4 grid grid-cols-5 rounded-2xl bg-gray-100 p-4 font-bold md:grid">
                <div>Nome</div>
                <div>Idade</div>
                <div>Espécie</div>
                <div>Status</div>
                <div>Ações</div>
              </div>
              <div className="grid gap-2 md:gap-0">
                <div className="grid grid-cols-1 rounded-2xl bg-slate-100 p-4 md:grid-cols-5 md:rounded-none md:border-b md:border-slate-200 md:bg-white">
                  <div>
                    <span className="font-semibold md:hidden">Nome: </span>
                    Carlos
                  </div>
                  <div>
                    <span className="font-semibold md:hidden">Idade: </span>
                    Adulto
                  </div>
                  <div>
                    <span className="font-semibold md:hidden">Espécie: </span>
                    Cão
                  </div>
                  <div>
                    <span className="font-semibold md:hidden">Status: </span>
                    No abrigo
                  </div>
                  <div className="flex gap-2">
                    <a href="#" className="text-blue-600 hover:underline">
                      Editar
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Visualizar
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-1 rounded-2xl bg-slate-100 p-4 md:grid-cols-5 md:rounded-none md:border-b md:border-slate-200 md:bg-white">
                  <div>
                    <span className="font-semibold md:hidden">Nome: </span>
                    Carlos
                  </div>
                  <div>
                    <span className="font-semibold md:hidden">Idade: </span>
                    Adulto
                  </div>
                  <div>
                    <span className="font-semibold md:hidden">Espécie: </span>
                    Cão
                  </div>
                  <div>
                    <span className="font-semibold md:hidden">Status: </span>
                    No abrigo
                  </div>
                  <div className="flex gap-2">
                    <a href="#" className="text-blue-600 hover:underline">
                      Editar
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Visualizar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
