// Exercise 1: Basic Typing

// define user structure
export interface User {
  name: string;
  age: number;
  occupation: string;
}

// create array of user objects
export const users: User[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

// display the user's name/age
export function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);
