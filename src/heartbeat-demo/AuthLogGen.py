import random

numLines = input("Enter number of log lines: ")


file = open("log.txt", "w")
for x in range(numLines):
    authType = ["FacialRecognition", "Password", "OTP", "Fingerprint"]
    deviceID = ["Hatfield", "Westeros", "IronIslands", "HighGarden", "Winterfell", "Honeydew"]
    status   = ["true", "false"]

    file.write("method:" + authType[random.randint(0, len(authType) - 1)] + ",userID:")

    for x in range(5):
        file.write(str(random.randint(0, 10)))

    file.write(",deviceID:" + deviceID[random.randint(0, len(deviceID) - 1)] + ",")
    file.write("status:" + status[random.randint(0, len(status) - 1)] + ",")
    file.write("time:" + str(random.randint(2010, 2019)) + "-" + str(random.randint(0, 12)) + "-" + str(random.randint(0, 30)) + " ")
    file.write(str(random.randint(0, 24)) + ":" + str(random.randint(0, 60)) + ":" + str(random.randint(0, 60)) + ":" + str(random.randint(0, 999)))
    file.write("\n")

file.close() 