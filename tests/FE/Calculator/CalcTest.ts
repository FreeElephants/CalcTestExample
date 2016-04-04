///<reference path="../../../src/FE/Calculator/Calc.ts"/>
///<reference path="../../bootstrap.r.ts"/>

namespace FE.Calculator {

    export class CalcTest extends FreeElephants.TSxUnit.TestCase{

        public testAdd(){
            var calc = new Calc();
            var actual = calc.add(2, 2);
            this.assertTrue(actual === 4);
        }
    }

}
