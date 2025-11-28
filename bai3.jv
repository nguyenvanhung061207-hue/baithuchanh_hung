import java.util.*;

public class bai3 {

    // Hàm kiểm tra số nguyên tố
    static boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i * i <= n; i++)
            if (n % i == 0) return false;
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhập mảng: ");
        String input = sc.nextLine();

        // Bỏ dấu [ và ]
        input = input.replace("[", "").replace("]", "");

        String[] parts = input.split(",");
        ArrayList<Integer> primes = new ArrayList<>();

        // Lọc số nguyên tố
        for (String p : parts) {
            int num = Integer.parseInt(p.trim());
            if (isPrime(num)) primes.add(num);
        }

        // Sắp xếp tăng dần
        Collections.sort(primes);

        System.out.println(primes);
    }
}
