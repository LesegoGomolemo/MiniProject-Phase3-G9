/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package just;

import java.util.Random;

/**
 *
 * @author khoda
 */
public class LogFileGenerator {
    public static void main(String[] input)
    {
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
        for(int i = 0;i<100;i++)
        {
            //Log ID
            System.out.print("logID:" + String.format("%06d", i+1) );
            //Date
            System.out.print(", dateTime:" + (rDay.nextInt(31+1-1)+1) + "-" + (rMonth.nextInt(12+1-1)+1) + "-" + (rYear.nextInt(2018+1-2016)+2016));
            //Time
            System.out.print(" " + String.format("%02d",(rHr.nextInt(23+1-0)+0)) + ":" + String.format("%02d",(rMin.nextInt(59+1-0)+0)) + ":" + String.format("%02d",(rSec.nextInt(59+1-0)+0)));
            //Device ID
            System.out.print(", deviceID:" + String.format("%06d",(rDevice.nextInt(999999+1-111111)+111111)) );
            //User ID
            System.out.print(", userID:" + String.format("%05d",(rDevice.nextInt(99999+1-11111)+11111)) );
            //Event
            System.out.print(", event:");
            int event = rDevice.nextInt(3+1-1)+1;
            switch(event){case 1: System.out.print("Withdrawal");break; case 2: System.out.print("Deposit");break;  case 3: System.out.print("Balance Enquiry");break; default: System.out.print("Unsuccessful");break;}
            
            //Authentication
             System.out.print(", authenticationType:");
            int authentication = rAuthentication.nextInt(5+1-1)+1;
            switch(authentication)
            {
                case 1: System.out.print("NFC");break;  
                case 2: System.out.print("Pin");break;  
                case 3: System.out.print("Facial Recognition");break;   
                case 4: System.out.print("Finger Print");break;  
                case 5: System.out.print("OTP");break;
                case 6: System.out.print("Password");break;
                default: System.out.print("Fail");break;
            }
            
            System.out.println("");
        }
    }
}
