// Factory function, like a factory create objects

function creatHuman(firstName = "default", secondName = "default", isAlive = false) {
  return {
    firstName,
    secondName,
    isAlive,
    walk() {
      console.log("walking...");
    }
  }
}

const mannuelFerreira = creatHuman("Mannuel", "Ferreira", true);
const max = creatHuman("MAx", "Krohn", true);

const maxIsWalking = max.walk()
console.log(max);
console.log(maxIsWalking);
