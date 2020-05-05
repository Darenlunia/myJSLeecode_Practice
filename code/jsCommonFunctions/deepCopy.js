function deepCopy(obj){
    if(typeof obj !== 'object' || obj===null){
        return obj
    }
    let result = obj instanceof 'array'? []:{}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepCppy(obj[key])          
        }
    }
    return result
}