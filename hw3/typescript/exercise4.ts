// Exercise 4: Type Guards

// define user structure
interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

// define admin structure
interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

// create array of users/admins
export const persons: Person[] = [
  {
    type: "user",
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
  { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
  { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
];

// update type to admin if admin
export function isAdmin(person: Person): person is Admin {
  return person.type === "admin";
}

// update type to user if user
export function isUser(person: Person): person is User {
  return person.type === "user";
}

// display info based on type
export function logPerson(person: Person) {
  let additionalInformation: string = "";

  if (isAdmin(person)) {
    additionalInformation = person.role;
  }

  if (isUser(person)) {
    additionalInformation = person.occupation;
  }

  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log("Admins:");
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log("Users:");
persons.filter(isUser).forEach(logPerson);
