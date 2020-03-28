//https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/

// //实际目标：递归找出全部元素的最大公约数。 
// function hasGroupSizeX(deck){
//     let m=new Map()
//     if(!deck){return false}
//     for(let i=0;i<deck.length;i++){
//         m.set(deck[i],m.has(deck[i])?m.get(deck[i])+1:1)
//     }
//     console.log(m)
//     function gcd(x,y){
//         if(x<y){
//             [x,y]=[y,x]
//         }
//         temp=x%y
//         if(temp ===0){
//             return x
//         }else {
//             gcd(y,temp)
//         }
//     }
//     console.log(m)
//     let x = Array.from(m.values()).reduce(gcd)
//     if(x>=2) {return true}
//     else{return false}
// }

// console.log(hasGroupSizeX([1,1,2,2,2,2]))

//方法二
//目标，找出所有复合要求的子数组的最小值，让所有数组长度除以它>=2
// export default 
function hasGroupSizeX2(arr){
    // 对这副牌进行排序，升序、降序都可以
    arr.sort((a, b) => a - b)
    let min = Number.MAX_SAFE_INTEGER
    let dst = []
    let result = true
    for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
      tmp.push(arr[i])
      for (let j = i + 1; j < len - 1; j++) {
        if (arr[i] === arr[j]) {
          tmp.push(arr[j])
        } else {
          if (min > tmp.length) {
            min = tmp.length
          }
          dst.push([].concat(tmp))
          tmp.length = 0
          i = j
          break
        }
      }
    }
    dst.every(item => {
      if (item.length % min !== 0) {
        result = false
        return false
      }
    })
    return result
  }

console.log(hasGroupSizeX2([1,1,2,2,2]))
