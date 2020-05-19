//来自力扣787题
//dijkstra迪杰特斯拉方法解题比较方便
// https://blog.csdn.net/kprogram/article/details/81225176 原理详解
// https://www.bilibili.com/video/BV1ts41157Sy 视频原理讲解

//下面这个函数测试后是有问题的，没有考虑到全部的边界条件，所以衍生出了dijkstra的第二个版本，在同一目录下
 function dijstra(n,edges,src,dst,k){
    //设置初始数据结构
    let parent=new Array(n).fill(src)//记录值为index的节点的父节点
    let dist=new Array(n).fill(Infinity) //记录值为index的节点到初始节点src之间的距离
    let arr=[src] //先把src放到第一个位置，这个数组代替priority queue队列存在，如果js中有priority queue的话更方便
    let T=[]//用于存储从arr中取出的已经确定最短路径的节点
    let length=[] //用于值为index的节点到初始节点经历了几次中转站
    dist[src]=0       
    length[src]=-1 
    while(arr){//用BFS
        let start = arr.shift()
        if(parent[start]){
            length[start]=length[parent[start]]+1
        }
        if(start===dst){
            console.log(dist[dit])//这里输出的就是到目的地的最短距离
            if(length[dst]>k){
                return -1
            }else{
                return dist[dit]
            }
        }
        if (T.includes(start)){
            continue
        }else{
            T.push(start)
        }
        let temp=[]//用于获取从小到大排序的与start挨着的节点。
        edges.forEach(item=>{
            if(start===item[0]){
                temp.push([item[1],item[2]])
            }
        })
        temp.sort((x,y)=>{x[0]-y[0]})
        temp.forEach(item=>{
            arr.push(item[0])
            let dist_item=item[1]+dist[start]
            if(dist[item[0]]>dist_item){
                dist[item[0]]=dist_item
                parent[item[0]]=start
            }
        })
    }
    if(dist[dst]===Infinity){
        return -1
    }
 }

// 优先级队列数据结构的实现 https://blog.csdn.net/weixin_42339197/article/details/97756854
// 或者直接看一个完整代码：https://www.cnblogs.com/xuhaopei/articles/12631446.html