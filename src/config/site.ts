export const siteConfig = {
  name: "Hiven",
  tagline: "Rede social de experiências urbanas",
  description:
    "Descubra experiências reais perto de você, veja recomendações de quem esteve lá e construa seu próprio mapa da cidade.",
  headline: "Descubra o que realmente vale a pena viver na sua cidade.",
  url: "https://hiven.app",
  contact: "hivenapp@gmail.com",
  links: { googlePlay: "#", appStore: "#", apk: "#" },
  stats: [
    { value: "12.4K", label: "Experiências registradas" },
    { value: "8.2K", label: "Avaliações publicadas" },
    { value: "3.1K", label: "Locais descobertos" },
  ],
};

export const problems = [
  {
    title: "Descobrir o que fazer ainda depende de sorte",
    description: "Eventos, exposições e encontros acontecem na cidade, mas você só descobre depois. O feed das redes sociais não mostra o que está perto de você agora.",
  },
  {
    title: "Avaliações sem contexto não ajudam",
    description: "Notas de 1 a 5 sem referência. Você não sabe quem avaliou, se realmente foi ou se o gosto da pessoa combina com o seu.",
  },
  {
    title: "Experiência digital desconectada da real",
    description: "As redes separam o online do presencial. Não há como saber quem já foi a um lugar, o que acharam e se vale a pena ir.",
  },
];

export const steps = [
  { title: "Descubra", description: "Navegue pelo feed ou mapa. Encontre experiências perto de você filtradas por vibe, tipo e formato." },
  { title: "Participe", description: "Confirme presença, veja quem mais vai e receba notificações quando estiver perto de começar." },
  { title: "Compartilhe", description: "Publique avaliações e postagens sobre o que viveu. Fotos, estrelas, comentários — tudo conectado à experiência real." },
  { title: "Construa", description: "A cada experiência vivida, seu perfil ganha credibilidade. A comunidade sabe que você realmente esteve lá." },
];

export const images = {
  jazz: "",
  pasta: "",
  gallery: "",
  trail: "",
  rooftop: "",
  cafe: "",
  avatar1: "",
  avatar2: "",
  avatar3: "",
};

export const categoryGradients: Record<string, string> = {
  "#7B2CBF": "linear-gradient(135deg, #3D2066, #2A1547)",
  "#F97316": "linear-gradient(135deg, #5C3A1E, #3D2713)",
  "#BE123C": "linear-gradient(135deg, #4A1525, #330E1A)",
  "#22C55E": "linear-gradient(135deg, #1A3D2A, #122B1E)",
  "#581C87": "linear-gradient(135deg, #351A5C, #240F42)",
};

export const avatarColors = ["#3D2066", "#5C3A1E", "#4A1525", "#1A3D2A", "#351A5C"];

export const experiences = [
  {
    id: "1", title: "Roda de Samba da Praça Sete", category: "Música", categoryColor: "#7B2CBF",
    place: "Centro", distance: "1.2 km", attending: 47, time: "Hoje, 19h",
    image: images.jazz,
  },
  {
    id: "2", title: "Workshop de Massa Fresca", category: "Gastronomia", categoryColor: "#F97316",
    place: "Savassi", distance: "3.4 km", attending: 22, time: "Amanhã, 10h",
    image: images.pasta,
  },
  {
    id: "3", title: "Mostra Ocupação 44", category: "Arte", categoryColor: "#BE123C",
    place: "Funcionários", distance: "2.1 km", attending: 63, time: "Sáb, 16h",
    image: images.gallery,
  },
];

export const posts = [
  {
    id: "p1", name: "Lucas", username: "@lucas", avatar: images.avatar1,
    time: "há 2h", via: "Roda de Samba da Praça Sete", place: "Centro", rating: 5,
    text: "Roda de samba de praça, sem palco, sem cenografia. Só gente, cerveja gelada e aquele samba que nasce do nada. Fui sem expectativa e voltei no domingo.",
    likes: 31, comments: 9,
  },
  {
    id: "p2", name: "Ana", username: "@anacosta", avatar: images.avatar2,
    time: "há 5h", via: "Mostra Ocupação 44", place: "Funcionários", rating: 4,
    text: "Ocupação de artistas independentes num prédio abandonado. Instalações, pintura, som experimental. Cada andar era um universo diferente.",
    likes: 58, comments: 14,
  },
  {
    id: "p3", name: "Pedro", username: "@pedro", avatar: images.avatar3,
    time: "há 1d", via: "Workshop de Massa Fresca", place: "Savassi", rating: 5,
    text: "Aprender a fazer massa do zero com um chef italiano que mora aqui há 10 anos. No final a gente comeu tudo que fez. Simplesmente perfeito.",
    likes: 22, comments: 6,
  },
];
