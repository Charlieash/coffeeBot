import abb
import bypassingFunctions as by
xml = 'C:/Users/ashdo/Documents/GitHub/coffeeRobot/User interface/order.xml'
orderCompleteXML = "C:/Users/ashdo/Documents/GitHub/coffeeRobot/User interface/orderComplete.xml"
test = "127.0.0.1"
real = "192.168.125.1"
R = abb.Robot(ip = test, port =5000)
L = abb.Robot(ip = test,port = 5001)

#R.send("20 #")


availableCoffees = ['americano', 'latte', 'flat_white']
availableEspressos = ['espresso']
availableWaters = ['hot_water','hot_chocolate']
availableTest = ['test']
by.main(xml,orderCompleteXML, availableCoffees, availableEspressos, availableWaters,availableTest,R,L)
