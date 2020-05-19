//这是求解斐波那契数列的一道题，具体的斐波那契数列很好理解，可以上网去查其规律。斐波那契的递归解法是很经典也很基础的动态规划解法。
//解法一：递归法
function fib1(n){
    if(n<0){
        return n
    }
    if(n<=1){
        return 1
    }else{
        return fib1(n-1)+fib1(n-2)
    }
}

//解法二：备忘录法-自顶向下
//声明数组 存放已经计算过的fib值，memo的长度应为n
let memo=[]
memo[0]=0
memo[1]=1
memo[2]=1
function fib2(n){
    // 如果备忘录中已经存在则直接取出
    if(memo[n]){
        return memo[n]
    }else{
        //否则计算备忘录中的数据并返回这个数据
        memo[n]=fib2(n-1)+fib2(n-2)
        return memo[n]
    }
}

//解法三：备忘录法-自底向上
function fib3(n){
    if(n<=2){
        return memo[n]
    }else{
        for(let i=3;i<=n;i++){
            memo[i]=memo[i-1]+memo[i-2]
        }
    }
    return memo[n]
}

//解法四：进一步压缩解法三的空间
function fib4(n){
    let memo1=1
    let memo2=1
    if(n<=1){
        return memo[n]
    }else{
        for(let i=3;i<=n;i++){
            memo_i=memo1+memo2
            memo1=memo2
            memo2=memo_i
        }
    }
    return memo_i
}

//测试
console.log(fib2(6))