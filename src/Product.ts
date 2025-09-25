interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}
const products: Product[] = [
    {id: 1, name: "Laptop", price: 1000, category: "Điện tử"},
    {id: 2, name: "Bánh Mì", price: 2382, category: "Thực phẩm"},
    {id: 3, name: "Điện thoại", price: 3432, category: "Điện tử"},
    {id: 4, name: "Bàn phím", price: 4564, category: "Điện tử"},
    {id: 5, name: "Màn hình", price: 9645, category: "Điện tử"},
];
//FilterByCategory
function FilterByCategory(list: Product[], category: string): Product[] {
    return list.filter(p => p.category === category);
}
//Tổng giá trị
function calculateTotalPrice(list: Product[]): number {
    return list.reduce((sum, p) => sum + p.price, 0);
}
//Min - Max
function findMinMax(list: Product[]): {min: Product; max: Product} {
    if(list.length === 0) throw new Error("Danh sách trống");

    let min = list[0];
    let max = list[0];

    for(let p of list) {
        if(p.price < min.price) min = p;
        if(p.price > max.price) max = p;
    }
    return {min, max};
}
console.log("Danh sách điện tử:", FilterByCategory(products, "Điện tử"));
console.log("Tổng giá trị", calculateTotalPrice(products));
console.log("Min, Max", findMinMax(products));
