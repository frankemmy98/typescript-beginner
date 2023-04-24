"use strict";
// function printName(name: string) {
//     console.log(name)
// }
// printName('abcd')
// number Vs Number
// let value = 1000 // primitive type
// let otherValue = new Number(1000) // Number object
// console.log(otherValue)
// let price3: number | undefined | null
// console.log(price3)
// console.log(price3 == null)
// console.log(price3 === null) 
// console.log(price3 == undefined)
// console.log(price3 === undefined)
// enum 
// numeric enum
// enum Weekdays {
//     monday = 1,
//     tuesday,
//     wednesday,
//     thursday,
//     friday,
//     saturday,
//     sunday
// }
// string enum
// enum Weekdays {
//     monday = "mon",
//     tuesday = "tue",
//     wednesday = "wed",
//     thursday = "thur",
//     friday = "fri",
//     saturday = "sat",
//     sunday = "sun"
// }
// computed enum
// enum Weekdays {
//     monday = 1,
//     tuesday,
//     wednesday,
//     thursday,
//     friday,
//     saturday,
//     sunday = Weekdays.monday - 1
// }
// console.log(Weekdays)
// object type
// type Fruit = {
//     name: string,
//     taste: string,
//     color: string,
//     allSeason: boolean
// }
// let fruit1:Fruit = {
//     name: 'Mango',
//     taste: 'Sweet',
//     color: 'Yellow',
//     allSeason: false
// }
// let fruit2:Fruit = {
//     name: 'Mango',
//     taste: 'Sweet',
//     color: 'Yellow',
//     allSeason: false
// }
// Array and Tuple type
// Array
// let fruits: string[]
// fruits = ['mango', 'orange', 'apple'] 
// its not a fixed length
// it doesnt care about the sequence
// Tuple
// let person: [string, string, number] 
// person = ['Emma', 'codewithemmy', 123456]
// let color: [number, number, number]
// color= [244, 255, 0]
// React hooks
// const [state, setState(function)] = useState()
// Union Type
// function printId(id: number | string) {
//     if (typeof id === 'string') {
//         console.log(id.toUpperCase())
//     }
//     else console.log(id)
// }
// printId('hello')
// Type Alias & Interface 
// Type Alias
// it is restricted, we cant extend the type
// type Fruit = {
//     name: string,
//     taste: string,
//     color: string,
//     allSeason: boolean
// }
// type Mango = Fruit & {
//     price: number
// }
// let fruit1:Fruit = {
//     name: 'Mango',
//     taste: 'Sweet',
//     color: 'Yellow',
//     allSeason: false
// }
// let fruit2:Fruit = {
//     name: 'Mango',
//     taste: 'Sweet',
//     color: 'Yellow',
//     allSeason: false
// }
// Interface
// we can extend the interface
// interface Fruit {
//     name: string,
//     taste: string,
//     color: string,
//     allSeason: boolean
// }
// interface Fruit {
// price: number
// }
// this mango interface is now inheriting all
// the Fruit properties plus the new properties
// interface Mango extends Fruit {
//     price: number
// }
// let fruit1:Fruit = {
//     name: 'Mango',
//     taste: 'Sweet',
//     color: 'Yellow',
//     allSeason: false
// }
// let fruit2:Fruit = {
//     name: 'Mango',
//     taste: 'Sweet',
//     color: 'Yellow',
//     allSeason: false
// }
// Optional properties & Non-null Assertion
// Optional properties
// type Fruit = {
//     name: string,
//     taste: string,
//     color: string,
//     allSeason: boolean
//     price?: number
// }
// let fruit1:Fruit = {
//     name: 'Mango',
//     taste: 'Sweet',
//     color: 'Yellow',
//     allSeason: false,
//     price: 10
// }
// console.log(fruit1.price)
// let fruit2:Fruit = {
//     name: 'Mango',
//     taste: 'Sweet',
//     color: 'Yellow',
//     allSeason: false
// }
// function getPrice(price: number) {
//     return price + 10
// }
// function getPrice(price: number, discount?: number) {
//     if (discount) 
//     return price + discount!
// }
// ! is telling typeScript that this is not going to be
// undefined, it's always going to have the value inside it
// escaping the undefined part and pass the numeric part.
// console.log(getPrice(fruit1.price!))
// // Non-null Assertion
// console.log(getPrice(fruit2.price!))
// Class with Types
// class Coordinate {
//     x: number = 2
//     y: number = 4
// }
// const point = new Coordinate
// console.log(point.x)
// class Coordinate {
//     x: number
//     y: number
//     constructor(x: number, y: number) {
//         this.x = x
//         this.y = y
//     }
// }
// const point = new Coordinate(4, 5)
// console.log(point.x)
// Access Modifier
// class Coordinate {
//     // to define the visibilty property
//     // property 'x' is protected and only accessible
//     // within class 'Coordinate' and it's sub-classes
//     protected x: number
//     protected y: number
//     constructor(x: number, y: number) {
//         this.x = x
//         this.y = y
//     }
//     // we can simply create a method
//     // public getX() {
//     //     return this.x
//     // }
//     // the difference between protected and private is 
//     // that private variables are only accessible 
//     // inside the class 'Coordinate' 
//     private abcd() {
//     }
// }
// class MyCoordinate extends Coordinate {
//     public getX() {
//         return this.x
//     }
//     public setX(value: number) {
//         this.x = value
//     }
// }
// // const point = new Coordinate(4, 5)
// const point = new MyCoordinate(4, 5)
// point.setX(55)
// console.log(point.getX)
// getters and setters method
// class Coordinate {
//     // to define the visibilty property
//     // property 'x' is protected and only accessible
//     // within class 'Coordinate' and it's sub-classes
//     protected x: number
//     protected y: number
//     constructor(x: number, y: number) {
//         this.x = x
//         this.y = y
//     }
//     // we can simply create a method
//     // public getX() {
//     //     return this.x
//     // }
//     // the difference between protected and private is 
//     // that private variables are only accessible 
//     // inside the class 'Coordinate' 
//     private abcd() {
//     }
// }
// class MyCoordinate extends Coordinate {
//     get X() {
//         return this.x
//     }
//     set X(value: number) {
//         this.x = value
//     }
// }
// // const point = new Coordinate(4, 5)
// const point = new MyCoordinate(4, 5)
// point.X = 55
// console.log(point.X)
// Readonly vs Static
// class Fruit {
//     readonly price: number;
//     protected static count: number = 0
//     constructor(price: number) {
//         // this. is going to give you the instance
//         this.price = price 
//         // we are refering to the class itself not the 
//         // instance
//         Fruit.count++
//     }
//     static getCount() {
//         return Fruit.count
//     }
// }
// // mango is an instance of fruit class
// const mango = new Fruit(20)
// console.log(mango.price)
// const apple = new Fruit(23)
// console.log(Fruit.getCount)
// Interface 
// interface Fruit {
//     name: string,
//     readonly price: number,
//     color?: string
// }
// function getFruit(fruit: Fruit) {
//     return `${fruit.name} is having a price value of $${fruit.price}`
// }
// let mango: Fruit = {name: 'mango', price: 20}
// mango.price = 5
// console.log(getFruit(mango))
// // you can only implement the inteface not the type
// // once you implement this Fruit, you are forced to
// // MyFruit class with these properties
// class MyFruit implements Fruit {
//     name: string
//     price: number
//     constructor(name: string, price: number) {
//         this.name = name
//         this.price = price
//     }
// }
// Generics
// they are real power for typescript
// let arrNum: number[] = [23, 45, 643, 345, 12345]
// function getRandomElementNumber(arr: number[]) {
//     const index =  Math.floor(Math.random() * arr.length)
//     return arr[index]
// }
// console.log(getRandomElementNumber(arrNum))
// let arrString: string[] = ['a', 'b', 'c', 'd', 'e']
// function getRandomElementString(arr: string[]) {
//     const index =  Math.floor(Math.random() * arr.length)
//     return arr[index]
// }
// console.log(getRandomElementString(arrString))
// function getRandomElement(arr: any[]) : any {
//     const index =  Math.floor(Math.random() * arr.length)
//     return arr[index]
// }
// this is bad. We aint using the power of typescript.
// let result: string
// result = getRandomElement(arrString)
// result = getRandomElement(arrNum)
// console.log(typeof result)
// let arrString: string[] = ['a', 'b', 'c', 'd', 'e']
// let arrNum: number[] = [23, 45, 643, 345, 12345]
// // generic T means it can be used at a different 
// // scenario and adapt to that scenario.
// // whatever will be passed in the parameter will
// // become 
// function getRandomElement<T>(arr: T[]) : T {
//     const index =  Math.floor(Math.random() * arr.length)
//     return arr[index]
// }
// let result: string
// // when you passing a string, the T will become a string
// getRandomElement(arrString)
// // when you passing a number, the T will become a number
// getRandomElement(arrNum)
// // console.log(typeof result)
// Generics Constraint
// type Person = {
//     firstname: string
// }
// const details = {lastname: "CJ", firstname: "emma"}
// function getElement<O extends object, K extends keyof O>(obj: O, key: K) {
//     return obj[key]
// }
// console.log(getElement(details, 'firstname'))
// by doing this we saying that we want the "firstname"
// and anything else you pass
// function getPerson<T extends Person>(data: T) {
//     return data
// }
// const details = {lastname: "CJ", firstname: "emma"}
// console.log(getPerson(details))
