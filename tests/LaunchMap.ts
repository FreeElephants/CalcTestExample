///<reference path="bootstrap.r.ts"/>
///<reference path="FE/Calculator/CalcTest.ts"/>
namespace tests {

	import LaunchMapInterface = FreeElephants.TSxUnit.LaunchMapInterface;
	import FE_Calculator_CalcTest = FE.Calculator.CalcTest;

	export class LaunchMap implements LaunchMapInterface{
		public getTestCases(): Object {
			return {
				'tests/FE/Calculator/CalcTest.ts': new FE_Calculator_CalcTest(),
			}
		}
	}
}
