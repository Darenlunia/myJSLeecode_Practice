//https://leetcode-cn.com/problems/count-binary-substrings/
let count=0
function countBinary(string){
    for(let i=0;i<string.length-1;i++){
        let str=string.slice(i)//取子串操作
        if(match(str)) count++
    }
}
function match(str){
    let startStr=str.match(/(0+)|(1+)/)[0]//抽取出第一个连续子串
    if(startStr.length*2>str.length) return false
    let endStr=str.slice(startStr.length,startStr.length*2)//取出相应长度的后半段字符串
    let reStartStr=(startStr[0]^1).toString().repeat(startStr.length) //这一步是主要操作：将前半段字符串翻转，判断是否和后半段字符串相等。
    if(reStartStr==endStr) return true
}
countBinary('11100110010')
console.log(count)