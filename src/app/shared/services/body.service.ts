import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BodyService {
  variables: BehaviorSubject<boolean[]> = new BehaviorSubject([
    true,
    false,
    false,
    false,
  ]);

  constructor() {}

  switch(i: number): void {
    if (i === 0) {
      this.variables.next([true, false, false, false]);
    } else if (i === 1) {
      this.variables.next([false, true, false, false]);
    } else if (i === 2) {
      this.variables.next([false, false, true, false]);
    } else if (i === 3) {
      this.variables.next([false, false, false, true]);
    }
  }
}
