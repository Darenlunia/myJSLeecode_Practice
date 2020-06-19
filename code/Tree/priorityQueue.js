//优先级队列,新增/删除元素后，保证取出第一个元素仍然是最大值。
//不需要优先级队列内部实现从大到小排序。只需要保证第一个最大就可以了。
//所以最大堆是优先队列的最佳实践。
//它的核心函数就是，新增时实现上浮，删除时实现下沉。
class PriorityQueue{
    constructor(){
        this.arr=[0] 
    }

    //新增
    insert(val){
        this.arr.push(val)// 先把新元素加到最后
        this.swim(this.arr.length-1);// 然后让它上浮到正确的位置
    } 

    //队首剔除（如果是最大顶，则返回队列中的最大元素）
    shiftFirst(){
        // 最大堆的堆顶就是最大元素
        // 把这个最大元素换到最后，删除之
        this.swap(0,this.arr.length-1)
        let max=arr.pop()
        this.sink(0);
        return max;
    }

    //新增一个元素，需要将元素放在队列尾部，然后需要上浮它,该函数是上浮第i个元素后，令堆回归稳定状态的方法
    swim(i){
        while (i > 0) {
            let parent=Math.floor((i-1)/2)
            if(this.arr[i]>this.arr[parent]){
                this.swap(i,parent);
                i=parent
            }else{
                break
            }
        }
    }

    //删除顶端元素，需要取出队头元素，然后将队尾元素放到堆顶，然后下沉它,该函数是下沉第i个元素后，令堆回归稳定状态的方法
    sink(i){
       // 如果沉到堆底部，就不能再下沉了
        let left=i*2+1
        let right=i*2+2
        while (this.arr[left]) {
            //如果左节点大于当前节点
            if(this.arr[left]>this.arr[i]){
                this.swap(left,i)
                i=left
                continue
            }
            //如果右节点存在，且右节点大于当前节点
            if(this.arr[right] && this.arr[right]>this.arr[i]){
                this.swap(right,i)
                i=right
                continue
            }
            break;
        }
    }

    //交换数组的两个元素
    swap(i,j){
        var temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }
}
