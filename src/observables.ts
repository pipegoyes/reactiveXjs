import { Observable } from "rxjs";
import { addItem } from "./helper";

// Observables (sync + async)
addItem("Initiating")
var observable = new Observable(s => {
    s.next(1);
    s.next(2);
    setInterval(() =>{
        s.next(3);
        s.complete();
    }, 2000)
})
 
var subscription1 = observable.subscribe(
    s => addItem(s),
    () => addItem("Error"),
    () => addItem("Completed")
)

addItem("Finishing")