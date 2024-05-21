function randomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  
  const audiencia = {
    4: 0,
    5: 0,
    7: 0,
    12: 0
  };
  
  const num_casas = 100;
  
  for (let i = 0; i < num_casas; i++) {
    let canal = [4, 5, 7, 12][randomNumber(3)];
    let pessoas = randomNumber(10);
    audiencia[canal] += pessoas;
  }
  
  console.log("Audiência dos canais:");
  
  Object.keys(audiencia).forEach(canal => {
    console.log(`Canal ${canal}: ${audiencia[canal]} pessoas assistindo.`);
  });