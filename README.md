# Rock Paper Scissors

A console-based Rock Paper Scissors game built with vanilla JavaScript as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

---

## About

This project is one of the first JavaScript projects in The Odin Project's Foundations course. The player competes against a computer opponent over 5 rounds. All input and output is handled through the browser console using `prompt()` and `console.log()`.

---

## How to Play

1. Clone or download the repo and open `index.html` in your browser
2. Open the browser console (F12 → Console)
3. When prompted, type `rock`, `paper`, or `scissors`
4. The computer randomly selects its choice
5. The round result and running score are logged to the console
6. The game runs for 5 rounds

---

## What I Learned

### Function Scope

Defining `playRound` inside `playGame` reinforced how scope works in JavaScript — inner functions have access to the outer function's context, but must be defined before they are called since arrow functions are not hoisted.

### Loops

Building the `playGame` function taught me how a `for` loop repeats an action a fixed number of times and how each iteration can collect fresh data independently.

### Debugging

A few bugs I caught and fixed along the way:

- Using `return` inside a loop exits the entire function on the first iteration
- Leaving an old standalone `playRound()` call in the code after refactoring caused a 6th unintended round to run
- Storing user input in a variable before the loop meant the same choice was reused every round — moving `getHumanChoice()` inside the loop fixed this

### Separation of Concerns

I practiced splitting logic into focused functions — `playRound` handles a single round, `playGame` drives the overall flow. This made the code easier to read and debug.

---

## Built With

- HTML
- CSS
- JavaScript (vanilla)

---

## Acknowledgements

- [The Odin Project](https://www.theodinproject.com/) — for the project prompt and curriculum

---

## Author

**Tyrone Henderson (Tahj)**
