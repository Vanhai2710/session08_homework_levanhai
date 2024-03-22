// -> Viết chương trình yêu cầu người dùng nhập vào số nguyên dương bất kỳ, 
//    in ra dãy fibonacci lên màn hình console sao cho tổng giá trị của dãy nhỏ hơn giá trị vừa nhập.

// -> Ví dụ: Nhập n = 10, Dãy fibonacci: 0 1 1 2 3 5 8 . Tổng dãy fibonacci bé hơn 10 là: 0 1 1 2 3



 let number = +prompt("Nhập số nguyên dương bất kì.");

 if (!isNaN(number) && number > 0) {
    let f0 = 0;
    let f1 = 1;
     let sum = 1;
     let fibonacci = `${f0} ${f1} `;


     for (let i = 1; i < number; i++){
         let fn = f0 + f1;
         f0 = f1;
         f1 = fn;
         sum += fn;
        if(sum >= number){
             break;
        }
         fibonacci += `${fn} `;
    }
     console.log(fibonacci);

    }
