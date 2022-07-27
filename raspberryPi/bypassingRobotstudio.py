import abb
import bypassingFunctions as by
xml = 'order.xml'
test = "127.0.0.1"
real = "192.168.125.1"
R = abb.Robot(ip = test, port =5000)
L = abb.Robot(ip = test,port = 5001)

#R.send("20 #")


availableCoffees = ['americano', 'latte', 'flat_white']
availableEspressos = ['espresso']
availableWaters = ['hot_water','hot_chocolate']
by.main(xml, availableCoffees, availableEspressos, availableWaters,R,L)
