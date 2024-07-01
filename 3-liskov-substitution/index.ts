// ! Wrong Example
class Note {
  public constructor(id) {
    // ...
  }

  public save(text): void {
    // save process
  }
}

class ReadonlyNote extends Note {
  public save(text): void {
    throw new Error("Can't update readonly notes");
  }
}

// let note = new Note(429);
// note.save("Let's do this!");

// ? But here ReadonlyNote class overrides save method and changes the return type of save method
let note = new ReadonlyNote(429);
note.save("Let's do this!");

// * Currect Example
class A {
  sayHelloA() {
    return "A";
  }
}

class B extends A {
  sayHelloB() {
    return "B";
  }
}

// ? We can replace A class with B class easy

// const sayHello = new A();
const sayHello = new B();

sayHello.sayHelloA();
