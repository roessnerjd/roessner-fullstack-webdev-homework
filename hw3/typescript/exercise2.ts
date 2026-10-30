// Exercise 2: Union Types

// define user structure
interface User {
  name: string;
  age: number;
  occupation: string;
}

// define admin structure
interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

// create array of users/admins
export const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

// display each person
export function logPerson(person: Person) {
  console.log(` - ${person.name}, ${person.age}`);
}

persons.forEach(logPerson);
