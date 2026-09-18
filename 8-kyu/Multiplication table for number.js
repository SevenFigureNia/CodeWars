 function multiTable(number) {
  let table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${i} * ${number} = ${i * number}`);
  }
  return table.join('\n');
}