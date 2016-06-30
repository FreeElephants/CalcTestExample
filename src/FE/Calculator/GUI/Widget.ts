namespace FE.Calculator.GUI {

    export class Widget {

        public appendTo(context: Document, id: string): void{
            let container = context.createElement("div");
            container.id = "calc-widget";
            let wrapper = context.getElementById(id);
            if(wrapper) {
                wrapper.appendChild(container);
            } else {
                throw new Error("Wrapper not found! ");
            }
        }
    }
}
