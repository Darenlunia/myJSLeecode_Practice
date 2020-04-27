//https://leetcode-cn.com/problems/restore-ip-addresses/

// 分割IP地址
function dfsIP(str){
    let temp=''
    dfs(str,temp)//把一个str用3个点分成4份
    let res='***'
    function dfs(str,temp){
        if(temp.split('.').length===4){
            temp.slice(0,-1)
            res.push(temp)
            return
        }
        if(str[0] && parseInt(str[0])<=255) {
            console.log(str[0])
            temp.concat(parseInt(str[0]),'.')
            dfs(str.slice(1),temp)
        } 
        if(str[1] && parseInt(str.slice(0,1))<=255) {
            temp.concat(parseInt(str.slice(0,1)),'.')
            dfs(str.slice(2),temp)
        } 
        if(str[2] && parseInt(str.slice(0,2))<=255) {
            temp.concat(parseInt(str.slice(0,2)),'.')
            dfs(str.slice(3),temp)
        } 
    }
    return res //[[31,221,13,44],[21,121,21,3]]
}

console.log(dfsIP('25525511113'))

function dfsIP2(str){
    // 保存所有符合条件的IP地址
    let r = []
    // 分四步递归处理ip分段
    let search = (cur, sub) => {
      // 边界条件
      if (cur.length === 4 && cur.join('') === str) {
        r.push(cur.join('.'))
      } else {
        // 正常的处理过程
        for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
          tmp = sub.substr(0, i + 1)
          if (tmp < 256) {
            search(cur.concat([tmp]), sub.substr(i + 1))
          }
        }
      }
    }
    search([], str)
    return r
  }




//https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
