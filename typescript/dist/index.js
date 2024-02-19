"use strict";
// let check: boolean = true;
// let a:any = 9;
// a = "sad"
// let nambo = <string>"abhi";
// a.  // not intellisense
// =====================================================================================
// union variable
// let surname: string | number = "bhavnagri";
// surname = 2;
// =====================================================================================
// const func = (n:number, m: number) => {
//     return n * m;
// }
// const func = (n:number, m: number):number => {
//     return n * m;
// }
// =====================================================================================
// type and interface are very common
// if more parameter then we define upside
// type UserName = number | string;
// type aliases
// let a:UserName; 
// type UserName = (n: number, m: number) => number;
// const func: UserName = (n, m) => {
//     return n * m;
// }
// =====================================================================================
// Arrays in typescript
// first way
// const arr:number[] = [12,567,76,32];
// const arr2:string[] = []
// arr2[0] = "Hello world";
// second way
// const arr2:Array<string> = [];
// const arr:Array<number | string> = [32,436,76, "Hello world"];
// fixed size array also tuple
// const arr: [number, number, string] = [32, 54, "hello"];
// =====================================================================================
// const obj: {
//     height: number,
//     weight: number,
//     gender: boolean
// } = {
//     height: 323,
//     weight: 78,
//     gender: true
// }
// type Obj = {
//     height: number,
//     weight: number,
//     gender?: boolean  // optional property
// }
// const obj: Obj = {
//     height: 324,
//     weight: 54,
// }
// =====================================================================================
// when we use classes and object then use interface 
// we can extend it also
// interface Obj {
//     height: number,
//     weight: number,
//     gender?: boolean  // optional 
// }
// type FuncType = (n: number, m: number) => void
// interface newObj extends Obj {
//     scolar: boolean
//     func?: FuncType
// }
// const gig: newObj = {
//     height: 324,
//     weight: 54,
//     scolar: true
// }
// const kendal: newObj = {
//     height: 324,
//     weight: 4343,
//     scolar: false,
//     func: (n, m) => {
//         console.log(n * m);
//     }
// }
// =====================================================================================
// optional parameter
// type FuncType = (n: number, m: number, l?: number) => number
// const func: FuncType = (n, m, l) => {
//     if (typeof l === "undefined")
//         return n * m;
//     return n * m * l;
// }
// func(21, 54)
// =====================================================================================
// default parameter
// type FuncType = (n: number, m: number, l?: number) => number
// const func: FuncType = (n, m, l=20) => {
//     return n * m * l;
// }
// func(21, 54)
// =====================================================================================
// const func = (n:number, m:number, l:number=20) => {
//     return n * m * l;
// }
// func(21, 54)
// =====================================================================================
// rest parameter
// type FuncType = (...m: number[]) => number[];
// const func: FuncType = (...m) => {
//     return m;
// }
// func(21, 54, 54, 76, 98, 34, 78)
// =====================================================================================
// function with object
// interface Product {
//     name: string,
//     stock: number,
//     price: number,
//     photo: string,
//     readonly id: number
// }
// type getDataType = (product: Product) => void;
// const getData: getDataType = (product): void => {
//     // product.id = 90;
//     console.log(product);
// }
// const productOne: Product = {
//     name: "Macbook",
//     stock: 45,
//     price: 99999,
//     photo: "samplephotourl",
//     id: 89287
// }
// getData(productOne)
// =====================================================================================
// const err = new Error() // type error
// const errorHandler = (): never => { // if throw never else return error
//     throw new Error();   
// }
// type themeMode = "light" | "dark";
// const mode: themeMode = "dark"
// =====================================================================================
// classes
// class Player {
//     private height
//     public weight 
//     constructor(height: number, weight: number) {
//         this.height = height;
//         this.weight = weight;
//     }
//     myHeight = () => {
//         return this.height
//     }
// }
// const abhi = new Player(100,150);
// console.log(abhi.weight);
// class Player {
//     public readonly id: string;
//     constructor(private height: number, public weight: number, protected power: number) {
//         this.id = String(Math.random() * 100)
//     }
//     get getMyHeight(): number {
//         return this.height
//     }
//     set changeHeight(val: number) {
//         this.height = val;
//     }
// }
// const abhi = new Player(100, 150, 210);
// abhi.changeHeight = 300;
// console.log(abhi.getMyHeight);
// const abhi = new Player(100, 150, 23);
// class Player2 extends Player {
//     special: boolean
//     constructor(height: number, weight:number, power:number, special: boolean) {
//         super(height,weight,power)
//         this.special = special
//     }
//     getMyPower = () => {
//         this.power
//     }
// }
// =====================================================================================
// interface ProductType {
//     name: string,
//     price: number,
//     stock: number,
//     offer?: boolean,
// }
// interface GiveId {
//     getId: () => string
// }
// class Product implements ProductType, GiveId {
//     private id: string = String(Math.random() * 1000);
//     constructor(
//         public name: string,
//         public price: number,
//         public stock: number
//     ) { }
//     getId = () => this.id
// }
// let abhi = new Product("macbook", 43, 54)
// =====================================================================================
// type assertion
// const btn = document.getElementById("btn") as HTMLElement;
// const btn = <HTMLElement>document.getElementById("btn");
// const btn = document.getElementById("btn")!;
// btn.onclick
// const img = document.getElementById('myimg') as HTMLImageElement;
// img.src
// const img = document.querySelector("img") as HTMLImageElement;
// img.src
// =====================================================================================
// const form = document.getElementById('myform') as HTMLFormElement;
// const input = document.querySelector('form > input') as HTMLInputElement;
// form.onsubmit = (e: SubmitEvent) => {
//     e.preventDefault();
//     const number = Number(input.value);
//     const h2 = document.createElement('h2');
//     const body = document.querySelector('body')!;
//     h2.textContent = String(number + 20);
//     body.append(h2);
// }
// =====================================================================================
// interface Person {
//     // [key: string]: string  // index signature
//     name: string,
//     email: string
// }
// const myobj:Person = {
//     name: "Rizwan",
//     email: "abc@gmail.com"
// }
// let key = "name"
// myobj[key as keyof Person]
// myobj[key as keyof typeof myobj]
// const getEmail = ():string => {
//     return myobj.email
// }
// const getName = ():string => {
//     return myobj.name
// }
// const getData = (key: keyof Person) => {
//     return myobj[key]
// }
// getData("name")
// =====================================================================================
// utility classes
// type User = {
//     name: string,
//     email: string
// }
// Partial<Type> 
// const user: Partial<User> = {
// }
// =====================================================================================
// Required<Type>
// const user: Required<User> = {
//     name: "abc",
//     email: "abc"
// }
// =====================================================================================
// ReadOnly<Type>
// const user: Readonly<User> = {
//     name: "abc",
//     email: "abc@gmail.com"
// }
// user.name = "hello"
// =====================================================================================
// Record<Keys, Type>
// interface UserInfo {
//     age: number
// }
// type UserName = "john" | "levi" | "rizwa" | "raiya"
// const users: Record<UserName, UserInfo> = {
//     john: {age: 90},
//     levi: {age: 90},
//     rizwa: {age: 90},
//     raiya: {age: 90},
// }
// =====================================================================================
// Pick <Type, Key>
// interface OrderInfo {
//     readonly id: string,
//     user: string,
//     city: string,
//     state: string,
//     country: string,
//     status: string
// }
// type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">
// =====================================================================================
// Omit<Type, key>
// interface ShippingInfo {
//     city: string,
//     state: string,
//     country: string,
// }
// type Random = Omit<ShippingInfo, "country">
// =====================================================================================
// Exclude<Type, ExcludedUnion>
// type MyUnion = string | number | boolean;
// type Random = Exclude<MyUnion, boolean>
// =====================================================================================
// Extract<Type, Union>
// type MyUnion = string | number | boolean;
// type Random = Extract<MyUnion, boolean>
// =====================================================================================
// NonNullable<Type>
// type MyUnion = string | number | boolean | null | undefined;
// type Random = NonNullable<MyUnion>
// type Random1 = Exclude<MyUnion, null | undefined>
// =====================================================================================
// Parameters<Type>
// const myfunc = (a: number,b: number) => {
//     return a * b;
// }
// type Random = Parameters<typeof myfunc>
// =====================================================================================
// ConstructorsParameters<Type>
// class Sample {
//     constructor(public s: string, public t: string) {
//     }
// }
// type Random = ConstructorParameters<typeof Sample>
// =====================================================================================
// ReturnType<Type>
// const myfunc = (a: number, b: string): string => {
//     return a + b
// }
// type FuncType = ReturnType<typeof myfunc>
// =====================================================================================
// InstanceType<Type>
// class Sample {
//     constructor(public s: string, public t: string) {
//     }
// }
// type Random = InstanceType<typeof Sample>
// const user: Random = {
//     s: "hello",
//     t: "32"
// }
// =====================================================================================
// Generics
// const func = <CustomType>(n: CustomType): CustomType => {
//     return n;
// }
// const ans = func(83);
// const ans2 = func("83");
// const ans3 = func(true);
// =====================================================================================
// type Person = {
//     name: string,
//     age: number
// }
// const func = <T>(n: T): T => {
//     return n;
// }
// const person:Person = {
//     name: "abhi",
//     age: 90
// }
// func<Person>(person);
// =====================================================================================
// const arr: Array<number> = [32, 54, 87];
// =====================================================================================
// type Person = {
//     name: string,
//     age: number
// }
// type Person2 = {
//     name: string,
//     age: number,
//     email: string
// }
// const user = {
//     name: "abhi",
//     age: 32
// }
// const user2 = {
//     name: "random",
//     age: 65,
//     email: "abc@gmail.com"
// }
// const func = <T, U extends T>(n: T, o: U): { n: T, o: U } => {
//     return { n, o };
// }
// const ans = func<Person, Person2>(user, user2);
// console.log(ans);
// =====================================================================================
// type Person = {
//     name: string,
//     age: number
// }
// const users: Person[] = [
//     {
//         name: "abhi",
//         age: 65
//     },
//     {
//         name: "raiya",
//         age: 90
//     },
//     {
//         name: "rizwa",
//         age: 65
//     },
//     {
//         name: "usma",
//         age: 98
//     },
// ]
// const filterByPeople = <T,U extends keyof T,>(arr: T[],property : U, value: T[U]) => {
//     return arr.filter(item => item[property]===value)
// }
// const filterByPeopleName = filterByPeople(users, "name", "rizwa")
// const filterByPeopleAge = filterByPeople(users, "age", 65)
// console.log(filterByPeopleAge);
