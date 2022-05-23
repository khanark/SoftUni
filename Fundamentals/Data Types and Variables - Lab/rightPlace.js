function compare(strMissing, char, strCompare) {
  let str = strMissing.replace("_", char);
  console.log(str === strCompare ? "Matched" : "Not matched");
}
compare('Str_ng', 'i', 'String');
