import { of } from "rxjs";
import { first, map, pluck } from "rxjs/operators";
import { addItem } from "./helper";


// Operators (map, filter, so on)
var observable = of({id: 1, name: "Felipe"}, {id: 2, lastName: "Goyes"}) 
observable.subscribe(s => addItem("Initial State:" + JSON.stringify(s)));

// op()(observable)
// As a stylistic matter, op()(obs) is never used, even if there is only one operator; obs.pipe(op()) is universally preferred.
map((x: number) => x * x)(of(1,2,3)).subscribe((v) => addItem(`value: ${v}`));
first()(of(1,2,4)).subscribe(s => addItem("first: " + s))


observable.pipe(
    pluck("name")
).subscribe(s => addItem("pluck operator " + s))