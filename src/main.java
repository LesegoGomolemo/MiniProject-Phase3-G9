import java.util.Scanner;
import java.io.*;
import java.util.HashSet;
import java.util.Set;

public class main {
    public static void main(String[] input) {
        stats getStats = new stats();
        int i = 0;
        // reader stats = new reader();
        String filename = "log.txt";
        Set<String> data = getStats.read(filename);
        Set<String> targetFields = new HashSet<>();

        while(true) {
            

            System.out.println("=========================================");
            System.out.println("FNB Report");
            System.out.println("Please select an option: ");

            System.out.println("  1. Transactions");
            System.out.println("  2. Authentication");
            System.out.println("  3. Exit");
            System.out.print("User input: ");

            Scanner sc = new Scanner(System.in);
            i = sc.nextInt();

            System.out.println("=========================================");
            
            System.out.println();
            if(i == 1) {
                
            }
            else if(i == 2) {
                targetFields = data;
                System.out.println("Authentication stats");
                System.out.println("----------------------------------------------------------");

                System.out.println("Any field left blanks will be removed from the search parameters.");

                System.out.print("Enter a region: ");
                sc = new Scanner(System.in);
                String searchFields = sc.nextLine();

                targetFields = getStats.target(targetFields, searchFields);

                System.out.println();

                String report = "";
                report = stats.generateReport(targetFields);
                System.out.println(report);

                System.out.println("1. Print report     2. Exit");
                sc = new Scanner(System.in);
                int p = sc.nextInt();

                if(p == 1) {
                    try (Writer writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream("report.txt"), "utf-8"))) {
                        writer.write(report);
                        writer.close();
                    }
                    catch (IOException ex) {
                        // Report
                    }
                }
            }
            else if(i == 3) {
                break;
            }
            else {
                System.out.println("Please enter a valid option");
            }
            System.out.println();
        }
    }
}