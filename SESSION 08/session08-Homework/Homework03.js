// Viết chương trình hiển thị các số từ 1 đến 100 lên màn hình console. 
// Nếu số đó chia hết cho 3 thì hiển thị là “Fizz”,
// nếu số đó chia hết cho 5 thì hiển thị là “Buzz”.
//  Nếu số đó chia hết cho 3 và 5 thì hiển thị “FizzBuzz”.



let n = Number(prompt("Nhập vào số nguyên dương 100: "));

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {    
      console.log(i + " (Fizz)");
    } else if (i % 5 === 0) {      
      console.log(i + " (Buzz)");
    } else if (i % 3 === 0 && i % 5 === 0) {    
      console.log(i + " (FizzBuzz)");
    } else {
      console.log(i);
    }
  }