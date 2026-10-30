// Exercise 3: Type Narrowing

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

// display info based on either admin/user
export function logPerson(person: Person) {
  let additionalInformation: string;

  // if admin
  if ("role" in person) {
    additionalInformation = person.role;
  } else {
    // if other
    additionalInformation = person.occupation;
  }

  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
