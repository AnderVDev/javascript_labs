let data = ["Oracle-corporation", "microsoft-access", "web-Designing"];
let total = 0;
for (let i = 0; i < data.length; i++) {
  let index = data[i].indexOf("-");
  let subString = data[i].substring(0, 3);
  let count = 0;
  total += data[i].length;
  console.log(index);
  console.log(subString);
  console.log(count);
}
console.log(total);
console.log(total / data.length)
