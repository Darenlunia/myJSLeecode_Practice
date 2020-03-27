//题目：电话号码的字母组合
// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

var letterCombinations = function(digits) {
    const maps = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    const res = [];
    for (let num of digits) {
        let w = maps[num];
        if (res.length > 0) {
            let tmp = [];
            for (let i = 0; i < res.length; i++) {
                let wl = w.length;
                for (let j = 1; j < wl; j++) {
                    tmp.push(res[i] + w[j])
                }
                res[i] += w[0];
            }
            res.push(...tmp)
            console.log(res)
        } else {
            res.push(...w);
        }
    }
    return res;

};
letterCombinations('234')





// var letterCombinations = function(digits) {
//     const num2lett=['null','null','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
//     let num=digits.split('')//['2','3','4']
//     if(num.length===1){return num2lett[num].split("")}
//     let lett=new Array()
//     let res=new Array()
//     num.forEach((item)=>{
//         lett.push(num2lett[parseInt(item)])//[abc,def,ghi]
//     })
//     let result=[]
//     while(lett.length>1){
//         let temp=[]
//         for(let i=0,li=lett[0].length;i<li;i++){
//             console.log(li)
//             for(let j=0;j<lett[1].length;j++){
//                 temp.push(`${lett[0][i]}${lett[1][j]}`)
//                 res.push(`${lett[0][i]}${lett[1][j]}`)
//             }
//         }
//         lett.splice(0,2,res)
//         result=temp
//     }
//     return result
// };

// // letterCombinations('234')
// console.log(letterCombinations('2345'))