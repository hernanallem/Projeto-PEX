interface Animal {
  nome: string;
  tipo: string;
  idade: string;
  data: string;
}

interface ClinicalExpense {
  valor: number;
  descricao: string;
}

export const lastRegisterAnimals: Animal[] = [
  {
    nome: "Tobias",
    tipo: "Gato",
    idade: "Adulto",
    data: "11/04/2024",
  },
  {
    nome: "Pirulito",
    tipo: "Cachorro",
    idade: "Filhote",
    data: "11/04/2024",
  },
  {
    nome: "Madonna",
    tipo: "Cachorro",
    idade: "Filhote",
    data: "11/04/2024",
  },
  {
    nome: "César",
    tipo: "Cachorro",
    idade: "Adulto",
    data: "11/04/2024",
  },
  {
    nome: "Kiara",
    tipo: "Gato",
    idade: "Adulto",
    data: "11/04/2024",
  },
  {
    nome: "Pretinho",
    tipo: "Cachorro",
    idade: "Adulto",
    data: "11/04/2024",
  },
];

export const lastClinicalExpenses: ClinicalExpense[] = [
  {
    valor: 987,
    descricao: "Cirurgia da pata do Tobi",
  },
  {
    valor: 1987,
    descricao: "Castração de 12 cachorros",
  },
  {
    valor: 297,
    descricao: "Medicamento",
  },
  {
    valor: 987,
    descricao: "Cirurgia da pata do Tobi",
  },
  {
    valor: 1987,
    descricao: "Castação de 12 cachorros",
  },
  {
    valor: 297,
    descricao: "Medicamento",
  },
];
