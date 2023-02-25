/* Mi array de nombres */
const nombres = ['Jose', 'josue', 'alberto', 'jesus', 'alejandro','Juan', 'Alejandra'];

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i][0] === 'J' || nombres[i][0] === 'j') {
    console.log(`Goodbye ${nombres[i]}`);
  } else {
    console.log(`Hello ${nombres[i]}`);
  }
}

