import Image from "next/image";
import CatIcon from "../assets/icon-cat.svg";
import DogIcon from "../assets/logo-petx.svg";
import TextField from "../components/TextField";

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="flex h-full w-full justify-center bg-indigo-50 p-8 sm:w-full lg:w-3/4">
        <div className="flex w-full flex-col items-center justify-center gap-4 rounded-2xl bg-white lg:w-3/4">
          <Image src={DogIcon} className="max-w-44" alt="" />

          <h1 className="text-xl">Faça o login</h1>
          <form action="" className="flex flex-col gap-8">
            <TextField placeholder="Digite Seu Email" type="email" />
            <TextField placeholder="Digite Sua Senha" type="password" />
            <button
              type="submit"
              className="txt-xs d-flex itens-center min-h-9 w-full gap-2.5 rounded-2xl bg-indigo-600 px-6 py-3 text-base font-medium text-white outline outline-1 outline-indigo-500 hover:bg-indigo-700 focus:outline-indigo-700"
            >
              <i className="ph ph-sign-in"></i>
              <span>Entrar</span>
            </button>
          </form>
          <a href="#" className="text-xs text-slate-500 underline">
            Esqueceu a senha?
          </a>
        </div>
      </div>
      <div className="hidden rounded-2xl sm:w-full md:w-2/4 lg:flex lg:w-full lg:items-center lg:justify-center">
        <Image src={CatIcon} alt="" />
      </div>
    </div>
  );
}
