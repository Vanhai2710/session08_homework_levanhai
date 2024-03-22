// Viết chương trình yêu cầu nhập vào hai số nguyên dương a và b,
// In ra các số chia hết cho b trong khoảng  từ 1 đến a lên màn hình console.


let a = Number(prompt("Nhập số nguyên dương a."));
let b = Number(prompt("Nhập số nguyên dương b."));

for (let i = 1; i <= a; i++) 
    if (i % b == 0) {
        console.log(i);
    }
