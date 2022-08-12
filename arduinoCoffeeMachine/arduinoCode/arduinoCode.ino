
#include <Wire.h>

void setup()
{
  Wire.begin(0x07);                // join i2c bus with address #7
  Serial.begin(9600);           // start serial for output
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  digitalWrite(2, LOW);
  digitalWrite(3, LOW);
  digitalWrite(4, LOW);
  digitalWrite(2, HIGH);                   
  delay(1000);
  digitalWrite(2, LOW);
  delay(1000);
}

void loop()
{
  Wire.onReceive(receiveEvent); // register event
  delay(100);
}

// function that executes whenever data is received from master
// this function is registered as an event, see setup()
void receiveEvent(int howMany)
{
  while(Wire.available()) // loop through all but the last
  {
    int c = Wire.read(); // receive byte as a character
    if(c == -1){
      digitalWrite(4, HIGH);
      delay(1000);
      digitalWrite(4, LOW);
      delay(1000);
    }
    
  }
  int x = Wire.read();    // receive byte as an integer
  Serial.println(x);         // print the integer
}
