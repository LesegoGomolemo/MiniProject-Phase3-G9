import random

numLines = input("Enter number of log lines: ")


file = open("Logs3.txt", "w")
for x in range(numLines):
    eventStatus = ["200", "500"]
    deviceID = ["Hatfield", "Westeros", "IronIslands", "HighGarden", "Winterfell", "Honeydew"]
    event   = ["Withdrawal", "MiniStatement", "Deposit"]

    file.write("logID:p")
    for x in range(10):
        file.write(str(random.randint(0, 10)))

    file.write(",time:" + str(random.randint(2010, 2019)) + "-" + str(random.randint(0, 12)) + "-" + str(random.randint(0, 30)) + " ")
    file.write(str(random.randint(0, 24)) + ":" + str(random.randint(0, 60)) + ":" + str(random.randint(0, 60)) + ":" + str(random.randint(0, 999)))

    file.write(",deviceID:" + deviceID[random.randint(0, len(deviceID) - 1)] + ",userID:")
    for x in range(5):
        file.write(str(random.randint(0, 10)))

    file.write(",accountNum:")
    for x in range(6):
        file.write(str(random.randint(0, 10)))

    
    file.write(",event:" + event[random.randint(0, len(event) - 1)] + ",")
    file.write("eventStatus:" + eventStatus[random.randint(0, len(eventStatus) - 1)])
    file.write("\n")

file.close() 