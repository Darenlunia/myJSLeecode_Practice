var hasPathSum = function(root, sum) {
    // console.log(sum)
    if(root===null){return false}
    if((root.left===null)&&(root.right===null)){
        return sum-root.val===0
    }else{
            return hasPathSum(root.left,sum-root.val)||hasPathSum(root.right,sum-root.val)
    }
};

let root={
    val:"1",
    left:{
        val:"2",
        left:{
            val:"3",
            left:null,
            right:null
        },
        right:{
            val:"4",
            left:{
                val:"5",
                left:null,
                right:null
            },
            right:null
        }
    },
    right:null
}
console.log(hasPathSum(root,6))