const salmos = [
  {
    referencia: "Salmo 23:1",
    texto: "O Senhor é o meu pastor; nada me faltará."
  },
  {
    referencia: "Salmo 121:1-2",
    texto: "Elevo os meus olhos para os montes: de onde me virá o socorro? O meu socorro vem do Senhor."
  },
  {
    referencia: "Salmo 46:1",
    texto: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia."
  },
  {
    referencia: "Salmo 91:1",
    texto: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará."
  },
  {
    referencia: "Salmo 37:5",
    texto: "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará."
  }
];

const hoje = new Date();
const numeroDoDia = Math.floor(
  (hoje - new Date(hoje.getFullYear(), 0, 0)) / 86400000
);

const salmo = salmos[numeroDoDia % salmos.length];

document.getElementById("referencia").textContent = salmo.referencia;
document.getElementById("texto").textContent = salmo.texto;