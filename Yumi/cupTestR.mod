MODULE cupTest
    CONST robtarget testAfterHome:=[[117.948882756,7.324579528,178.943585318],[0.499999263,-0.500000896,0.500000078,-0.499999762],[1,1,0,4],[179.682914358,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget testBeforeCup:=[[117.948767434,7.325036666,52.999764328],[0.499999527,-0.500000587,0.500000046,-0.499999839],[1,1,0,4],[-136.324486742,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget testPickUpCup:=[[193.894561844,7.325266273,52.999813551],[0.499999728,-0.500000502,0.499999874,-0.499999896],[1,1,0,4],[-128.398244105,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget testAboveCup:=[[193.894812061,7.324789927,243.344957012],[0.499999461,-0.500000828,0.499999882,-0.499999828],[1,1,0,4],[-128.398235492,9E+09,9E+09,9E+09,9E+09,9E+09]];
    PROC cupTestPickUp()
        MoveL Home,v1000,z100,tool0\WObj:=wobj0;
        MoveL testAfterHome,v1000,z100,tool0\WObj:=wobj0;
        MoveL testBeforeCup,v1000,z100,tool0\WObj:=wobj0;
        MoveL testPickUpCup,v1000,z100,tool0\WObj:=wobj0;
        MoveL testAboveCup,v1000,z100,tool0\WObj:=wobj0;
        MoveL testPickUpCup,v1000,z100,tool0\WObj:=wobj0;
        MoveL testBeforeCup,v1000,z100,tool0\WObj:=wobj0;
        MoveL testAfterHome,v1000,z100,tool0\WObj:=wobj0;
        MoveL Home,v1000,z100,tool0\WObj:=wobj0;
    ENDPROC
ENDMODULE