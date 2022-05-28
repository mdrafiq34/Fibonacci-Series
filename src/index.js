import "./styles.css";

// using for loop

let f1 = 0,
  f2 = 1,
  next_fibo,
  i;
let fibo_num = parseInt(prompt(" Enter the limit for Fibonacci Series "));
document.write("Fibonacci Series: ");
for (i = 1; i <= fibo_num; i++) {
  document.write(" <br> " + f1); // print the f1
  next_fibo = f1 + f2; // fibo_num of f1 and f2 into the next_fibo

  f1 = f2; // assign the f2 value into f2
  f2 = next_fibo; // assign the next_fibo into f2
}
