function calculateTaxes(income) {
    if (!Number.isFinite(income)) {
        throw new Error('infinte income');
    }
    if (income > 30000) {
        return income * 0.25;
    }
    else {
        return income * 0.15;
    }
}

function removeDupes(values) {
    const arr = [...new Set(values)];
    if (typeof values === 'string') return arr.join('');
    return arr;
}

function remove(arr, val) {
    return arr.filter((el) => {
        return el !== val
    })
}

let usernames = [];
let input = document.getElementById('username');

function submitForm() {
    usernames.push(input.value);
}

//side effects with outside arr
function append(arr, val) {
    arr.push(val);
}

//no side effects
function appendPure(arr, val) {
    return [...arr, val];
}