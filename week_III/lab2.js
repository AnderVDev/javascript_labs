let y = ["john", "james", " David"];
console.log("welcome");
for (let i = 0; i < y.length; i++) {
  console.log(y[i]);
  let z = y[i];
  let index = z.indexOf("o");
  console.log(index);
}

let data = [
  "Beijing Capital International, https://goo.gl/maps/iPe5fAqzq8C2 PEK",

  "John F Kennedy International, https://goo.gl/maps/JWwABmA3MBS2 JFK",

  "Lester B. Pearson International, https://goo.gl/maps/Ypu1dJLsnQu YYZ",

  "London Heathrow, https://goo.gl/maps/TFx8SrATdYr LHR",

  "Tokyo Haneda International, https://goo.gl/maps/5UxH2TxbRtT2 HND",
];

data.forEach((entry) => {
  let index = entry.indexOf(",");
  let FullName = entry.substring(0, index);
  let url = entry.substring(index+2, entry.lastIndexOf(" "))
  let code = entry.substring(entry.lastIndexOf(" ")+1);
  console.log(index);
  console.log(FullName);
  console.log(url);
  console.log(code);
});
