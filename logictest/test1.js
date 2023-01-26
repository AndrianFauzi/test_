let words = "beever";

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut :
// b
// be
// bee
// beev
// beeve
// beever

let temp = "";
for (let i = 0; i < words.length; i++) {
  temp += words[i];
  console.log(temp);
}
