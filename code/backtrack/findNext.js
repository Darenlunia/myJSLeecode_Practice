//全排列问题
function findNext(arr,cur=[]){
    if(!arr.length){console.log(cur)}
    for(let i=0,l=arr.length;i<l;i++){
        cur.push(arr[i])//做选择
        let temp=[].concat(arr)//深拷贝
        temp.splice(i,1)
        findNext(temp,cur)//做下一次选择
        cur.pop()//取消选择
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