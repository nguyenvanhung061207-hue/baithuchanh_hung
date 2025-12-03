// Chương trình tính hiệu tổng số chẵn và tổng số lẻ trong mảng.
// Chạy trong trình duyệt (browser console) hoặc Node.js với prompt (nếu hỗ trợ).

// Nhập số phần tử
let soPhanTu = parseInt(prompt("Nhập số phần tử n (n <= 20): "));
if (isNaN(soPhanTu) || soPhanTu < 1 || soPhanTu > 20) {
    alert("Lỗi: n phải từ 1 đến 20. Chương trình kết thúc.");
    return;
}

// Nhập mảng
let mangSo = [];
for (let i = 0; i < soPhanTu; i++) {
    let num = parseInt(prompt("Số thứ " + (i + 1) + ": "));
    if (isNaN(num)) {
        alert("Lỗi: Vui lòng nhập số nguyên. Chương trình kết thúc.");
        return;
    }
    mangSo.push(num);
}

// Hiển thị mảng
console.log("\nMảng đã nhập:");
hienThiMang(mangSo);

// Tính toán và hiển thị kết quả
console.log("\nKết quả:");
tinhVaHienThiHieu(mangSo);

// Phương thức hiển thị mảng
function hienThiMang(mang) {
    console.log("[" + mang.join(",") + "]");
}

// Phương thức tính tổng chẵn, lẻ và hiển thị hiệu
function tinhVaHienThiHieu(mang) {
    let tongChan = 0;
    let tongLe = 0;
    let chuoiChan = [];
    let chuoiLe = [];

    for (let so of mang) {
        if (so % 2 === 0) {
            tongChan += so;
            chuoiChan.push(so);
        } else {
            tongLe += so;
            chuoiLe.push(so);
        }
    }

    // Hiển thị kết quả với hướng dẫn
    console.log("Tổng số chẵn: " + tongChan);
    console.log("Tổng số lẻ: " + tongLe);
    console.log("Hiệu (Tổng chẵn - Tổng lẻ): " + (tongChan - tongLe));
    console.log("Chi tiết: (" + chuoiChan.join("+") + ")-(" + chuoiLe.join("+") + ") = " + (tongChan - tongLe));
}
