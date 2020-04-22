
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
interface FullName{
  firstName: string,
  secondName:string
}
function printName(name:FullName): void{
  console.log(name.firstName+name.secondName);
}
var obj = {
  age: 15,
  firstName: '张',
  secondName: '三'
}
printName(obj)