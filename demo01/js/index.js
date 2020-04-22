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
function printName(name) {
    console.log(name.firstName + name.secondName);
}
var obj = {
    age: 15,
    firstName: '张',
    secondName: '三'
};
printName(obj);
