// Exercise 6: Function Overloads

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
  { type: "user", name: "Wilson", age: 23, occupation: "Ball" },
  { type: "admin", name: "Agent Smith", age: 23, role: "Anti-virus engineer" },
];

// display info based on either admin/user
export function logPerson(person: Person) {
  console.log(
    ` - ${person.name}, ${person.age}, ${person.type === "admin" ? person.role : person.occupation}`,
  );
}

// get object keys with correct types
function getObjectKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

// return users for user criteria
export function filterPersons(
  persons: Person[],
  personType: "user",
  criteria: Partial<Omit<User, "type">>,
): User[];

// return admins for admin criteria
export function filterPersons(
  persons: Person[],
  personType: "admin",
  criteria: Partial<Omit<Admin, "type">>,
): Admin[];

// filter persons based on type and criteria
export function filterPersons(
  persons: Person[],
  personType: Person["type"],
  criteria: Partial<Omit<User, "type">> | Partial<Omit<Admin, "type">>,
): Person[] {
  return persons
    .filter((person) => person.type === personType)
    .filter((person) => {
      // get filter properties
      let criteriaKeys = getObjectKeys(criteria);

      // check matching values
      return criteriaKeys.every((fieldName) => {
        return person[fieldName] === criteria[fieldName];
      });
    });
}

export const usersOfAge23 = filterPersons(persons, "user", { age: 23 });
export const adminsOfAge23 = filterPersons(persons, "admin", { age: 23 });

console.log("Users of age 23:");
usersOfAge23.forEach(logPerson);

console.log();

console.log("Admins of age 23:");
adminsOfAge23.forEach(logPerson);
