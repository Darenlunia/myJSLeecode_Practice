// //写一个n*n矩阵数据结构
// class Matrix{
//     constructor(n){
//         this.board=new Array(n)
//         for(let i=0;i<n;i++){
//             this.board[i]=new Array(n)
//             this.board[i].fill('.')//初始化为全点
//         }
//     }
//     get(i,j){
//         if(i<0||j<0){return null}
//         return this.board[i][j]
//     }
//     set(i,j,val){
//         this.board[i][j]=val
//     }
//     toString(){
//         return this.board
//     }
// }

/**
 * @param {计数，递归到第几行了} row 
 * @param {记录递归到当前行矩阵状态} current 
 */
function findNext(row=0,current){ 
    if(row===8){
        console.log(current)
        return true
    }
    for(let col=0;col<8;col++){ 
        current[row][col]='Q'//做选择
        if(isValid(current,row,col)){//有效才下一行（剪枝）
            let temp=JSON.parse(JSON.stringify(current))//深拷贝
            // findNext(row+1,temp)//进行下一选择
            if(findNext(row+1,temp)){return true}
        }
        current[row][col]='.'//取消选择
    }
}
/**
 * 保证当前矩阵最后一行的Q，位置放置符合要求
 */
function isValid(cur,row,col){
    //判断同列
    for(let i=0;i<row;i++){
        if(cur[i][col]==='Q')
        return false
    }
    //判断左上方
    for(let i=row-1,j=col-1;i>=0&&j>=0;i--,j--){
        if(cur[i][j]==='Q'){
            return false
        }
    }
    //判断右上方
    for(let i=row-1,j=col+1;i>=0&&j<=8;i--,j++){
        if(cur[i][j]==='Q'){
            return false
        }
    }
    return true
}

let board=new Array(8)
for(let i=0;i<8;i++){
    board[i]=new Array(8)
    board[i].fill('.')
}
findNext(0,board)