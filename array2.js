let vals = [1, 2, 3, 4, 5]

let newVals = []

for (let i=2; i<vals.length; i++){

    newVals.push(vals[i]);

}

newVals[0]=7

console.log('vals: ' + vals)

console.log('newVals: ' + newVals)