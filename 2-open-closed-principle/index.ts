// ! Wrong Example
type Languages = "pr" | "en" | "fr" | "de";

interface LanguageClass {
  sayHello(): string;
}

// class Hello {
//   public say(lang: Languages) {
//     if (lang == "pr") {
//       return "درود";
//     } else if (lang == "en") {
//       return "Hi";
//     } else if (lang == "fr") {
//       return "Bonjour";
//     } else if (lang == "de") {
//       return "Hallo";
//     }
//   }
// }

// let obj = new Hello();
// console.log(obj.say("de"));

// * Currect Example
class Persian {
  public sayHello() {
    return "درود";
  }
}

class French {
  public sayHello() {
    return "Bonjour";
  }
}

class Hello {
  public say(lang: LanguageClass) {
    return lang.sayHello();
  }
}

const myHello = new Hello();
myHello.say(new Persian());
