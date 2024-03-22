
// let year = prompt("Bạn sinh năm bao nhiêu???")
// console.log(year);

//data type conversion
//string --> number

// year = +year;
//year = Number(year);
//year = parseInt(year);


//dwgdtedgwgwdy
// NaN === NaN (true)
// if (Number.isNaN(year)) {
//     console.log("Đây là năm sinh không hợp lệ");
// } else {
//     console.log("Đây là năm sinh hợp lệ");
// }

//---------------------------------------------



// In ra màn hình console câu lệnh Hello World 1000 lần

console.log("Hello World");

//for...loop
//for (bộ 3 điều kiện lặp) {
       // Tác vụ cần phải lặp đi lặp lại
// }

// Bộ 3 Điều kiện lặp ==> Biến chạy i
// - Điểm bắt đầu của vong lặp
// - Điểm kết thúc của vòng lập
// - Bước nhảy

for(let i = 1; i <= 10; i = i + 1) {
    console.log("Hello World");
}
// lần lặp 1: i = 1, i = (1 <=10 | true) --> Hello world, i = 1 + 1 (2)
// lần lặp 2: i = 2, i = (2 <=10 | true) --> Hello world, i = 2 + 1 (3)
// lần lặp 3: i = 3, i = (3 <= 10 | true) --> Hello world, i = 3 + 1(4)
// ........
// lần lặp 10: i = 10, i = (10 <= 10 | true) --> Hello world, i = 10
// lần lặp 11: i = 11, i = (11 <= 10 | false) --> Dừng lại

// ------------------------
// Ex1:
// cho người dùng nhập vào 1 số n
// in ra dãy số từ 0 -> n

// giải:
// let n = Number(prompt("Nhập vào 1 số n bất kì"));
// // i = 0 --> n (0, 1, 2, 3, ..., n)
// for (let i = 0; i <= n; i = i +1) {
//     console.log(i);
// }
//-----------------------

// Ex2:
// cho người dùng nhập vào 1 số n
// tính tổng của dãy số A = 0 + 1 +2 ... + n
// in tổng A ra nàm hình console
// --------
// giải:
// let n = +prompt("Mời bạn nhập vào số n");
// let sum = 0;
// for (let i = 0; i <= n; i = i + 1) {
//     console.log('Lần lặp thứ ${i}, sum = ${sum} + ${i}');
//     sum = sum + i;
// }
// console.log();
// ---------
// lần lặp 1: i = 0 (0 <= 10 | true) , sum = 0 + 0 (0), i = 0 + 1 (1),
// lần lặp 2: i = 1 (1 <= 10 | true) , sum = 0 + 1 (1), i = 1 + 1 (2),
// lần lặp 3: i = 2 (2 <= 10 | true) , sum = 1 + 2 (3), i = 2 + 1 (3),
// lần lặp 4: i = 3 (3 <= 10 | true) , sum = 3 + 3 (6), i = 3 + 1 (4),
// .............
// lần lặp 11: i = 10 (10 <= 10 | true) , sum = 45 + 10 (55), i = 10 + 1 (11),
// lần lặp 12: i = 11 (11 <= 10 | false) Dừng

// --------------------------------------
// Ex3:
// Cho người dùng nhập vào 1 số n
// Tính tích B = 1234...*n
// In B ra màn hình console
// -------
// giải:
// let n = +prompt("Mời bạn nhập vào số n");
// let result = 1;
// for (let i = 1; i <= n; i = i + 1) {
//     result = result * i;
// }
// console.log(`B=${result}`);
// -------
// ------------------------------------------
// Ex4:
// Cho người dùng nhập vào 1 số n
// Tính C = 1^2 + 2^2 + 3^2 + ... n^2;
// In C ra màn hình console
// -------
// // gỉair:
// let n = +prompt("Mời bạn nhập số n");
// let result = 0;
// for(let i = 1; i <= n; i = i + 1) {
//     result = result + i ** 2;
// }
// console.log(`C=${result}`);
// -------
// ------------------------------------------------
// Ex5:
// Cho người dùng nhập vào 1 số n
// In ra màn hình console các số từ 1 - n
// theo dạng chẵn lẻ
// VD: 
// 1 - lẻ
// 2 - chẵn
// 3 - lẻ
//  ....
// --------
// // giải:
// let n = +prompt("Mời bạn nhập vào số n");
// for (let i = 1; i <= n; i = i +1) {
//     if(i % 2 === 0) {
//         console.log(`${i} - chẵn`);
//     } else {
//         console.log(`${i} - lẽ`);
//     }
// }
// --------------------------------------------------------



// while(condition) {
//     Tác vụ cần lặp
// }
// ----------
// VD: cho người dùng nhập vào câu trả lời 
// dành cho câu hỏi Do you love me??
// lặp đi lặp lại quá trình nhập vào đó 
// chỉ dừng lại khi người dùng nhập vào "yes"
// // ------
// let answer = prompt("Do you love me???");
// while (answer !== "yes") {
//     answer = prompt("Do you love me???");
//     if (answer === "yes") {
//         break;
//     }
// }
// ----------
// -----------
//  VD:
// cho biến result = 10;
// cho người dùng nhập vào 1 số n ngẫu nhiên
// lặp lại quá trình nhập n và kiểm tra
// n > result => In ra (Too big)
// n < result => In ra (Too small)
// n === result => In ra (Bingo)
// -----
let result = 10;
let loop = true;
while (loop) {
    let n = +prompt("Mời bạn nhập vào số n");
    if (n === result) {
      console.log("Bingo");
      loop = false;
      break;
  } else if (n < result) {
    console.log("Too small");
  } else {
    console.log("Too big");
  }
}
// -----------


