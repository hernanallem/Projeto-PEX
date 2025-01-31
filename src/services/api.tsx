import axios, { AxiosError } from "axios";

// Interface para o formato de erro retornado pelo backend
interface ApiErrorResponse {
  message?: string; // A mensagem de erro pode ou não estar presente
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface Usuario {
  email: string;
  password: string;
}

// baseURL apontando para o domínio principal da API
const api = axios.create({
  baseURL: "https://petx-v4.onrender.com", // URL Principal da API
});

export const login = async (credentials: LoginCredentials) => {
  try {
    const response = await api.post("/api/auth/login", credentials);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiErrorResponse>; // Tipagem do erro
    throw new Error(axiosError.response?.data?.message || "Falha no login");
  }
};

export const recuperarSenha = async (email: string) => {
  try {
    const response = await api.post("/api/auth/recuperar-senha", { email });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiErrorResponse>; // Tipagem do erro
    throw new Error(
      axiosError.response?.data?.message || "Falha na recuperação de senha",
    );
  }
};

export const listarUsuarios = async () => {
  try {
    const response = await api.get("/api/usuarios/listar");
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiErrorResponse>; // Tipagem do erro
    throw new Error(
      axiosError.response?.data?.message || "Falha ao listar usuários",
    );
  }
};

export const buscarUsuarioPorEmail = async (email: string) => {
  try {
    const response = await api.get(`/api/usuarios/buscar/${email}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiErrorResponse>; // Tipagem do erro
    throw new Error(
      axiosError.response?.data?.message || "Falha ao buscar usuário por email",
    );
  }
};

export const buscarUsuarioPorId = async (id: string) => {
  try {
    const response = await api.get(`/api/usuarios/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiErrorResponse>; // Tipagem do erro
    throw new Error(
      axiosError.response?.data?.message || "Falha ao buscar usuário por ID",
    );
  }
};

export const registrarUsuario = async (usuario: Usuario) => {
  try {
    console.log("Enviando dados para o backend:", usuario);
    const response = await api.post("/api/usuarios/registrar", usuario);
    console.log("Resposta do backend:", response.data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiErrorResponse>; // Tipagem do erro
    console.error("Erro na requisição:", axiosError);
    if (axiosError.response) {
      throw new Error(
        axiosError.response.data?.message || "Erro ao registrar usuário.",
      );
    } else if (axiosError.request) {
      throw new Error("Sem resposta do servidor. Verifique sua conexão.");
    } else {
      throw new Error("Erro ao processar a requisição.");
    }
  }
};

export const deletarUsuario = async (id: string) => {
  try {
    const response = await api.delete(`/api/usuarios/deletar/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiErrorResponse>; // Tipagem do erro
    throw new Error(
      axiosError.response?.data?.message || "Falha ao deletar usuário",
    );
  }
};
