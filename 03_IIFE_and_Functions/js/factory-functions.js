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

// class is actually only a syntax sugar over a constructor method.

const mannuelFerreira = creatHuman("Mannuel", "Ferreira", true);
const max = creatHuman("MAx", "Krohn", true);

const maxIsWalking = max.walk()
console.log(max);
console.log(maxIsWalking);
