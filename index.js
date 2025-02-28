class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let finalString = [];
    const nonCapitalizedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let splitString = string.split(" ");
    for (let i = 0; i < splitString.length; i++) {
      if (i === 0) {
        finalString.push(splitString[i][0].toUpperCase() + splitString[i].slice(1));
      }
      else if (nonCapitalizedWords.includes(splitString[i])){
        finalString.push(splitString[i]);
      }
      else {
        finalString.push(splitString[i][0].toUpperCase() + splitString[i].slice(1));
      }
    }
    return finalString.join(" ");
  }
}
