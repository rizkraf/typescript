export class User {
  name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  };
}

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }
}

let admin = new Admin("08212345678", "Adam", 25);
admin.getName();
admin.getRole();
admin.setName("Hori");
admin.phone;
