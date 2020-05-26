//“#”号表达方法可以实现序列化和反序列化一棵二叉树
//参考源码：https://blog.csdn.net/AS_Tammy/article/details/93601836
class TreeNode{
    constructor(val) {
        this.val=val
        this.left=null
        this.right=null
    }
}

function Serialize(Root,arr=[]){
    if(Root===null){
        arr.push('#')
    }else{
        arr.push(Root.val)
        Serialize(Root.left,arr)
        Serialize(Root.right,arr)
    }
}

//  测试数组：[8,6,5,'#','#',7,'#','#',6,7,'#','#',5,'#','#']
function Deserialize(arr){
    if(!arr.length){return null}
    let node =null
    let cur = arr.shift()
    if(cur !=='#'){
        node=new TreeNode(cur)
        node.left=Deserialize(arr)
        node.right=Deserialize(arr)
    }
    return node
}

console.log(Deserialize([8,6,5,'#','#',7,'#','#',6,7,'#','#',5,'#','#']))
/**
 * 输出结果：
 TreeNode {
  val: 8,
  right: TreeNode {
    val: 6,
    right: TreeNode { val: 5, right: null, left: null },
    left: TreeNode { val: 7, right: null, left: null }
  },
  left: TreeNode {
    val: 6,
    right: TreeNode { val: 7, right: null, left: null },
    left: TreeNode { val: 5, right: null, left: null }
  }
}
 */

let root=
{
    val: 8,
    right: {
        val: 6,
        right:{ val: 5, right: null, left: null },
        left:{ val: 7, right: null, left: null }
    },
    left:{
        val: 6,
        right:{ val: 7, right: null, left: null },
        left:{ val: 5, right: null, left: null }
    }
}
let arr=[]
Serialize(root,arr)
console.log(arr)
/**
 * 输出：
 [
  8,   6,   5,   '#', '#', 7,
  '#', '#', 6,   7,   '#', '#',
  5,   '#', '#'
]
*/