import java.io.*;
import java.util.HashSet;
import java.util.Set;
import java.lang.*;

public class stats{
    public static Set<String> read(String txtFile){
        Set<String> data = new HashSet<>();
        BufferedReader bufferedReader;
        String line = "";
        try {
            FileReader fileReader = new FileReader(txtFile);
            bufferedReader = new BufferedReader(fileReader);

            while((line = bufferedReader.readLine()) != null) {
                data.add(line);
            } 

            bufferedReader.close();
        }
        catch(Exception e) {
            System.out.println("Please use a valid file");
        }

        return data;
    }

    public static Set<String> target(Set<String> dataSet, String target) {
        Set<String> data = new HashSet<>();
        int count = 0;

        for(String s: dataSet) {
            if(s.contains(target)) {
                data.add(s);
            }
            else {
                count++;
            }
        }

        System.out.println("Eliminated " + count + " log entries");
        return data;
    }

    public static int count(Set<String> data, String target) {
        int counter = 0;
        for(String s: data) {
            if(s.contains(target)) {
                counter++;
            }
        }
        return counter;
    }

    public static String generateReport(Set<String> dataSet) {
        StringBuilder stringBuilder = new StringBuilder();
        Set<String> data = new HashSet<>();
        String[] methods = new String[]{"FacialRecognition", "Fingerprint", "Password", "OTP"};

        //Suppress output stream
        PrintStream dummyStream = new PrintStream(new OutputStream(){
            public void write(int b) {
                // no output
            }
        });
        //normal output stream
        PrintStream originalStream = System.out;
        int index = 0;

        stringBuilder.append("----------------------------------------\n\n");
        for(String s: methods) {
            data = dataSet;
            stringBuilder.append("---------- " + s + " ----------\n");
            stringBuilder.append(count(dataSet, s) + " using " + s + "\n");

            System.setOut(dummyStream);
            data = target(data, s);
            System.setOut(originalStream);

            double success =    count(data, "true");
            double fail = count(data, "false");

            
            double percent = fail/(success + fail) * 100;

            stringBuilder.append(count(data, "false") + " failed attempts\n");
            stringBuilder.append(count(data, "true") + " successful attempts\n");
            stringBuilder.append( ((int) percent) + "% failed attempts\n\n");
            index++;
        }



        return stringBuilder.toString();
    }
}