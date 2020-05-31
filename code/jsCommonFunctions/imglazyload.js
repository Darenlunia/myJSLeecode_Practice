//<img id="img1" src="default.jpg" data-src="./a.jpg" width="20px" height="20px" />

//一张图片
// let img =document.getElementById('img1')
// function lazyload(){
//     let clientHeight=document.documentElement.clientHeight
//     let scrollTop=document.documentElement.scrollTop
//     let offsetTop=img.offsetTop
//     if(offsetTop<clientHeight+scrollTop){
//         if(img.getAttribute('src')==="defult.jpg"){
//             img.src=img.getAttribute("data-src")
//         }
//     }
// }
// img.addEventListener('scroll',lazyload)


//多张图片或者瀑布流
let imgs=document.getElementsByTagName('img')
let count=0 //提升性能

function lazyload(){
    let clientHeight=document.documentElement.clientHeight
    let scrollTop=document.documentElement.scrollTop
    for(let i=count;i<imgs.length;i++){
        let img=imgs[i]
        let imgTop=img.offsetTop
        if(imgTop<clientHeight+scrollTop){
            if(img.getAttribute('src')==="default.jpg"){
                img.setAttribute('src',img.getAttribute('data-src'))
                count++
            }
        }
    }
}
window.addEventListener("scroll",lazyload)