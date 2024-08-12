const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    'Dell 1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop Dell',
    'HTC low price Phone',
    'Dell purple color phone with Laptop'
];
const searching = 'laptop';

// indexOf

const output = [];
for(const product of products){
    if(product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) !=-1){
        // output.push(product);
    }
}

// console.log(output);
for(const product of products){
    if(product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())){
        // output.push(product);
    }
}
console.log(output);

// starts with

for(const product of products){
    if(product.toLocaleLowerCase().startsWith(searching.toLocaleLowerCase())){
        // output.push(product);
    }
}
console.log(output);

// Endswith
for(const product of products){
    if(product.toLocaleLowerCase().endsWith(searching.toLocaleLowerCase())){
        output.push(product);
    }
}
console.log(output);