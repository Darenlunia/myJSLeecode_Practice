//题目：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
//主题：翻转字符串中的单词

//string的方法：split（字符串->数组）（split参数两种方式：1、分隔符；2、正则代替分隔符/\s/）；通过字符串转数组就可以让字符串使用数组的方法了。
//array中的方法：map方法（参数是函数，函数参数是数组元素值，返回一个每个元素被处理好的数组）、reverse方法=、join方法(数组->字符串)
//array中的关于排序、增删改的操作都是改变原数组的，一般删操作是返回被删值，其他操作是返回被改变的数组。
//split的替代方法：match识别单词，正则：/[\w']+/g; 中括号代表可选项，\w代表字符，'代表字符之间的连写习惯，+代表是[]中元素的集合(元素>1个)

function reverseWords(string){
    return string.split(' ').map(item=>item.split('').reverse().join('')).join(' ')
}
console.log(reverseWords('I\'s like anmi'))