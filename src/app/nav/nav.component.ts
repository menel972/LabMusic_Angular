import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


import { LibrairiesService } from "../shared/services/librairies.service";
import { Link } from "../shared/interfaces/ref.interface";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  liens: Link[] = this.libs.liens;

  Liens$: Link[] = this.libs.liens$;

  constructor(private libs: LibrairiesService) {}

  ngOnInit(): void {}
}
