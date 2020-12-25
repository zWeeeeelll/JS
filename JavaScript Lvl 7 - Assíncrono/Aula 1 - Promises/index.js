function rand(min, max){
  min *= 100;
  min *= 100;
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject ('BAD VALUE');
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  })
}

esperaAi('Conexão com o BD', rand(1, 2))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1, 2));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Tratando os dados da BASE', rand(1, 2));
  })
  .then(resposta => {
    console.log(resposta);
  }).then(() => {
    console.log('Exibe dados na tela');
  })
  .catch(e => {
    console.log('ERRO:', e)
  });

  console.log('Isso aqui será exibido antes de qualquer promisse.')



