function main(str) {
  const input = str.trim().split(" ");
  let screen = 0;
  let selectAll = false;
  let clipboard = 0;
  // 输入为一行，为简化解析，用数字1 2 3 4 5代表a，ctrl-c，ctrl-x，ctrl-v，ctrl-a五个键的输入，数字用空格分隔。
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "1": {
        if (selectAll) {
          selectAll = false;
          screen = 1;
        } else {
          screen++;
        }
        break;
      }
      case "2": {
        if (selectAll) {
          clipboard = screen;
        } else {
          clipboard = 0;
        }
        break;
      }
      case "3": {
        if (selectAll) {
          clipboard = screen;
          screen = 0;
          selectAll = false;
        } else {
          clipboard = 0;
        }
        break;
      }
      case "4": {
        if (selectAll) {
          screen = clipboard;
          selectAll = false;
        } else {
          screen += clipboard;
        }
        break;
      }
      case "5": {
        selectAll = true;
        break;
      }
    }
  }
  return screen;
}

console.log(main("1 1 5 1 5 2 4 4"));
