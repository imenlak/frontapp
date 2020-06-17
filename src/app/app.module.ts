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
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';


/* Custom Hammer configuration */
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'pan': {
      direction: Hammer.DIRECTION_ALL,
    }
  }
}
/* End Custom hammer configuration */
import { NgxGalleryModule } from 'ngx-gallery';


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
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    SidebarModule.forRoot(),
    NgxGalleryModule

  ],
  providers: [
    {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
