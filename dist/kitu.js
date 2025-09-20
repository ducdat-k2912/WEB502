var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var demKyTu = function (str, char) {
    return [...str].filter(c => c === char).length;
};
console.log(demKyTu("hello world", "l"));
console.log(demKyTu("ducdat", "d"));
