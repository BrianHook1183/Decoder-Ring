function toUnicode(array) {
  return array.map((character) => {
    const unicode = character.toLowerCase().charCodeAt();
    if (unicode >= 97 && unicode <= 122) {
      return unicode;
    } else {
      return character;
    }
  });
}

module.exports = { toUnicode };
