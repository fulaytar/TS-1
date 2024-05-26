/* const name: string = "Ivan";
const lastName: string = "Ivanov";
const age: number = 25;
const isHappy: boolean = true;
const budget: null = null;
const status: undefined = undefined; */

/* type userProfile = {
  userName: string;
  age: number;
  isActive: boolean;
};

const user = {
  userName: "Bob",
  age: 20,
  isActive: true,
};

function displayUserProfile(user: userProfile) {
  return `User name is ${user.userName} his is ${user.age} years old and his is ${user.isActive}`;
}

console.log(displayUserProfile(user));

function logName(name: string) {
  return `${name}`;
}
console.log(logName("Ivanko"));
 */

/* number[]  -- масив чисел */

/* type User = {
  name: string;
  age: number;
};

function calcTotal(arr: User[]) {
  return arr.forEach((item) =>
    console.log(`Hello ${item.name} , your age is ${item.age}`)
  );
}

const users = [
  {
    name: "bob",
    age: 12,
  },
  { name: "bob", age: 14 },
  { name: "bob", age: 16 },
];

calcTotal(users);
 */

//unknown

/* function safelyParseJson(jsonString: string) {
  try {
    const result: unknown = JSON.parse(jsonString);
    if (typeof result === "object" && result !== null) {
      return result;
    }
  } catch (error) {
    console.error("failded to parse Json", error);
  }
  return null;
} */

//any

/* function logDetails(value: any) {
  console.log(`Value: ${value}, type of value:${typeof value}`);
} */

//enum (словник)

/* enum VehicleType {
  Car = "Car",
  Truck = "Truck",
  Motorcycle = "Motorcycle",
}

function getVehicleType(vehicke: VehicleType) {
  return `The vehicle type is: ${vehicke}`;
}


console.log(getVehicleType(VehicleType.Motorcycle)); */
//example

//Union types (універсальні тип даних )

/* let sum: number | string = "String";
sum = 24; */

//Literal
/* function lightSower(color: "green" | "yellow" | "red") {
  if (color === "green") {
    console.log("GO!");
  } else if (color === "yellow") {
    console.log("You are ready?");
  } else if (color === "red") {
    console.log("Stop!");
  }
}
lightSower("green"); */

//never  --коли помилка

/* function errorHandler(message: string): never{
    throw new Error(message);
} */
