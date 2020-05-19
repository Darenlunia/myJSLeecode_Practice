//来自力扣787题
//动态规划的方法解题
//找路径是迭代过程。
function findCheapestPrices(n,edges,src,dst,k){
    function minPrice(src,dst,k){
        let price=0
        //设置错误边界
        if(k===0){
            for(let i=0,l=edges.length;i<l;i++){
                if(edges[i][0]===src && edges[i][1]===dst){
                    price=edges[i][2]
                    break
                 }else{
                    price=-1
                 }
            }
        //设置正确边界
        }else if(src===dst){
            price=0
        //设置状态转换递归过程
        }else{
            let prices=[]
            edges.forEach(arr => {
                if(arr[1]===dst){
                    new_dst=arr[0]
                    prices.push(minPrice(src,new_dst,k-1)+arr[2])
                }
            });
            price=Math.min(...prices)
        }
        return  price
    }
    return minPrice(src,dst,k)
}

//测试
console.log(findCheapestPrices(3,[[0,1,100],[1,2,100],[0,2,500]],0,2,0))