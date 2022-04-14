//for
//aqui imprime de 0 a 9
for (let i = 0; i < 10; i++) {
   console.log(i);
}

//aqui começa de de 1 a 9
//para ir até o 10 basta colocar e <= 10;
for (let e = 1; e < 10; e++) {
   console.log(e);
}

//aqui é de 100 a zero decrecente
for (let a = 100; a > 0; a--) {
  console.log(a);
}

//aqui para a aplicação quando chegar no número 5
for (let b = 0; b < 10; b++) {
  if (b === 5) {
    break;
  }
  console.log(b);
}
//aqui continua, mais pula o 5
for (let c = 0; c < 10; c++) {
  if (c === 5) {
    continue;
  }
  console.log(c);
}
