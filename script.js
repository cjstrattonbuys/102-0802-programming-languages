var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];
console.log(programmingLanguages);

for (var lang of programmingLanguages) {
  console.log(`I want to learn ${lang}!`);
}

programmingLanguages.forEach(function (lang, index) {
  console.log(`${index + 1}. ${lang.toUpperCase()}`);
});

var updatedLanguages = programmingLanguages.filter(function (lang) {
  return lang.includes("y");
});
console.log(updatedLanguages);
