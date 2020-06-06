import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AcceuilComponent } from './acceuil/acceuil/acceuil.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ContactComponent } from './contact/contact/contact.component';
import { DevisComponent } from './devis/devis/devis.component';
import { SideBarComponent } from './sideBar/side-bar/side-bar.component';
import { ClimatiseursComponent } from './produit/climatiseurs/climatiseurs.component';
import { GroupesEauGlaceeComponent } from './produit/groupes-eau-glacee/groupes-eau-glacee.component';
import { CompresseurComponent } from './produit/compresseur/compresseur.component';
import { CondenseursComponent } from './produit/condenseurs/condenseurs.component';
import { EvaporteursComponent } from './produit/evaporteurs/evaporteurs.component';
import { AccesoiresComponent } from './produit/accesoires/accesoires.component';
import { IndustrielsComponent } from './produit/industriels/industriels.component';
import { InformatiqueComponent } from './produit/informatique/informatique.component';
import { AdminComponent } from './AdminPage/admin/admin.component';
import { SidebarModule } from 'ng-sidebar';
import { HomeComponent } from './home/home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    DevisComponent,
    SideBarComponent,
    ClimatiseursComponent,
    GroupesEauGlaceeComponent,
    CompresseurComponent,
    CondenseursComponent,
    EvaporteursComponent,
    AccesoiresComponent,
    IndustrielsComponent,
    InformatiqueComponent,
    AdminComponent,
    HomeComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
