// function getRandomElement<T> (item: T[]):T {
//  let randomIndex = Math.floor(Math.random() * item.length)
//  return item[randomIndex]
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// let numbers = [1, 5, 7, 4, 2, 9]
// let colors = ['Red', "Green", "Yellow"];
// let randomEle = getRandomElement(numbers);
// console.log( randomEle);
// console.log(typeof randomEle);
function merge(obj1, Obj2) {
    return __assign(__assign({}, obj1), Obj2);
}
var result = merge({
    name: "John",
}, {
    jobTitle: "Wrestler"
});
console.log(result);
