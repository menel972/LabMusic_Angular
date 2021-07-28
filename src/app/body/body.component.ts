import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { References } from "../shared/interfaces/ref.interface";

@Component({
  selector: "app-body",
  template: "<router-outlet></router-outlet>"})



export class BodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
