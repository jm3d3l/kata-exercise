import "./styles.css";

function spinWord(str) {
  let word = [];

  for (let i of str.split(" ")) {
    i.length >= 5
      ? word.push(
          i
            .split("")
            .reverse()
            .join("")
        )
      : word.push(i);
  }

  return word.join(" ");
}

spinWord("john medel pogi");
