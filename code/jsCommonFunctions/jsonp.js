//前端
function geturl(url,params,callback){//拼接url
    let res=url+'?'
    for(let i=0;i<params.length;i++){
            res+=i+'='+params[i]+'&'
    }   
    return res+'callback='+callback
}
function jsonp({url,params}){
    return new Promise((resolve,reject)=>{
        callback=Math.floor(Math.random().toString().splice(2))
        let e= document.createElement('script')
        e.src=geturl(url,params,callback)
        document.body.appendChild(e)
        window.callback=(data)=>{
            resolve(data)
            document.removeChild(e)
        }
    })
}

//服务端
let express=require('express')
let app=express()
app.get('/',function(req,res){
    let {a,b,callback}=req.query
    a=a+1
    b=b+1
    res.send(`${callback}("数据包")`)
})
app.listen(3000)