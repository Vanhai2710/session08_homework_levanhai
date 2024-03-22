// Viết chương trình yêu cầu người dùng nhập vào một số bất kỳ,
// kiểm tra xem số vừa nhập có phải số hoàn hảo không và in kết quả ra màn hình console.


let n = +prompt("Nhập vào một số bất kì");
let sum = 0;
for (let i = 1; i < n; i++) {
  if (n % i === 0) {
    sum = sum + i;
  }
}
if (sum === n) {
  console.log(n + " là số hoàn hảo");
} else {
  console.log(n + " Không phải là số hoàn hảo");
}