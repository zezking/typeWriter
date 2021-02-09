const typeWriter = (str) => {
  if (str.length > 1) {
    setTimeout(() => {
      process.stdout.write(str[0]);
      str = str.substring(1);
      typeWriter(str);
    }, 50);
  } else {
    process.stdout.write(str[0] + "\n");
  }
};
typeWriter("hello there from lighthouasdfasdfasdfse labs!");
