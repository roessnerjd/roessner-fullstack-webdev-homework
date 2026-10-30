// Exercise 5: Utility Types

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
  {
    type: "admin",
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    type: "user",
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    type: "admin",
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
  {
    type: "user",
    name: "Wilson",
    age: 23,
    occupation: "Ball",
  },
  {
    type: "admin",
    name: "Agent Smith",
    age: 23,
    role: "Administrator",
  },
];

// check if admin
export const isAdmin = (person: Person): person is Admin =>
  person.type === "admin";

// check if user
export const isUser = (person: Person): person is User =>
  person.type === "user";

// display info based on either admin/user
export function logPerson(person: Person) {
  let additionalInformation = "";

  // if admin
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }

  // if user
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }

  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

// filter users based on optional criteria
export function filterUsers(
  persons: Person[],
  criteria: Partial<Omit<User, "type">>,
): User[] {
  return persons.filter(isUser).filter((user) => {
    // get filter properties
    const criteriaKeys = Object.keys(criteria) as (keyof Omit<User, "type">)[];

    // check if user matches criteria
    return criteriaKeys.every((fieldName) => {
      return user[fieldName] === criteria[fieldName];
    });
  });
}

// display users who are 23
console.log("Users of age 23:");

filterUsers(persons, {
  age: 23,
}).forEach(logPerson);
