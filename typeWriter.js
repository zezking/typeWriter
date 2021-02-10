const typeWriter = (str) => {
  // if (str.length > 1) {
  //   setTimeout(() => {
  //     process.stdout.write(str[0]);
  //     str = str.substring(1);
  //     typeWriter(str);
  //   }, 50);
  // } else {
  //   process.stdout.write(str[0] + "\n");
  // }
  let timer = 0;
  for (let i = 0; i < str.length; i++) {
    setTimeout(() => {
      process.stdout.write(str[i]);
      if (i === str.length - 1) {
        process.stdout.write(`\n`);
      }
    }, (timer += 50));
  }
};

typeWriter("hello there from labs!");
