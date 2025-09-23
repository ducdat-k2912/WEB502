const sumArrow = (
    a: number = 11,
    b?: number,
    ...rest: number[]
): number => {
    let total = a + (b ?? 0);
    for(let num of rest){
        total += num;
    }
    return total;
};
console.log(sumArrow());
console.log(sumArrow(5));
console.log(sumArrow(5, 10));
console.log(sumArrow(5, 6, 7, 8));


