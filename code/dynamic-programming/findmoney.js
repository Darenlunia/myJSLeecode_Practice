function coinChange(coins=[], amount=11){
    function dp(n){
        //basecase
        if(n===0){return 0}
        if(n<0){return -1}
        let res=Infinity
        for(let coin of coins){
            //求解子问题
            let subproblem=dp(n-coin)
            //子问题无解,跳过
            if(subproblem===-1){ continue }
            res = Math.min(res, 1 + subproblem)
        }
        if(res===Infinity){return -1}
        return res 
    }
    return dp(amount)
}