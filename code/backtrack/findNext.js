//全排列问题
function findNext(arr,cur=[]){
    if(!arr.length){console.log(cur)}
    for(let i=0,l=arr.length;i<l;i++){
        cur.push(arr[i])//做决策
        let temp=[].concat(arr)//数组深拷贝的简单方法
        temp.splice(i,1)
        findNext(temp,cur)
        cur.pop()//取消决策
    }
}

findNext([1,2,3])
/**
 * 输出结果
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
 */