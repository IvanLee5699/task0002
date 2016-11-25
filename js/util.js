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
