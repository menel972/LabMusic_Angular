import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PrestationsComponent } from "./body/prestations/prestations.component";
import { ReferencesComponent } from "./body/references/references.component";
import { ContactComponent } from "./body/contact/contact.component";
import { HomeComponent } from "./body/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "prestations", component: PrestationsComponent },
  { path: "references", component: ReferencesComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
