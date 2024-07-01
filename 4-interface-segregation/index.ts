// ! Wrong Example
// interface Animal {
//   fly(): void;
//   run(): void;
//   eat(): void;
// }

// class Dolphin implements Animal {
//   public fly() {
//     return false;
//   }

//   public run() {
//     // Run
//   }

//   public eat() {
//     // Eat
//   }
// }

// * Currect Example
interface Animal {
  run(): void;
  eat(): void;
}

interface FlyableAnimal {
  fly(): void;
}

class Dolphin implements Animal {
  public run() {
    // Run
  }

  public eat() {
    // Eat
  }
}

class Bird implements Animal, FlyableAnimal {
  public run() {
    /* ... */
  }
  public eat() {
    /* ... */
  }
  public fly() {
    /* ... */
  }
}
