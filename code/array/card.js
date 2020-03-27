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
function hasGroupSizeX2(deck){
    deck.sort((x,y)=> x-y)
    let min=10000
    let dist=[]
    for(let i=0,len=deck.length;i<len;i++){
        console.log("************i"+i)
        let t=1
        console.log("aa")
        for(let j=i+1;j<len;j++){
            console.log("#######j"+j)
            if(deck[i]===deck[j]){
                t++
                console.log("bb:"+deck[j]+"位置"+j)
            }else{
                dist.push(t)
                min=Math.min(t,min)
                i=j-1
                console.log("cc")
                console.log(i)
                break
            }
        }
        // console.log(min)
        // console.log(dist)
    }
}

console.log(hasGroupSizeX2([1,1,2,2,2]))
