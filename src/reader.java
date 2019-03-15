/* Java Program Example - Read and Display File's Contents */
		
import java.util.Scanner;
import java.io.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class reader
{
    public void read(String type){
        String fname;
        Scanner scan = new Scanner(System.in);
        
        /* enter filename with extension to open and read its content */
        
        System.out.print("Enter File Name to Open (with extension like file.txt) : ");
        //fname = scan.nextLine();
        fname = "Logs3.txt";
        
        /* this will reference only one line at a time */
        
        
       
            /* FileReader reads text files in the default encoding */
            try(FileReader fileReader = new FileReader(fname))
            {
               
                String searchParam = type;
                reportStat(searchParam,fileReader);
                /*FileReader fileReader2 = new FileReader(fname);
                searchParam = "Winterfell";
                reportStat(searchParam,fileReader2);
                FileReader fileReader3 = new FileReader(fname);
                searchParam = "Deposit";
                reportStat(searchParam,fileReader3);*/
            }
            catch(IOException ex){
                System.out.println("Error reading file");
            }
        }  


public static void reportStat(String text ,FileReader fileReader)
{
     /* always wrap the FileReader in BufferedReader */ 
            try (BufferedReader bufferedReader = new BufferedReader(fileReader)) 
            {
                int countT= 0;
                String line = null;
                while((line = bufferedReader.readLine()) != null)
                {
                    //System.out.println(line);
                   // String delimiter = " ";
                    
                    Pattern pattern = Pattern.compile(text);
                    Matcher temp = pattern.matcher(line);
                    //String[] result = pattern.split(line);
                    //for(String temp: result)
                    while(temp.find()){
                        for(int i= 1;i<temp.groupCount();i++)
                            System.out.println(temp.group());
                        countT++;
                        System.out.println(temp.toString());
                    }
                }
                // always close the file after use 
                bufferedReader.close();
                System.out.println("There are: "+ countT +" "+ text + " transactions");
            }
            catch(IOException ex)
                {
                    System.out.println("Error reading file");
                }
        
}

} 