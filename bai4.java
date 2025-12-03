// Chương trình quản lý danh sách điện thoại.
// Chạy trong trình duyệt (browser console) hoặc Node.js với prompt (nếu hỗ trợ).

class Phone {
    constructor(maDienThoai, ten, hangSanXuat, gia) {
        this.maDienThoai = maDienThoai;
        this.ten = ten;
        this.hangSanXuat = hangSanXuat;
        this.gia = gia;
    }

    // Getters
    getMaDienThoai() {
        return this.maDienThoai;
    }

    getTen() {
        return this.ten;
    }

    getHangSanXuat() {
        return this.hangSanXuat;
    }

    getGia() {
        return this.gia;
    }

    // Setters
    setMaDienThoai(maDienThoai) {
        this.maDienThoai = maDienThoai;
    }

    setTen(ten) {
        this.ten = ten;
    }

    setHangSanXuat(hangSanXuat) {
        this.hangSanXuat = hangSanXuat;
    }

    setGia(gia) {
        this.gia = gia;
    }

    // toString method
    toString() {
        return "Mã điện thoại: " + this.maDienThoai + ", Tên: " + this.ten + ", Hãng sản xuất: " + this.hangSanXuat + ", Giá: " + this.gia;
    }
}

// Tạo danh sách điện thoại
let danhSachDienThoai = [];

// Thêm dữ liệu mẫu
danhSachDienThoai.push(new Phone("DT001", "iPhone 14", "Apple", 25000000));
danhSachDienThoai.push(new Phone("DT002", "Samsung Galaxy S23", "Samsung", 20000000));
danhSachDienThoai.push(new Phone("DT003", "Xiaomi 13", "Xiaomi", 15000000));
danhSachDienThoai.push(new Phone("DT004", "Oppo A57", "Oppo", 5000000));

// Sắp xếp danh sách theo tên điện thoại theo thứ tự alphabet
danhSachDienThoai.sort((a, b) => a.getTen().localeCompare(b.getTen()));

// Hiển thị danh sách
console.log("Danh sách điện thoại (sắp xếp theo tên):");
for (let phone of danhSachDienThoai) {
    console.log(phone.toString());
}

// Thêm mới 1 điện thoại
console.log("\nThêm mới điện thoại:");
let ma = prompt("Nhập mã điện thoại: ");
if (ma === null) {
    console.log("Không có input. Chương trình kết thúc.");
    return;
}
let ten = prompt("Nhập tên điện thoại: ");
if (ten === null) {
    console.log("Không có input. Chương trình kết thúc.");
    return;
}
let hang = prompt("Nhập hãng sản xuất: ");
if (hang === null) {
    console.log("Không có input. Chương trình kết thúc.");
    return;
}
let giaStr = prompt("Nhập giá: ");
if (giaStr === null) {
    console.log("Không có input. Chương trình kết thúc.");
    return;
}
let gia = parseFloat(giaStr);
if (isNaN(gia)) {
    console.log("Giá không hợp lệ. Chương trình kết thúc.");
    return;
}

// Thêm vào danh sách
danhSachDienThoai.push(new Phone(ma, ten, hang, gia));

// Sắp xếp lại
danhSachDienThoai.sort((a, b) => a.getTen().localeCompare(b.getTen()));

// Hiển thị danh sách mới
console.log("\nDanh sách điện thoại sau khi thêm mới (sắp xếp theo tên):");
for (let phone of danhSachDienThoai) {
    console.log(phone.toString());
}
