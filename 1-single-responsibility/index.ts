interface User {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

// ! WrongExample
// class User {
//   public information() {}
//   public sendEmail() {}
//   public orders() {}
// }

// * Currect Example
class User {
  public information() {}
}

class Email {
  public send(user: User) {}
}

class Order {
  public show(user: User) {}
}
