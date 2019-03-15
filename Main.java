public class Main {

    public static final String ANSI_RESET = "\u001B[0m";
    public static final String ANSI_BLACK = "\u001B[30m";
    public static final String ANSI_RED = "\u001B[31m";
    public static final String ANSI_GREEN = "\u001B[32m";
    public static final String ANSI_YELLOW = "\u001B[33m";
    public static final String ANSI_BLUE = "\u001B[34m";
    public static final String ANSI_PURPLE = "\u001B[35m";
    public static final String ANSI_CYAN = "\u001B[36m";
    public static final String ANSI_WHITE = "\u001B[37m";

    public static ATM[] atms = new ATM[20];

    public static int working;
    public static double dispensed;
    public static double available;
    public static double capacity;
    public static int faultyPercentage;

    public static void main(String[] args) {

      for(int i = 0; i < 20; i++)
        atms[i] = new ATM();

      for(int i = 0; i < 20; i++)
        if(atms[i].status.equals("Online")) working++;

      title();

      availability();

      cash();

      




    }

    public static void title() {
      System.out.println(ANSI_WHITE + "**************************************************************************");
      System.out.println("                    H E A R T B E A T   R E P O R T");
      System.out.println("**************************************************************************");
      System.out.println();

      System.out.println("1. Statistics:");
      System.out.println();
    }

    public static void availability() {
      System.out.println("  1.1. Number of registered ATMs: "); // add ATM array size
      System.out.println();
      System.out.println("    1.1.1. Number of functional ATMs: "); // good ATMs
      System.out.println("    1.1.2. Number of faulty ATMs: "); // bad ATMs
      System.out.println();

      faultyPercentage = (20 - working) * 5;

      System.out.print(ANSI_GREEN + "functional |");
      for(int i = 0; i < 50 - (faultyPercentage / 2); i++)
        System.out.print("-");

      System.out.print(ANSI_WHITE + "|");

      for(int i = 0; i < (faultyPercentage / 2); i++)
        System.out.print(ANSI_RED + "-");

      System.out.print("| faulty\n");
      System.out.println();

      System.out.println(ANSI_WHITE + "    Functional ATM Percentage: " + ANSI_GREEN +(100 - faultyPercentage));
      System.out.println(ANSI_WHITE + "    Faulty ATM Percentage: " + ANSI_RED + faultyPercentage);
    }

    public static void cash() {
      for(int i = 0; i < 20; i++)
        dispensed += atms[i].withdrawals;

      for(int i = 0; i < 20; i++)
        available += atms[i].available;

      System.out.println();
      System.out.println(ANSI_WHITE + "  1.2. Cash Totals:");
      System.out.println();
      System.out.println(ANSI_WHITE + "   1.2.1. Total Cash Dispensed: R" + dispensed); // sum of all withdrawals
      System.out.println(ANSI_WHITE + "   1.2.2. Total Cash Available: R" + available); // sum of all withdrawals
    }
}