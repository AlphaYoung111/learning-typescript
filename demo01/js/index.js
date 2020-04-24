"use strict";
// 布尔
// var t: boolean = false
// // 数字
// var n: number = 123
// // 字符串
// var str: string = 'hello ts'
// // 数组
// var arr1: number[] = [1, 2]
// var arr2: Array<number> = [3, 4]
// let arr4: any[] = ['aa', 1, true]
// 元组（tuple）
// let arr3: [number, string] = [1, 'aa']
// // 枚举 enum
// enum Flag { success = 1, fail = 2 }
// let f1: Flag = Flag.success
// enum Color { blue, red, 'yellow', false }
// let c: Color = Color.false
// //任意 any
// let a: any = 1
// //undefined
// let un: number | undefined
// un = 3
// //null
// let num: null
// num = null
//void
// function fn(): number {
//   return 1
// }
// let f = fn()
//never
// let n1: never = (()=>{throw new Error('bb')})()
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//函数
// function fn1(): string {
//   return 'aa'
// }
// let fn2 = function (): number {
//   return 12
// }
// function fn3(age: number, name: string): string {
//   return `${age}--${name}`
// }
// fn3(15, 'young')
// function fn4(age: number=20, name?: string): string {
//   if (name) {
//     return `${age}--${name}`
//   } else {
//     return `${age}`
//   }
// }
// console.log(fn4(undefined,'young'))
//扩展参数
// function fn5(...res: number[]) {
//   return res.reduce((pre:number,acc:number):number=> pre+acc,0)
// }
// console.log(fn5(1,2,3,4));
//函数重载
// function fn6(age: number): number;
// function fn6(age: string): string;
// function fn6(age: any): any{
//   if (typeof age === 'number') {
//     return 16
//   } else if (typeof age === 'string') {
//     return 'aa'
//   } else {
//     return false
//   }
// }
// 类
// class Person{
//   protected name: string
//   constructor(n: string) {
//     this.name = n
//   }
//   run(): void{
//     console.log(this.name);
//   }
// }
// var p = new Person('aa')
// p.run()
// class Man extends Person{
//   age:number
//   constructor(name: string,age:number) {
//     super(name)
//     this.age = age
//   }
//   run(): void{
//     console.log('子类'+this.name);
//   }
//   work(): void{
//     console.log(`${this.name}+${this.age}`);
//   }
// }
// var m = new Man('bb',15)
// m.run()
// m.work()
//类的静态方法
// class Person {
//   public name: string
//   public sex:string
//   static age: number 
//   constructor(name: string,sex:string) {
//     this.name = name
//     this.sex = sex
//   }
//   run(): void { //实例方法，必须实例后才能调用
//     console.log(`${this.name}在跑步`);
//   }
//   static work(): void {//静态方法不需要实例化
//     console.log(`wo工作le${Person.age}`);
//   }
// }
// // Person.work()
// class Son extends Person {
//   constructor(name: string,sex:string) {
//     super(name,sex)
//   }
// }
// Person.age = 18
// console.log(Son.age)
// Person.age = 20
// Son.work()
// Person.work()
// var p = new Person('李四','n')
//多态
// class Animal{
//   public name: string
//   constructor(name: string) {
//     this.name=name
//   }
//   eat(): string{
//     return '吃'
//   }
// }
// class Cat extends Animal{
//   constructor(name: string) {
//     super(name)
//   }
//   eat(): string{
//     return this.name+'猫粮'
//   }
// }
// class Panda extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat(): string {
//     return this.name + '竹子'
//   }
// }
//抽象类
// abstract class Animal{
//   public name: string
//   constructor(name: string) {
//     this.name=name
//   }
//   abstract eat(): string
// }
// class Panda extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat(): string {
//     return this.name + '竹子'
//   }
// }
// 属性接口
// interface FullName{
//   firstName: string,
//   secondName:string
// }
// function printName(name:FullName): void{
//   console.log(name.firstName+name.secondName);
// }
// var obj = {
//   age: 15,
//   firstName: '张',
//   secondName: '三'
// }
// printName(obj)
//接口案例ajax
// interface Config {
//   type: string,
//   url: string,
//   data?: string,
//   dataType: string
// }
// function ajax(config: Config): void {
//   var xhr = new XMLHttpRequest()
//   xhr.open(config.type, config.url, true)
//   xhr.send(config.data)
//   xhr.onreadystatechange = function (): void {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       console.log('success');
//       if (config.dataType == 'json') {
//         console.log(JSON.parse(xhr.responseText))
//       } else {
//         console.log(xhr.responseText);
//       }
//     }
//   }
// }
// ajax({
//   type: 'get',
//   url: 'http://a.itying.com/api/productlist',
//   dataType:'json'
// })
// 函数类型接口
// interface encrypt{
//   (k:string,value:number):string
// }
// let md5: encrypt=function(n: string, s: number): string{
//   return n+s
// }
// let md6: encrypt = (n, s) => n + s
// console.log(md6('b',2));
// console.log(md5('a',1));
//可索引接口
// interface UserArr{
//   [index:number]:string
// }
// interface UserObj{
//   [index:string]:string
// }
// let arr: UserArr = ['1', '2']
// let obj:UserObj={name:'aa',sex:'man'}
// console.log(arr[0]);
//类类型接口
// interface Animal{
//   name: string,
//   eat(str:string):void
// }
// class Dog implements Animal{
//   public name:string
//   constructor(name: string) {
//     this.name = name
//   }
//   eat():void {
//     console.log(this.name);
//   }
// }
// let d = new Dog('骨头')
// d.eat()
// // 接口的扩展：继承
// interface Animal {
//   eat(): void
// }
// interface Person extends Animal {
//   work(): void
// }
// class Human {
//   public name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// class Man extends Human implements Person {
//   constructor(name: string) {
//     super(name)
//   }
//   eat(): void {
//     console.log(this.name);
//   }
//   work(): void {
//     console.log(this.name + 'work');
//   }
// }
// let m = new Man('aa')
// m.eat()
// m.work()
// 泛型
// function getData<T>(value: T): T {
//   return value
// }
// console.log(getData<number[]>([1,2]))
// 泛型类
// class MixClass<T>{
//   public list: T[] = []
//   add(value: T): void {
//     this.list.push(value)
//   }
//   smaller(): T {
//     var minNum = this.list[0]
//     this.list.forEach(item => {
//       if (item < minNum) {
//         minNum=item
//       }
//     })
//     return minNum
//   }
// }
// let m = new MixClass<string>()
// m.add('z')
// m.add('a')
// m.add('b')
// m.add('c')
// console.log(m.smaller())
// 泛型接口
// interface Config{
//   <T>(value:T):T
// }
// let getData: Config = function <T>(value: T): T{
//   return value
// }
// let setData: Config = <T>(value: T) => value
// console.log(setData<number>(1));
// console.log(getData<string>('aa'));
// interface user<T> {
//   (value: T): T
// }
// function set<T>(value: T): T {
//   return value
// }
// let my: user<string> = set
// console.log(my('ww'))
//泛型类扩展,将类作为参数传递
// class User {
//   public name: string | undefined
//   public password: string | undefined
// }
// class MysqlDB<T>{
//   add(user: T): boolean {
//     console.log(user);
//     return true
//   }
// }
// let u = new User()
// u.name = 'aa'
// u.password = 'bb'
// let db = new MysqlDB<User>()
// db.add(u)
// class ArticleCate {
//   public title: string 
//   public desc: string
//   public status: number |undefined
//   constructor(params: {
//     title: string,
//     desc: string,
//     status?: number
//   }) {
//     this.title = params.title
//     this.desc = params.desc
//     this.status = params.status
//   }
// }
// const obj = {
//   title: 'aa',
//   desc: 'bb',
//   status:1
// }
// let article = new ArticleCate(obj)
// let db2 = new MysqlDB<ArticleCate>()
// db2.add(article)
// // 使用综合知识进行操作数据库封装
// interface DBI<T>{
//   add(info:T):boolean
//   update(into:T,id:number):boolean
//   delete(id:number):boolean
//   get(id:number):any[]
// }
// class MysqlDB<T> implements DBI<T>{
//   add(info: T): boolean {
//     console.log(info);
//     return true
//   }
//   update(into: T, id: number): boolean {
//     throw new Error("Method not implemented.");
//   }
//   delete(id: number): boolean {
//     throw new Error("Method not implemented.");
//   }
//   get(id: number): any[] {
//     throw new Error("Method not implemented.");
//   }
// }
// class User{
//   username: string | undefined
//   password:string | undefined
// }
// var u = new User()
// u.username = 'aa'
// u.password = 'bb'
// var mysql = new MysqlDB<User>()
// mysql.add(u)
// 模块化
// import { getData } from './module/db'
// getData()
// 命名空间
// namespace A {
//   interface Animal {
//     eat(): void
//   }
//   interface Person extends Animal {
//     work(): void
//   }
//   export class Human {
//     public name: string
//     constructor(name: string) {
//       this.name = name
//     }
//   }
//   export class Man extends Human implements Person {
//     constructor(name: string) {
//       super(name)
//     }
//     eat(): void {
//       console.log(this.name);
//     }
//     work(): void {
//       console.log(this.name + 'work');
//     }
//   }
// }
// var a = new A.Man('aa')
// a.eat()
// 装饰器
// 类装饰器(无参数)
// function logClass(params: any):void{
//   console.log(params);
//   params.prototype.apiUrl = '装饰器'
//   params.prototype.run = function ():void {
//     console.log('我是装饰器的run方法');
//   }
// }
// @logClass
// class user {
//   public name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// var h: any = new user('aa')
// console.log(h.apiUrl);
// h.run()
// 类装饰器  装饰器工厂，有参数
// function logClass(params: string):any {
//   return function (target: any):void {
//     console.log(params);
//     target.prototype.apiUrl = '装饰器'
//     target.prototype.run = function (): void {
//       console.log('我是装饰器的run方法');
//     }
//   }
// }
// @logClass('hello')
// class user {
//   public name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// var h: any = new user('aa')
// console.log(h.apiUrl);
// h.run()
// 装饰器的重载
// function logClass(target: any): any {
//   return class extends target{
//     public name:string = '我是重载后'
//   }
// }
// @logClass
// class user {
//   public name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   run(): void{
//     console.log(this.name);
//   }
// }
// var h: any = new user('aa')
// h.run()
// 属性装饰器
// function logProperty(params: string): any {
//   return function (target: any, attr: any): void {
//     console.log(target);
//     console.log(attr);
//     target[attr] = params
//   }
// }
// class user {
//   @logProperty('logProperty')
//   public name: string | undefined
//   @logProperty('aa')
//   public age: string | undefined
//   constructor() {
//   }
//   getData(): void {
//     console.log(this.name+'在'+this.age);
//   }
// }
// var h = new user()
// h.getData()
// 方法装饰器
// function logMethod(params: any): any{
//   return function (target: any, methodName: any, desc: any) {
//     console.log(params)
//     console.log(target);
//     console.log(methodName);
//     console.log(desc);
//     var oMethod = desc.value
//     desc.value = function (...args: any[]):void{
//       args = args.map((item):any =>  String(item))
//       console.log(this);
//       oMethod.apply(this,args)
//     }
//   }
// }
// class user {
//   public name: string | undefined
//   public age: string | undefined
//   constructor() {
//   }
//   @logMethod('methods')
//   getData(...args: any[]): void {
//     console.log(args);
//     console.log('我是getdata中原来的');
//   }
// }
// var h = new user()
// h.getData('xx',11)
// 方法参数装饰器
function logParams(params) {
    return function (target, methodName, paramsIndex) {
        console.log(params);
        console.log(target);
        console.log(methodName);
        console.log(paramsIndex);
    };
}
var user = /** @class */ (function () {
    function user() {
    }
    user.prototype.getData = function (arg) {
        console.log('我是getdata中原来的');
    };
    __decorate([
        __param(0, logParams('aa'))
    ], user.prototype, "getData", null);
    return user;
}());
var u = new user();
u.getData('bbb');
