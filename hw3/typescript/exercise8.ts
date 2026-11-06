// Exercise 8: Intersection Types

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

// combine user and admin properties, with a new type
type PowerUser = Omit<User, "type"> &
  Omit<Admin, "type"> & {
    type: "powerUser";
  };

export type Person = User | Admin | PowerUser;

// create array of users/admins/power users
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
  {
    type: "powerUser",
    name: "Nikki Stone",
    age: 45,
    role: "Moderator",
    occupation: "Cat groomer",
  },
];

// check if admin
function isAdmin(person: Person): person is Admin {
  return person.type === "admin";
}

// check if user
function isUser(person: Person): person is User {
  return person.type === "user";
}

// check if power user
function isPowerUser(person: Person): person is PowerUser {
  return person.type === "powerUser";
}

// display info based on person type
export function logPerson(person: Person) {
  let additionalInformation: string = "";

  // if admin
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }

  // if user
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }

  // if power user
  if (isPowerUser(person)) {
    additionalInformation = `${person.role}, ${person.occupation}`;
  }

  console.log(`${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log("Admins:");
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log("Users:");
persons.filter(isUser).forEach(logPerson);

console.log();

console.log("Power users:");
persons.filter(isPowerUser).forEach(logPerson);
