import { Injectable } from "@angular/core";
import { References } from "../interfaces/ref.interface";
import { Link } from "../interfaces/ref.interface";

@Injectable({
  providedIn: "root",
})
export class LibrairiesService {
  liens: Link[] = [
    { nom: "Page d'accueil", root: "", image: "home" },
    { nom: "Nos Prestations", root: "prestations", image: "work" },
    { nom: "Nos Références", root: "references", image: "business_center" },
    { nom: "Nous Contacter", root: "contact", image: "local_phone" },
  ];

  liens$: Link[] = [
    { nom: "Page d'accueil", root: "", image: "home" },
    { nom: "Nos Prestations", root: "prestations", image: "work" },
    { nom: "Nous Contacter", root: "contact", image: "local_phone" },
  ];

 

  Reference: References[] = [
    {
      nom: "heytens",
      img: "assets/img/heytens_vecteur.png",
      lien: "https://www.heytens.fr/",
    },
    {
      nom: "warwick",
      img: "assets/img/warwick_vecteur.png",
      lien: "https://www.warwickhotels.com/fr/",
    },
    {
      nom: "truffaut",
      img: "assets/img/truffaut_vecteur.png",
      lien: "https://www.truffaut.com/",
    },
    {
      nom: "animalis",
      img: "assets/img/logo-animalis-les-animaux-a-vivre-et-a-aimer.png",
      lien: "https://www.animalis.com/",
    },
    {
      nom: "paris aeroport",
      img: "assets/img/205124277_875419243391174_4891854583952064278_n.png",
      lien: "https://www.parisaeroport.fr/",
    },
    {
      nom: "sun resort mauritius",
      img: "assets/img/logo-33-removebg-preview .png",
      lien: "https://www.sunresortshotels.com/fr",
    },
    {
      nom: "shangri-la",
      img: "assets/img/téléchargement-removebg-preview.png",
      lien: "http://www.shangri-la.com/fr/mauritius/shangrila/",
    },
    {
      nom: "la maison coloniale",
      img: "assets/img/lamaisoncoloniale.png",
      lien: "http://www.lamaisoncoloniale.fr/fr/",
    },
  ];
  constructor() {}
}
