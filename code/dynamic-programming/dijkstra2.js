// //来自力扣787题-使用pq的dijkstra
// //解题思路参考 https://www.bilibili.com/video/BV1LJ411u7Tn

let classes =require('./priority-queue')
let Node = classes.Node
let PriorityQueue=classes.PriorityQueue

//所需数据结构三种：1.pq 优先级队列（最小堆排序的队列） 2.graph 邻接表
function findCheapestPrice(n,edges,src,dst,K){
    let graph = new Array()//邻接表表示
    edges.forEach(([i,j,cost])=>{//解构赋值
        if(!Array.isArray(graph[i])){
            graph[i]=new Array()
        }
        graph[i][j]=cost
    })
    let pq=new PriorityQueue() //优先级队列
    pq.pushData(new Node(0,src,K+1))//初值cost=0,place=src,k=-1
    //接下来迭代的操作：
    /**
     * 1.取出优先级队列第一个节点
     * 2.判断这个节点是否是终点，如果是终点，则返回最终价格
     * 3.若没有到达终点，找到距离此节点为1的所有节点。
     * 4.判断这些节点是否还有k可取(k>0)，并计算可取节点的cost，和k-1，放入pq。
     */
    while(!pq.isEmpty()){
        console.log(pq);
        let node=pq.shiftData();
        ({priority:cost,data:place,k}=node)//解构赋值
        if(place===dst){return cost}
        if(k>0){
            for(let nextone=0;nextone<n;nextone++){
                if(graph[place][nextone]){
                    let newcost=cost+graph[place][nextone]
                    pq.pushData(new Node(newcost,nextone,k-1))
                }
            }
        }
    }
    return -1
}
console.log(findCheapestPrice(3,[[0,1,100],[1,2,100],[0,2,500]],0,2,1))


//
// let arr=[[0,1,100],[1,2,100],[0,2,500]]
// let arr2=[]
// //将其转化为邻接表
// arr.forEach(([i,j,val])=>{//解构赋值
//   if (!Array.isArray(arr2[i])) {
//     arr2[i] = []
//   }
//   arr2[i][j] = val
// })

// console.log(arr)