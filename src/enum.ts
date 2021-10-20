enum Color {
  Red = "red",
  Green = "green",
  Yellow = "yellow"
}

enum Status {
  Ready,
  Waiting
}
enum Color2 {
  Red,
  Blue,
  Green
}

let status = Status.Ready;
let color = Color2.Red;
status = 1000;

status = color; // Error

console.log(Color.Red);
export {}
