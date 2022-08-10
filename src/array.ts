// array
let array: number[];
array = [1, 2, 3];

let array2: string[];
array2 = ["satu", "dua", "tiga"];

let array3: any[];
array3 = [1, "dua", true, {}];

// array tuple
let biodata: [string, number];
biodata = ["Bandung", 123]; // ok
biodata = ["Jakarta", true]; // error
biodata = ["Cimahi", 212, false]; // error
