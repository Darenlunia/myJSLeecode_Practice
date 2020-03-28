//选择排序 从小到大
//理解：选择性的排序，在右边子串中不断找到最小值依次放在左侧
//原理是 设置两个指针。一个一直指向左侧执行到的位置。
//一个去遍历这个位置后面的元素中的最小值。

//记录下标
function selectSort(arr){
    for(let i=0;i<arr.length;i++){
        let point=i
        for(let j=i;j<arr.length-1;j++){
            if(arr[j+1]<arr[point]){
                point=j+1
            }
        }
        // let tmp=arr[i]
        // arr[i]=arr[point]
        // arr[point]=tmp
        [arr[i],arr[point]]=[arr[point],arr[i]]
    }
    return arr
}

//记录最小值
function selectSort2(arr){
    for (let i=0,len=arr.length,min;i<len;i++){
        min=arr[i]
        for(let j=i+1;j<len;j++){
            if(arr[j]<min){
                [arr[j],min]=[min,arr[j]]
                // let c=min
                // min=arr[j]
                // arr[j]=c
            }
        }
        arr[i]=min
    }
    return arr
}
console.log(selectSort2([2,1,4,3,0,3]))
