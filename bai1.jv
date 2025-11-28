import java.util.Scanner;

public class bai1 {
    public static void main(String[] args) {
        Scanner banPhim = new Scanner(System.in);

        // Hướng dẫn nhập số phần tử
        System.out.println("Chương trình tính hiệu tổng số chẵn và tổng số lẻ trong mảng.");
        System.out.print("Nhập số phần tử n (n <= 20): ");
        int soPhanTu = banPhim.nextInt();
        if (soPhanTu < 1 || soPhanTu > 20) {
            System.out.println("Lỗi: n phải từ 1 đến 20. Chương trình kết thúc.");
            return;
        }

        // Hướng dẫn nhập mảng
        int[] mangSo = new int[soPhanTu];
        System.out.println("Nhập " + soPhanTu + " số nguyên (mỗi số trên một dòng):");
        for (int i = 0; i < soPhanTu; i++) {
            System.out.print("Số thứ " + (i + 1) + ": ");
            mangSo[i] = banPhim.nextInt();
        }

        // Hiển thị mảng
        System.out.println("\n Mảng đã nhập:");
        hienThiMang(mangSo);

        // Tính toán và hiển thị kết quả
        System.out.println("\n Kết quả:");
        tinhVaHienThiHieu(mangSo);

        banPhim.close();
    }

    // Phương thức hiển thị mảng
    private static void hienThiMang(int[] mang) {
        System.out.print("[");
        for (int i = 0; i < mang.length; i++) {
            System.out.print(mang[i]);
            if (i < mang.length - 1) {
                System.out.print(",");
            }
        }
        System.out.println("]");
    }

    // Phương thức tính tổng chẵn, lẻ và hiển thị hiệu
    private static void tinhVaHienThiHieu(int[] mang) {
        int tongChan = 0;
        int tongLe = 0;
        StringBuilder chuoiChan = new StringBuilder();
        StringBuilder chuoiLe = new StringBuilder();

        for (int so : mang) {
            if (so % 2 == 0) {
                tongChan += so;
                if (chuoiChan.length() > 0) {
                    chuoiChan.append("+");
                }
                chuoiChan.append(so);
            } else {
                tongLe += so;
                if (chuoiLe.length() > 0) {
                    chuoiLe.append("+");
                }
                chuoiLe.append(so);
            }
        }

        // Hiển thị kết quả với hướng dẫn
        System.out.println("Tổng số chẵn: " + tongChan);
        System.out.println("Tổng số lẻ: " + tongLe);
        System.out.println("Hiệu (Tổng chẵn - Tổng lẻ): " + (tongChan - tongLe));
        System.out.println("Chi tiết: (" + chuoiChan + ")-(" + chuoiLe + ") = " + (tongChan - tongLe));
    }
}
