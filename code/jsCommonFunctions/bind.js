Function.prototype.bind=function(obj,args){
    let fn=this //当前Function实例
    return function(){ //bind相当于延缓执行apply
        fn.apply(obj,args)
    }
}