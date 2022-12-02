//封装栈类
class Stack {
    constructor() {
        // 存放栈中的元素
        this.items = [];
    }
    //栈的相关操作
    //1.push():压栈操作,添加新元素到栈顶
    //在类中,方法写出来就是直接添加到该类的原型对象上
    push(element) {
        this.items.push(element);
    }
    //2.从栈中取出元素,pop在数组中是删除最后一个元素，返回该元素
    pop() {
        return this.items.pop();
    }
    //3.查看栈顶元素
    peek() {
        return this.items[this.items.length - 1];
    }
    //4.判断栈是否为空
    isEmpty() {
        return this.items.length === 0;
    }
    //5.获取栈中元素个数
    size() {
        return this.items.length;
    }
    //6.toString方法转字符串
    toString() {
        return this.items.join('');
    }
}