///<reference path="bootstrap.r.ts"/>
///<reference path="FE/Calculator/CalcTest.ts"/>
///<reference path="FE/Calculator/GUI/WidgetTest.ts"/>
namespace tests {

	import LaunchMapInterface = FreeElephants.TSxUnit.LaunchMapInterface;
	import FE_Calculator_CalcTest = FE.Calculator.CalcTest;
	import FE_Calculator_GUI_WidgetTest = FE.Calculator.GUI.WidgetTest;

    export class LaunchMap implements LaunchMapInterface{
       public getTestCases(): Object {
           return {
               'tests/FE/Calculator/CalcTest.ts': new FE_Calculator_CalcTest(),
               'tests/FE/Calculator/GUI/WidgetTest.ts': new FE_Calculator_GUI_WidgetTest(),
           }
       }
   }
}
