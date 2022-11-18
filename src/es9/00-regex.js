const regexData = /(\d{4})-(\d{2})-(\d{2})/;
const match = regexData.exec('2022-01-01');
console.table(match);