import abb
import bypassingFunctions as by

#Change these to the correct locaiton of the files order.xml and orderComplete.xml
xml = '/home/pi/Documents/User interface/order.xml'
orderCompleteXML = '/home/pi/Documents/User interface/orderComplete.xml'
#xml = 'C:/Users/ashdo/Documents/GitHub/coffeeRobot/User interface/order.xml'
#orderCompleteXML = "C:/Users/ashdo/Documents/GitHub/coffeeRobot/User interface/orderComplete.xml"

#Change between test and real ips for whether you want to use virtual controller or real robot
test = "127.0.0.1"
real = "192.168.125.1"
R = abb.Robot(ip = real, port =5000)
L = abb.Robot(ip = real,port = 5001)

#R.send("20 #")

#Change these based on what coffees are available at the time
availableCoffees = ['americano', 'latte', 'flat_white']
availableEspressos = ['espresso']
availableWaters = ['hot_water','hot_chocolate']
#Test coffee leave empty 
availableTest = ['test']

#Do not alter this line it calls the backend script
by.main(xml,orderCompleteXML, availableCoffees, availableEspressos, availableWaters,availableTest,R,L)
