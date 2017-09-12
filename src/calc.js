function output(value){
    console.log(value);
}

module.exports = {
    sum: (a, b) => {
        let sum = a + b;
        output(sum);
        return sum;
    },
    test: () => {
        console.log("calc module test");
    }
};