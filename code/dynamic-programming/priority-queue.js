//来自力扣787题

//定义节点
class Node{
    constructor(priority,data,k){//这里面的k是题目需要才添加的，可以去掉。
        this.data=data
        this.k=k
        this.priority=priority
    }
}
//定义优先级队列
class PriorityQueue{
    constructor(){
        this.queue=[]
    }
    //新增
    pushData(newNode){
        if(this.queue.length===0){
            this.queue.push(newNode)
        }else{
            //按照data从小到大排序
            let added=false
            for(let i=0,l=this.queue.length;i<l;i++){
                console.log("排序插入")
                console.log(newNode.priority)
                if(newNode.priority<this.queue[i].priority){
                    added=true
                    this.queue.splice(i,0,newNode)
                    break
                }
            }
            if(!added){
                this.queue.push(newNode)
            }
        }
    } 
    //队首剔除
    shiftData(){
        return  this.queue.shift()
    }
    isEmpty(){
        return this.queue.length===0
    }
    size(){
        return this.queue.length
    }
}

exports.Node=Node
exports.PriorityQueue=PriorityQueue
