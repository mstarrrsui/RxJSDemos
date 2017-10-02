 
export const helloFunc = () => { console.log("Hello from example 1..."); }



class DemoApp {
    constructor() {
      let btn1 = document.getElementById("example1");
      btn1.addEventListener("click", (e:Event) => this.doExample1(btn1.id));
    }

    doExample1(id: string) {
       // button click handler
       console.log("Hello from " + id + "...")    }
  }
  
  // start the app
  new DemoApp();



