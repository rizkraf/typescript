// tipe data pada balikan function

function getName(): string {
  return "Hello, my name is Rizky";
}

console.log(getName());

function getAge(): number {
  return 19;
}

function printName(): void {
  console.log("print name");
}

printName();

// argument type

function multiply(val1: number, val2: number): number {
  return val1 * val2;
}

const result = multiply(20, 5);
console.log(result);

// function as type

type Tambah = (val1: number, val2: number) => number;

const add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
};

// default parameter

const fullName = (first: string, last: string = "Azhara"): string => {
  return first + " " + last;
};

console.log(fullName("Rizky"));
