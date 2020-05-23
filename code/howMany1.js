//求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？为此他特别数了一下
// 1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。
// ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的
// 次数（从1 到 n 中1出现的次数）。
//来自牛客网32题
function howmany1(n){
    let sum=0
    for(let i=1;i<=n;i++){
        let str=i+''
        for(let j=0;j<str.length;j++){
            if (str[j]==='1'){
                sum++
            }
        }
    }
    return sum
}

console.log(howmany1(14))