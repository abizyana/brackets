module.exports = function check(str, bracketsConfig) {
    let array = str.split("");
    let stack = [];
    let opening = [];
    let closing = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        opening.push(bracketsConfig[i][0]);
        closing.push(bracketsConfig[i][1]);
    }

    for (let i = 0; i < array.length; i++) {
        if (opening.indexOf(array[i]) == closing.indexOf(array[i])) {
            if (stack[stack.length - 1] == array[i]) {
                stack.pop();
            } else {
                stack.push(array[i]);
            }
        } else if (opening.includes(array[i])) {
            stack.push(array[i]);
        } else if (stack.pop() != opening[closing.indexOf(array[i])]) {
            return false;
        }
    }

    if (stack.length > 0) {
        return false;
    } else {
        return true;
    }
};
