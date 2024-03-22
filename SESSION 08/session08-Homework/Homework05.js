// Tạo số ngẫu nhiên từ 1 đến 10
let randumNumber = Math.floor(Math.random() * 10) + 1;

// Cho phép người dùng nhập số
while (true) {
    let n = parseInt(prompt("Nhập vào một số: "));

    // So sánh số người dùng nhập với số ngẫu nhiên
    if (n > randumNumber) {
        console.log("Số bạn nhập lớn hơn số ngẫu nhiên.");
    } else if (n < randumNumber) {
        console.log("Số bạn nhập nhỏ hơn số ngẫu nhiên.");
    } else {
        // Thoát vòng lặp khi người dùng nhập đúng số ngẫu nhiên
        console.log(" bạn đã đoán đúng số ngẫu nhiên!");
        break;
    }
}