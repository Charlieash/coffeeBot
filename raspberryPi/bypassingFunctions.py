import xml.etree.ElementTree as ET
import time
from threading import Thread
# import smbus // needed for raspberry pi

#-----------------------------------------------------------------------------------------------------------------------------------------
#The drink object defines properties of every type of drink produced by coffeeBot
#-----------------------------------------------------------------------------------------------------------------------------------------
class drink:
    def __init__(self, coffeeInput = "americano_x2", id = 1): 
    #coffeeInput gets immediately overwritten so this value does not matter
        try:
            self.__setCoffee(coffeeInput.split("x")[0])
            self.__amount = coffeeInput.split("x")[1]
            self.__amount = self.__createInt(self.__amount)
        #if there is more than one of a coffee it will contain an x 
        except:
            self.__name = coffeeInput
            self.__amount = 1
            #otherwise the amount of the coffee is set to one
        self.__name = self.__tidyString(self.__name)
        #replaces all the underscores in the string with spaces to make it presentable
        self.__timeWeighting=2
        #default time weighting

    def __tidyString(self, string):
        string = string.replace("_", " ")
        #replaces underscores with spaces and returns the tidy string
        return(string)
    
    def __createInt(self, amount):
        try:
            int(amount)
        except:
            self.__error(code = 1)
            return()
        return(int(amount))
        #changes from a string to an integer if it is possible

    def __setAmount(self, amount):
        try: 
            int(amount)
            self.__amount = amount
        except:
            self.__error(code = 1)
        return()
        #sets the amount value for the drinks but checks that it is a number first

    def __setCoffee(self, coffee):
        try:
            str(coffee)
            self.__name = coffee
        except: 
            self.__error(code = 2)
        #sets the type of drink but checks it is a string first

    def setTimeWeighting(self, time):
        try:
            int(time)
            self.__timeWeighting = time
        except:
            self.__error(code = 3)
        #sets the amount of time it takes to complete a drink 

    def setOrderWeighting(self, orderWeight):
        try:
            int(orderWeight)
            self.__orderWeighting = orderWeight
        except:
            self.__error(code=4)
        #sets the order number of the coffee to know what order the coffee came from

    def changeAmount(self, change):
        try:
            int(change)
            self.__amount += change
        except:
            self.__error(code=5)
        #increments the amount of a drink
        

    def getAmount(self):
        return(self.__amount)

    def getName(self):
        return(self.__name)

    def getOrderWeight(self):
        return(self.__orderWeighting)

    def getTimeWeight(self):
        return(self.__timeWeighting)
    
    #these functions return values so that the program can access values without risk of corruption

    def __error(code):
        if(code ==1):
            print("Error: not valid integer for amount")
        elif(code ==2):
            print("Error: not valid string for name")
        elif(code == 3):
            print("Error: not a valid integer for time")
        elif(code == 4):
            print("Error: not a valid integer for order weight")
        elif(code == 5):
            print("Error: invalid integer for change")
        return()
    #error codes in case the user enters an invalid integer for variables 

#-----------------------------------------------------------------------------------------------------------------------------------------
#Sub-classes of drink
#-----------------------------------------------------------------------------------------------------------------------------------------
#Different classes of coffees require different movements but a few are the same 
#So there are different subclasses to identify the type of coffee/drink 
class coffee(drink):
    def __init__(self,coffeeInput="americano_x2", id=1):
        super().__init__(coffeeInput, id)
        self.setTimeWeighting(3)
        self.setOrderWeighting(id)
    def movement(self,A):
        self.firstMovement(A)
        createCoffee("coffee")
    def firstMovement(self,A):
        A.send("20 #")
        

class espresso(drink):
    def __init__(self, coffeeInput="espresso_x2", id =1):
        super().__init__(coffeeInput)
        self.setTimeWeighting(1)
        self.setOrderWeighting(id)
    def movement(self,A):
        self.firstMovement(A)
        createCoffee("espresso")
    def firstMovement(self,A):
        A.send("20 #")

class hotWater(drink):
    def __init__(self, coffeeInput="hot_water_x2", id =1):
        super().__init__(coffeeInput)
        self.setTimeWeighting(2)
        self.setOrderWeighting(id)
    def movement(self,A):
        self.firstMovement(A)
        createCoffee("hotWater")
    def firstMovement(self,A):
        A.send("20 #")

class test(drink):
    def __init__(self, coffeeInput="test", id =1):
        super().__init__(coffeeInput)
        self.setTimeWeighting(2)
        self.setOrderWeighting(id)
    def movement(self,A):
        self.firstMovement(A)
        createCoffee("test")
    def firstMovement(self,A):
        A.send("25 #")

#-----------------------------------------------------------------------------------------------------------------------------------------
#Functions 
#-----------------------------------------------------------------------------------------------------------------------------------------


#This function generates an array of objects for the different subclasses of drinks
#This function takes 6 different inputted variables and outputs one consise list        
def filterOrder(availableCoffees, availableEspressos, availableWaters,availableTest, coffees, id):
    orders = []
    for orderUnfiltered in range(len(coffees)):

        for c in range(len(availableCoffees)):
            if(availableCoffees[c] in coffees[orderUnfiltered]):
                orders.append(coffee(coffees[orderUnfiltered],id))
        for e in range(len(availableEspressos)):
            if(availableEspressos[e] in coffees[orderUnfiltered]):
                orders.append(espresso(coffees[orderUnfiltered],id))
        for w in range(len(availableWaters)):
            if(availableWaters[w] in coffees[orderUnfiltered]):
                orders.append(hotWater(coffees[orderUnfiltered],id))
        for t in range(len(availableTest)):
            if(availableTest[t] in coffees[orderUnfiltered]):
                orders.append(test(coffees[orderUnfiltered],id))

        #Printing data of each drink for testing purposes 

        #print(orders[orderUnfiltered].getName())
        #print(orders[orderUnfiltered].getAmount())
        #print(orders[orderUnfiltered].getTimeWeight())
        #print(orders[orderUnfiltered].getOrderWeight())

    return(orders)

