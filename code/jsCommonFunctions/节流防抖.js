// function debounce(func,delay){
//     let timer = null
//     return function(...args){
//         let that=this
//         if(timer){clearTimeout(timer)}
//         timer=setTimeout(()=>{
//             clearTimeout(timer)
//             func.call(that,args)
//         },delay)
//     }
// }
// function func(a,b){
//     console.log("执行！"+a+b)
// }
// element.addEventListener('click',debounce(func(3,4)))

function debounce(fn,delay){
    let timer=null
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        let that=this
        timer=setTimeout(()=>{
            fn.apply(that,args)
        },delay)
    }
}

function throttle(fn,delay){
    let lock=true //第一次点击
    return function(...args){
        if(lock===false){return}
        lock=false
        let that=this
        setTimeout(()=>{
            fn.apply(that,args)
            lock=true
        },delay)
    }
}

// function a(){
//     console.log('1')
//     let d='2'
//     return function(){
//         console.log(d)
//     }
// }

// function b(func){
//     func()
//     console.log('3')
// }

// b(a)
// b(a)
// // setTimeout(b(a),1000)