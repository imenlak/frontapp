import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideBarComponent } from './sideBar/side-bar/side-bar.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { AcceuilComponent } from './acceuil/acceuil/acceuil.component';
import { ContactComponent } from './contact/contact/contact.component';
import { DevisComponent } from './devis/devis/devis.component';
import { ClimatiseursComponent } from './produit/climatiseurs/climatiseurs.component';
import { AccesoiresComponent } from './produit/accesoires/accesoires.component';
import { CompresseurComponent } from './produit/compresseur/compresseur.component';
import { CondenseursComponent } from './produit/condenseurs/condenseurs.component';
import { EvaporteursComponent } from './produit/evaporteurs/evaporteurs.component';
import { GroupesEauGlaceeComponent } from './produit/groupes-eau-glacee/groupes-eau-glacee.component';
import { IndustrielsComponent } from './produit/industriels/industriels.component';
import { InformatiqueComponent } from './produit/informatique/informatique.component';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';


const routes: Routes = [

  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'acceuil', component: AcceuilComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'devis', component: DevisComponent },
      { path: 'climatiseurs', component: ClimatiseursComponent },
      { path: 'accessoires', component: AccesoiresComponent },
      { path: 'compresseurs', component: CompresseurComponent },
      { path: 'condenseurs', component: CondenseursComponent },
      { path: 'evaporteurs', component: EvaporteursComponent },
      { path: 'groupeEauGlacee', component: GroupesEauGlaceeComponent },
      { path: 'industriels', component: IndustrielsComponent },
      { path: 'informatique', component: InformatiqueComponent }
    ]
  },
  


];


@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