#This function opens the xml files and returns the order id and order contents
def openXML(xml):
    tree = ET.parse(xml)
    root = tree.getroot()
    #print(root.text)
    #print(root[0].text)
    return(root.text, root[0].text)


#multiplies the order number by the time weighting for the coffee, puts them in an array and sorts it
def coffeeBotAlgoritm(orders):
    weightings = []
    for order in range(len(orders)):
        for amount in range(orders[order].getAmount()):
            weightings.append([int(orders[order].getTimeWeight()) * int(orders[order].getOrderWeight()),orders[order].getName()])
    weightings.sort(key=lambda x:x[0])
    #print(weightings)
    return(weightings)

#This function adds element to the array as new orders come in
def addToArray(xml,availableCoffees, availableEspressos,availableWaters,availableTest, oldId, orders, weightedOrders):
    data = openXML(xml)
    order = data[0]
    coffees = order.split(" ")
    id = data[1]
    if(id != oldId):
        orders.extend(filterOrder(availableCoffees, availableEspressos, availableWaters,availableTest, coffees, id))
        weightedOrders=(coffeeBotAlgoritm(orders))
        print(weightedOrders)
        oldId = id
    return(orders, weightedOrders, oldId)

#This function exists to be called by multipinging
def foo(A):
    result = A.ping()
    return(result)

#This class is a subclass of the thread class created by the threading library 
#It adds the ability to return a value from the threaded function foo
class ThreadWithReturnValue(Thread):
    def __init__(self, group=None, target=None, name=None,
                 args=(), kwargs={}, Verbose=None):
        Thread.__init__(self, group, target, name, args, kwargs)
        self._return = None
    def run(self):
        #print(type(self._target))
        if self._target is not None:
            self._return = self._target(*self._args,
                                                **self._kwargs)
    def join(self, *args):
        Thread.join(self, *args)
        return self._return

#multiPinging is the function that pings the robot and starts a timer at the same time
#if the ping doesn't return a value within a second it assumes the arm is busy
def multiPinging(Arm):
    #if __name__ == '__main__':
        p =ThreadWithReturnValue(target = foo, name = "Foo", args = (Arm,))
        p.start()
        start = time.time()
        end = start
        while (end-start<2):
            end = time.time()
        if p.is_alive():
            return(None)
        pong = p.join()
        if("pong" in pong):
            return(Arm)
        else: return(None)
    
#This calls multipinging for R and L to determine whether R or L is not currently moving
def RorL(R, L, orderState, orderId, orderCompleteXML):
    result = multiPinging(R)
    if (result!=None):
        print("R")
        if orderState == False:
            orderCompleted(orderId, orderCompleteXML)
        return(result)
    else:
        result = multiPinging(L)
        if result == L:
            print("L")
        else:print("None")
        return(result)

#Removes orders from the list when the order for the robot to move has been sent
#It also removes the coffees from the list if there are no more copies of it        
def removeFromArray(weightedOrders, orders, A):
    if len(weightedOrders) > 0:
        currentCoffee = weightedOrders.pop(0)
        for order in range(len(orders)):
            if orders[order-1].getName() == currentCoffee[1]:
                orders[order-1].changeAmount(-1)
                orders[order-1].movement(A)
                if orders[order-1].getAmount() < 1:
                    orderID = orders[order-1].getOrderWeight()
                    del orders[order-1]
                    orderState = checkOrder(orders, weightedOrders, orderID)
                    return(orderState, orderID)


#Checks whether there are any remaining instances of the same coffee
def checkOrder(orders, weightedOrders, orderID):
    for order in range(len(orders)):
        if orders[order-1].getOrderWeight() == orderID:
            return(True)
    return(False)

#Sends the order ID to an xml file when the order has been completed 
def orderCompleted(orderID, orderCompleteXML):
    root = ET.Element("root")
    doc = ET.SubElement(root, "doc")
    ET.SubElement(doc, "field1").text = orderID
    tree = ET.ElementTree(root)
    tree.write(orderCompleteXML)

#This is what is run by bypassingRobotStudio and repeats the correct order of functions without end
def main(xml,orderCompleteXML,availableCoffees, availableEspressos,availableWaters,availableTest,R,L):
    oldId = ""
    orders = []
    weightedOrders = []
    decider = None
    orderState = True
    orderId = 0
    while True:
        arrayAndCo = addToArray(xml,availableCoffees, availableEspressos,availableWaters,availableTest, oldId, orders, weightedOrders)
        oldId = arrayAndCo[2]
        weightedOrders = arrayAndCo[1]
        orders = arrayAndCo[0]
        decider = RorL(R,L,orderState, orderId,orderCompleteXML)
        if(decider != None):
            removeFromArrayValues = removeFromArray(weightedOrders, orders, decider)
            try:
                orderState = removeFromArrayValues[0]
                orderId = removeFromArrayValues[1]
            except:
                orderState = True
        time.sleep(6)

#Future functions (not functional until coffee machine arrives)
def sendI2C(value):
    bus = smbus.SMBus(0)
    address = 0x70
    bus.write_byte_data(address, 0, value)
    return -1

def createCoffee(coffeeSettings):
    sendI2C(coffeeSettings)