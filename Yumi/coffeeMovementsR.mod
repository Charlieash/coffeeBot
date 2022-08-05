MODULE coffeeMovements
    CONST robtarget Home:=[[-9.578368507,-182.609892723,198.627808149],[0.066010726,-0.842420918,-0.111214912,-0.523068661],[0,0,0,4],[-101.964427132,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget aboveCup:=[[278.208312322,-203.617790599,231.446771643],[0.707106284,-0.707107279,0.000000495,0.000000937],[1,-1,2,4],[-87.032967033,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget pickUpCup:=[[278.207904418,-203.6176133,80.569551153],[0.707106353,-0.70710721,0.000000317,0.00000067],[1,-1,2,4],[-87.032967033,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget beforeCoffeeMachine:=[[400.151383187,198.888219891,138.643568953],[0.707106581,-0.707106981,0.000000129,0.000000384],[2,1,1,4],[-87.032967033,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget inCoffeeMachine:=[[248.277838586,198.887651738,138.643449238],[0.70710633,-0.707107233,0.000000176,0.000000663],[2,1,0,4],[-87.032967033,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget afterCupPickUp:=[[392.730652263,-203.618347541,231.446357113],[0.707106023,-0.707107539,0.000000657,0.000001564],[1,-1,2,4],[-120.93495026,9E+09,9E+09,9E+09,9E+09,9E+09]];    
    CONST robtarget aboveInCoffee:=[[248.277963535,198.887339769,218.840343011],[0.707106378,-0.707107184,0.00000023,0.000000964],[2,1,0,4],[129.272916704,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget aboveBeforeCoffee:=[[399.619288661,197.139901275,231.4464029],[0.707105918,-0.707107645,0.000000792,0.000001583],[2,-1,2,4],[-87.032967033,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget afterAboveCup:=[[406.101117022,-203.61817432,231.446744669],[0.70710606,-0.707107503,0.000000644,0.000001213],[1,-1,2,4],[-87.032967033,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget outsideCoffeeMachine:=[[399.059788774,198.886850444,215.299873739],[0.707106042,-0.70710752,0.000000376,0.000001118],[2,-1,2,4],[-123.275938492,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget aboveCoffeeCup:=[[248.278007928,198.886990611,215.299982769],[0.707106103,-0.707107459,0.000000346,0.000000983],[1,-1,2,4],[-123.275939736,9E+09,9E+09,9E+09,9E+09,9E+09]];
    
    PROC cupToMachine()
        MoveL Home,v100,fine,tool0\WObj:=wobj0;
        MoveL aboveCup,v100,fine,tool0\WObj:=wobj0;
        MoveL pickUpCup,v100,fine,tool0\WObj:=wobj0;
        MoveL aboveCup,v100,fine,tool0\WObj:=wobj0;
        MoveL afterAboveCup,v100,fine,tool0\WObj:=wobj0;
        MoveL aboveBeforeCoffee,v100,fine,tool0\WObj:=wobj0;
        MoveL beforeCoffeeMachine,v100,fine,tool0\WObj:=wobj0;
        MoveL inCoffeeMachine,v100,fine,tool0\WObj:=wobj0;
    ENDPROC
    PROC machineToCup()
        MoveL aboveCoffeeCup,v100,fine,tool0\WObj:=wobj0;
        MoveL outsideCoffeeMachine,v100,fine,tool0\WObj:=wobj0;
        MoveL afterAboveCup,v100,fine,tool0\WObj:=wobj0;
        MoveL aboveCup,v100,fine,tool0\WObj:=wobj0;
        MoveL pickUpCup,v100,fine,tool0\WObj:=wobj0;
        MoveL aboveCup,v100,fine,tool0\WObj:=wobj0;
        MoveL Home,v100,fine,tool0\WObj:=wobj0;
    ENDPROC
ENDMODULE