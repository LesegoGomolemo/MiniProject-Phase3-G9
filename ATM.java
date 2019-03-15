public class ATM {
  public String serialNum = "A";
  public String area;
  public double withdrawals;
  public double available;
  public double capacity;
  public String status;
  int random1;
  double random2;

  String[] areas = {"Hatfield", "Brooklyn", "Lynnwood", "Garsfontein", "Faerie Glen", "Menlyn", "Sunnyside", "Queenswood", "Centurion", "Willows"};

    ATM() {
      for(int i = 0; i < 8; i++) {
        random1 = (int)(Math.random() * 9 + 0);
        serialNum += random1;
      }

      random1 = (int)(Math.random() * 9 + 0);
      area = areas[random1];

      withdrawals = (int)(Math.random() * 250000 + 10000);

      available = (int)(Math.random() * 250000 + 0);

      capacity = (int)(Math.random() * 1000000 + 750000);

      random2 = (int)(Math.random() * 9 + 0);
      if(random2 < 8) status = "Online";
      else status = "Offline";
  }

  public void printLogs() {
    System.out.println(serialNum + " " + area + " R" + withdrawals + " R" + available + " R" + capacity + status);
  }
}
