// Viết chương trình yêu cầu người dùng nhập vào một số nguyên dương bất kỳ,
// in ra tất cả các số nguyên tố nhỏ hơn số vừa nhập ra màn hình console.


let n = +prompt("Nhập một số nguyên dương bất kì vào ô dưới đây.");
for (let i = 2; i < n; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  } else {
    console.log("Giá trị nhập vào không hợp lệ.");
  }
}