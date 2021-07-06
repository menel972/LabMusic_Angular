import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { GoogleMapsModule } from "@angular/google-maps";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";
import { BodyComponent } from "./body/body.component";
import { PrestationsComponent } from "./body/prestations/prestations.component";
import { ReferencesComponent } from "./body/references/references.component";
import { ContactComponent } from "./body/contact/contact.component";
import { HomeComponent } from "./body/home/home.component";
import { BandeauComponent } from './body/prestations/bandeau/bandeau.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BodyComponent,
    PrestationsComponent,
    ReferencesComponent,
    ContactComponent,
    HomeComponent,
    BandeauComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GoogleMapsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
