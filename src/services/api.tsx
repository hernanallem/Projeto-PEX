import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

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

// Interceptador para adicionar headers padrão (ex.: token de autenticação)
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  console.log("Enviando requisição:", config);
  return config;
});

// Interceptador para tratar erros globalmente
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    console.error("Erro na resposta do servidor:", error);
    return Promise.reject(error);
  },
);

// Função auxiliar para tratar erros de forma consistente
function handleError(
  error: AxiosError<ApiErrorResponse>,
  defaultMessage: string,
): never {
  if (error.response) {
    throw new Error(error.response.data?.message || defaultMessage);
  } else if (error.request) {
    throw new Error("Sem resposta do servidor. Verifique sua conexão.");
  } else {
    throw new Error("Erro ao processar a requisição.");
  }
}

// Função de login
export const login = async (credentials: LoginCredentials) => {
  try {
    console.log("Tentando login com credenciais:", credentials);
    const response = await api.post("/api/auth/login", credentials);
    console.log("Login bem-sucedido. Resposta:", response.data);
    return response.data;
  } catch (error) {
    handleError(error as AxiosError<ApiErrorResponse>, "Falha no login");
  }
};

// Função de recuperação de senha
export const recuperarSenha = async (email: string) => {
  try {
    console.log("Tentando recuperar senha para o email:", email);
    const response = await api.post("/api/auth/recuperar-senha", { email });
    console.log("Recuperação de senha bem-sucedida. Resposta:", response.data);
    return response.data;
  } catch (error) {
    handleError(
      error as AxiosError<ApiErrorResponse>,
      "Falha na recuperação de senha",
    );
  }
};

// Função para listar usuários
export const listarUsuarios = async () => {
  try {
    console.log("Listando usuários...");
    const response = await api.get("/api/usuarios/listar");
    console.log("Usuários listados com sucesso. Resposta:", response.data);
    return response.data;
  } catch (error) {
    handleError(
      error as AxiosError<ApiErrorResponse>,
      "Falha ao listar usuários",
    );
  }
};

// Função para buscar usuário por email
export const buscarUsuarioPorEmail = async (email: string) => {
  try {
    console.log("Buscando usuário por email:", email);
    const response = await api.get(`/api/usuarios/buscar/${email}`);
    console.log("Usuário encontrado. Resposta:", response.data);
    return response.data;
  } catch (error) {
    handleError(
      error as AxiosError<ApiErrorResponse>,
      "Falha ao buscar usuário por email",
    );
  }
};

// Função para buscar usuário por ID
export const buscarUsuarioPorId = async (id: string) => {
  try {
    console.log("Buscando usuário por ID:", id);
    const response = await api.get(`/api/usuarios/${id}`);
    console.log("Usuário encontrado. Resposta:", response.data);
    return response.data;
  } catch (error) {
    handleError(
      error as AxiosError<ApiErrorResponse>,
      "Falha ao buscar usuário por ID",
    );
  }
};

// Função para registrar usuário
export const registrarUsuario = async (usuario: Usuario) => {
  try {
    console.log("Registrando novo usuário:", usuario);
    const response = await api.post("/api/usuarios/registrar", usuario);
    console.log("Usuário registrado com sucesso. Resposta:", response.data);
    return response.data;
  } catch (error) {
    handleError(
      error as AxiosError<ApiErrorResponse>,
      "Erro ao registrar usuário.",
    );
  }
};

// Função para deletar usuário
export const deletarUsuario = async (id: string) => {
  try {
    console.log("Deletando usuário com ID:", id);
    const response = await api.delete(`/api/usuarios/deletar/${id}`);
    console.log("Usuário deletado com sucesso. Resposta:", response.data);
    return response.data;
  } catch (error) {
    handleError(
      error as AxiosError<ApiErrorResponse>,
      "Falha ao deletar usuário",
    );
  }
};
