//
//常规做法
// export default 
function maximum(arr){
    let max=0
    if(arr.length<2){
        return 0
    }else{
        arr.sort((a,b)=>b-a)
        for(let i=0,len=arr.length,tmp;i<len-1;i++){
            tmp=arr[i]-arr[i+1]
            if(tmp>max){
                max=tmp
            }
        }
    }
    return max
}
// console.log(maximum([2,4,9]))

//在冒泡排序或者选择排序内部实现
//发现内存消耗很低，但速度变慢了。。。
// function gap(arr){
//     let max=0
//     if(arr.length<2){
//         return 0
//     }
//     for(let i=arr.length-1,tmp;i>0;i--){
//         for(let j=0;j<i;j++){
//             if(arr[j]<arr[j+1]){
//                 // [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//                 let t=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=t
//             }
//         }
//         if(arr[i+1]){
//             tmp=arr[i]-arr[i+1]
//             if(tmp>max){
//                 max=tmp
//             }
//         }
//         if(i===1){
//             tmp=arr[0]-arr[1]
//             if(tmp>max){
//                 max=tmp
//             }
//         }
//     }
//     return max
// }
// console.log(gap([2,4,9]))
