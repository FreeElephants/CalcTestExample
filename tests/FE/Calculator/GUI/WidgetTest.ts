///<reference path="../../../../src/FE/Calculator/GUI/Widget.ts"/>
namespace FE.Calculator.GUI {

    export class WidgetTest extends FreeElephants.TSxUnit.DocumentTestCase {

        public testAppendTo() {
            let widget:Widget = new Widget();
            let doc = this.getFakeDocumentBuilder().setSource("<p id='wrapper'></p>").getMock();
            widget.appendTo(doc, "wrapper");
            this.assertElementExists(doc, '#calc-widget');
        }
    }
}