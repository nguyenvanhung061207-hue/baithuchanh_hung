// Chương trình lọc và sắp xếp số nguyên tố từ mảng nhập vào.
// Chạy trong trình duyệt (browser console) hoặc Node.js với prompt (nếu hỗ trợ).

// Hàm kiểm tra số nguyên tố
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Nhập mảng dưới dạng chuỗi, ví dụ: [1,2,3,4]
let input = prompt("Nhập mảng: ");
if (input === null) {
    console.log("Không có input. Chương trình kết thúc.");
    return;
}

// Bỏ dấu [ và ]
input = input.replace("[", "").replace("]", "");

// Tách và chuyển thành mảng số
let parts = input.split(",");
let primes = [];

for (let p of parts) {
    let num = parseInt(p.trim());
    if (!isNaN(num) && isPrime(num)) {
        primes.push(num);
    }
}

// Sắp xếp tăng dần
primes.sort((a, b) => a - b);

console.log(primes);
