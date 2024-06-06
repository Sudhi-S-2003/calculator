function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function display_data(data) {
  let op = ["+", "x", "-", "*", "/", "%", "."];
  let lastChar = result.value.slice(-1);
  if (isNumber(data) || op.includes(data)) {
    if (op.includes(lastChar) && op.includes(data)) {
      if (data == "*" || data == "x") {
        result.value = result.value.slice(0, -1) + 'x';
      } else {
        result.value = result.value.slice(0, -1) + data;
      }
    } else {
      if (result.value.length === 0) {
        let op2 = ["*", "x", "/", "%"];
        if (!op2.includes(data)) {
          result.value = data;
        }
      } else {
        if (data == "*" || data == "x") {
          result.value += "x";
        } else {
          result.value += data;
        }
      }
    }
  }
}

function Allclear() {
  result.value = "";
}

function equal() {
  if (result.value ) {
    try {
      let ev=result.value;
      if (ev.includes('x')){
        ev = ev.replace('x', '*');
      }
      result.value= eval(ev);
    } catch (e) {
      result.value = "Error";
    }
  }
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

document.addEventListener("keydown", function (event) {
  // console.log(event.key)
  if (event.key === "Backspace") {
    backspace();
  } else if (event.key === "Enter") {
    equal();
  } else if (event.key === "A" || event.key === "a" ) {
Allclear();
  }

  else {
    keypress(event.key);
  }
});

function keypress(key) {
  // display_data(key);
  switch (key) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
    case ".":
      display_data(key);
      break;
  }
}
