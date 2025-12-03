// Chương trình đếm số ký tự in hoa trong chuỗi.
// Chạy trong trình duyệt (browser console) hoặc Node.js với prompt (nếu hỗ trợ).

// Nhập chuỗi
let s = prompt("Nhập chuỗi: ");
if (s === null) {
    console.log("Không có input. Chương trình kết thúc.");
    return;
}

let dem = 0;

for (let i = 0; i < s.length; i++) {
    let c = s[i];  // JavaScript truy cập ký tự trực tiếp
    if (c >= 'A' && c <= 'Z') {   // kiểm tra ký tự in hoa
        dem++;
    }
}

if (dem > 0) {
    console.log(dem);
} else {
    console.log("The Strings is not contain upper char");
}
