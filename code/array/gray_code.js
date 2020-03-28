// 原题 https://leetcode-cn.com/problems/gray-code/solution/di-gui-wei-yun-suan-si-lu-fei-chang-jian-dan-by-pp/

//用递归去做
export default function gray(n){//3
    if(n===1){
        return ['0','1']
    }else{
        let oldRes = gray(n-1)//[0,1]
        console.log(oldRes)
        let len=oldRes.length //2
        let res=[]
        for(let i=0;i<len;i++){
                res.push(`0${oldRes[i]}`)
                res.push(`1${oldRes[i]}`)
        }
        return res
    }      
}

console.log(gray(3))

//后面其实就是二进制转十进制了：
function two2ten(arr2){
    let count=0
    function compute(str){//10
        if(str.length===1){
            return '1'
        }else{
        compute(str.slice(1))*Math.pow(2,str.length)
        }
    }
    arr2.map(item=>{compute(item)})
}