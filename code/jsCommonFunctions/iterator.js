//如为对象添加Iterator 接口;
//格式
/**
 * [Symbol.iterator](){}
 * return{next(){return{done,value}}}
 * done=true为遍历完毕
 */
let obj = {
    name: "XX",
    age: 20,
    job: 'teacher',
    [Symbol.iterator]() {
        const self = this;
        const keys = Object.keys(self);
        let index = 0;
        return {
            next() {
                if (index < keys.length) {
                    return {
                        value: self[keys[index++]],
                        done: false
                    };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};
 
for(let item of obj) {
    console.log(item); //XX  20  teacher
}
