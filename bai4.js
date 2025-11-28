import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

class Phone {
    private String maDienThoai;
    private String ten;
    private String hangSanXuat;
    private double gia;

    // Constructor
    public Phone(String maDienThoai, String ten, String hangSanXuat, double gia) {
        this.maDienThoai = maDienThoai;
        this.ten = ten;
        this.hangSanXuat = hangSanXuat;
        this.gia = gia;
    }

    // Getters
    public String getMaDienThoai() {
        return maDienThoai;
    }

    public String getTen() {
        return ten;
    }

    public String getHangSanXuat() {
        return hangSanXuat;
    }

    public double getGia() {
        return gia;
    }

    // Setters
    public void setMaDienThoai(String maDienThoai) {
        this.maDienThoai = maDienThoai;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public void setHangSanXuat(String hangSanXuat) {
        this.hangSanXuat = hangSanXuat;
    }

    public void setGia(double gia) {
        this.gia = gia;
    }

    // toString method
    @Override
    public String toString() {
        return "Mã điện thoại: " + maDienThoai + ", Tên: " + ten + ", Hãng sản xuất: " + hangSanXuat + ", Giá: " + gia;
    }
}

public class bai4 {
    public static void main(String[] args) {
        ArrayList<Phone> danhSachDienThoai = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        // Thêm dữ liệu mẫu
        danhSachDienThoai.add(new Phone("DT001", "iPhone 14", "Apple", 25000000));
        danhSachDienThoai.add(new Phone("DT002", "Samsung Galaxy S23", "Samsung", 20000000));
        danhSachDienThoai.add(new Phone("DT003", "Xiaomi 13", "Xiaomi", 15000000));
        danhSachDienThoai.add(new Phone("DT004", "Oppo A57", "Oppo", 5000000));

        // Sắp xếp danh sách theo tên điện thoại theo thứ tự alphabet
        Collections.sort(danhSachDienThoai, Comparator.comparing(Phone::getTen));

        // Hiển thị danh sách
        System.out.println("Danh sách điện thoại (sắp xếp theo tên):");
        for (Phone phone : danhSachDienThoai) {
            System.out.println(phone);
        }

        // Thêm mới 1 điện thoại
        System.out.println("\nThêm mới điện thoại:");
        System.out.print("Nhập mã điện thoại: ");
        String ma = scanner.nextLine();
        System.out.print("Nhập tên điện thoại: ");
        String ten = scanner.nextLine();
        System.out.print("Nhập hãng sản xuất: ");
        String hang = scanner.nextLine();
        System.out.print("Nhập giá: ");
        double gia = scanner.nextDouble();

        // Thêm vào danh sách
        danhSachDienThoai.add(new Phone(ma, ten, hang, gia));

        // Sắp xếp lại
        Collections.sort(danhSachDienThoai, Comparator.comparing(Phone::getTen));

        // Hiển thị danh sách mới
        System.out.println("\nDanh sách điện thoại sau khi thêm mới (sắp xếp theo tên):");
        for (Phone phone : danhSachDienThoai) {
            System.out.println(phone);
        }

        scanner.close();
    }
}
