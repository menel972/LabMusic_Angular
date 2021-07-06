import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  mapOptions: google.maps.MapOptions = {
    center: {
      lat: 48.8916126164448,
      lng: 2.536759377512378,
    },
    zoom: 13,
  };

  markerOptions: google.maps.MarkerOptions = {
    position: {
      lat: 48.8916126164448,
      lng: 2.536759377512378,
    },
    title: "Lab Music",
    label: {
      text: "Lab Music",
      color: "#222",
      fontFamily: "Ubuntu",
      fontSize: "1.3rem",
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
