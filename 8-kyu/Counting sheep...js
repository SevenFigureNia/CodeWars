// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
    
function countSheeps(arrayOfSheeps) {
    let count = 0;
    for (let i = 0; i < arrayOfSheeps.length; i++) {
        if (arrayOfSheeps[i] === true) {
        count++;
        }
    }
    return count;
    }