//冒泡排序，例如从小到大
//咕嘟咕嘟频繁交换

//原则：两两比较，每次循环能确定的是最后一个元素的位置
//整体上看就是最大的值在不断的冒泡到右边去
//i倒序循环 j正序 记代码就好啦
function dubble(arr){
    let tmp=0
    for(let i=arr.length;i>0;i--){
        for(let j=0;j<i;j++){
            tmp=arr[j]
            if(tmp>arr[j+1]){
                arr[j]=arr[j+1]
                arr[j+1]=tmp
            }
        }
    }
    return arr
}

console.log(dubble([8,3,4,1]))
