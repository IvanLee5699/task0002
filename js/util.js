// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
	var clone = src;
    //对于Date
    if (src instanceof Date){
    	clone = new Date(src.getDate());
    	return clone;
    }
    //对于数组
    if (src instanceof Array){
    	clone = [];
    	for (var i in src){
    		clone[i] = arguments.callee(src[i]);
    	}
    	return clone;
    }
    //对于对象
    if (src instanceof Object){
    	clone = {};
    	for (var i in src){
    		clone[i] = arguments.callee(src[i]);
    	}
    	return clone;
    }
    //对于其他
    return clone;
}

// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var result = [];
    var obj = {};

    if (Object.prototype.toString.call(arr) !== "[object Array]") {
        return [];
    }

    if (arr.length <= 1) {
       return arr;
    }

    for (var i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
            result.push(arr[i]);
        }
    }
    console.log(obj)
    return result;
}
// 使用示例
var a = [1,3,5,7,6,7];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]

