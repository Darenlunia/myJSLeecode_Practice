//

function kth(arr,k){
//其实用sort很简单，直接sort排序树组，取索引k就可以了
    arr.sort((a,b)=>b-a)//注意不写return的时候花括号也要省略掉。不然就变成函数体了
    return arr[k-1]
}

//如果不用sort，可以使用冒泡排序，当得到前k个的时候，直接输出就可以了。
function kth2(arr,k){
    for(let i=arr.length-1;i>arr.length-1-k;i--){
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                let tmp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=tmp
            }
        }
    }
    console.log(arr)
    return arr[arr.length-k]//记得冒泡排序要找倒数第k个！ 
}

console.log(kth2([3,2,1,5,6,4],2))