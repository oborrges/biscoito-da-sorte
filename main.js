
function createPhrases() {
  const luckyPhrases = [
    "Acredite em si mesmo e tudo será possível.",
    "A sorte favorece os audazes.",
    "O sucesso está a um passo da sua zona de conforto.",
    "A persistência é o caminho do êxito.",
    "Você é mais forte do que imagina.",
    "A cada novo dia, novas oportunidades surgem.",
    "A vida é feita de desafios, supere-os!",
    "Sorria, a felicidade fica mais bonita assim.",
    "Tudo o que você precisa está dentro de você.",
    "A gratidão transforma o que temos em suficiente.",
    "Faça hoje o que os outros não querem, faça amanhã o que os outros não podem.",
    "A paciência é a chave para resolver muitos problemas.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "A imaginação é mais importante do que o conhecimento.",
    "Nunca é tarde demais para ser o que você poderia ter sido.",
    "Só se vê bem com o coração, o essencial é invisível aos olhos.",
    "O que somos é o que fazemos repetidamente. A excelência, portanto, não é um ato, mas um hábito.",
    "A simplicidade é a sofisticação final.",
    "O sucesso não é final, o fracasso não é fatal: o que importa é a coragem de continuar.",
    "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.",
    "Não espere por circunstâncias ideais. Tome decisões e crie suas próprias circunstâncias.",
    "A vida é uma aventura ousada ou é nada.",
    "O segredo da felicidade é liberdade, o segredo da liberdade é coragem.",
    "O único modo de fazer um excelente trabalho é amar o que você faz.",
    "Não espere pelo momento perfeito, pegue o momento e torne-o perfeito.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "A sorte bate à porta de quem trabalha duro.",
    "Você não pode mudar o vento, mas pode ajustar as velas do barco.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Cada novo dia é uma nova oportunidade para melhorar.",
    "A verdadeira sorte é criar suas próprias oportunidades.",
  ]
  
  console.log(luckyPhrases);
  

  const randomPhraseIndex = Math.floor(Math.random() * luckyPhrases.length)

  return luckyPhrases[randomPhraseIndex]
}

const luckyPhraseElement = document.querySelector(".luckybox")

const randomPhrase = createPhrases()

luckyPhraseElement.innerHTML = randomPhrase

console.log(randomPhrase)
