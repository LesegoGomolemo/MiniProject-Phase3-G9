import java.util.Random;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
/**
 *
 * @author khoda
 */
public class LogFileGenerator {
    public static void main(String[] input)
    {
        //Create new file
        try {
            //File object with desired name
            File myObj = new File("Log_File.txt");
            if (myObj.createNewFile()) {
                
            }
            else {
                System.out.println("File already exists.");
            }
        }
        catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        
        Random rLogID = new Random();
        Random rHr = new Random();
        Random rMin = new Random();
        Random rSec = new Random();
        Random rDay = new Random();
        Random rMonth = new Random();
        Random rYear = new Random();
        Random rDevice = new Random();
        Random rUser = new Random();
        Random rAccount = new Random();
        Random rTransaction = new Random();
        Random rAuthentication = new Random();
        
        //Print log file:
        //For Random function:
        //int randomNumber = random.nextInt(max + 1 - min) + min;
        String file = "";
        for(int i = 0;i<100;i++)
        {
            //Log ID
            file += "logID:" + String.format("%06d", i+1);
            //Date
            file += ", dateTime:" + (rDay.nextInt(31+1-1)+1) + "-" + (rMonth.nextInt(12+1-1)+1) + "-" + (rYear.nextInt(2018+1-2016)+2016);
            //Time
            file += " " + String.format("%02d",(rHr.nextInt(23+1-0)+0)) + ":" + String.format("%02d",(rMin.nextInt(59+1-0)+0)) + ":" + String.format("%02d",(rSec.nextInt(59+1-0)+0));
            //Device ID
            file += ", deviceID:" + String.format("%06d",(rDevice.nextInt(999999+1-111111)+111111)) ;
            //User ID
            file += ", userID:" + String.format("%05d",(rDevice.nextInt(99999+1-11111)+11111)) ;
            //Event
            file += ", event:";
            int event = rDevice.nextInt(3+1-1)+1;
            switch(event){
                case 1: file += "Withdrawal";break; 
                case 2: file += "Deposit";break;  
                case 3: file += "Balance Enquiry";break; 
                default: file += "Unsuccessful";break;
            }
            
            //Authentication
             file += ", authenticationType:";
            int authentication = rAuthentication.nextInt(5+1-1)+1;
            switch(authentication)
            {
                case 1: file += "NFC";break;  
                case 2: file += "Pin";break;  
                case 3: file += "Facial Recognition";break;   
                case 4: file += "Finger Print";break;  
                case 5: file += "OTP";break;
                case 6: file += "Password";break;
                default: file += "Fail";break;
            }
            
            file += "\n";
        }
        
        //Print log file
        System.out.println(file);
        
        //Write to file
        try {
            FileWriter myWriter = new FileWriter("Log_File.txt");
            myWriter.write(file);
            myWriter.close();
        }
        catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
