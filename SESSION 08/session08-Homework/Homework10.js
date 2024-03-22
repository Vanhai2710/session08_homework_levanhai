// Viết chương trình yêu cầu người dùng nhập vào số nguyên dương bất kỳ, 
// in ra 2 tam giác vuông lên màn hình trình duyệt sao cho số hàng của tam giác bằng với số vừa nhập:


let number = +prompt("Nhập vào số nguyên dương bất kì.");
let i ;
let j ;
for(i = 1; i <= number; i++){
    for(j = 1; j <= number - i; j++) {
        print += " ";
    }
    for(j = 1; j <= i; j++){
        print += "*";
    }
    console.log(print);
    print = "";
}
