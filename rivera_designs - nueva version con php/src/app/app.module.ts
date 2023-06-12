import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormGroup, FormGroupDirective, ReactiveFormsModule,FormsModule }   from '@angular/forms';
import { routing, appRoutingProviders } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalSliderComponent } from './components/principal-slider/principal-slider.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { HomeComponent } from './components/home/home.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';
import { CategoriesSectionComponent } from './components/categories-section/categories-section.component';
import { PrestationsSectionComponent } from './components/prestations-section/prestations-section.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosMenuComponent } from './components/productos-menu/productos-menu.component';
import { ColeccionesMenuComponent } from './components/colecciones-menu/colecciones-menu.component';
import { ColeccionesComponent } from './components/colecciones/colecciones.component';
import { MenuSillonesComponent } from './components/menu-sillones/menu-sillones.component';
import { MenuMueblesComponent } from './components/menu-muebles/menu-muebles.component';
import { MenuMesasComponent } from './components/menu-mesas/menu-mesas.component';
import { MenuPuffsComponent } from './components/menu-puffs/menu-puffs.component';
import { MenuReposerasComponent } from './components/menu-reposeras/menu-reposeras.component';
import { MenuCamastrosComponent } from './components/menu-camastros/menu-camastros.component';
import { MenuBarrasComponent } from './components/menu-barras/menu-barras.component';
import { MenuBanquetasComponent } from './components/menu-banquetas/menu-banquetas.component';
import { MenuBancosComponent } from './components/menu-bancos/menu-bancos.component';
import { MenuSillasComponent } from './components/menu-sillas/menu-sillas.component';
import { MenuHamacasComponent } from './components/menu-hamacas/menu-hamacas.component';
import { MenuPergolasComponent } from './components/menu-pergolas/menu-pergolas.component';
import { MenuFormenteraComponent } from './components/menu-formentera/menu-formentera.component';
import { MenuModenaComponent } from './components/menu-modena/menu-modena.component';
import { MenuTirrenoComponent } from './components/menu-tirreno/menu-tirreno.component';
import { MenuAlumadComponent } from './components/menu-alumad/menu-alumad.component';
import { MenuDeckComponent } from './components/menu-deck/menu-deck.component';
import { MenuDotComponent } from './components/menu-dot/menu-dot.component';
import { MenuBeltComponent } from './components/menu-belt/menu-belt.component';
import { MenuEspecialComponent } from './components/menu-especial/menu-especial.component';
import { FilterPipe } from './pipes/filter.pipe';
import { Error404Component } from './components/error404/error404.component';
import { MuebleComponent } from './components/mueble/mueble.component';
import { MuebleService } from './services/mueblesService';
import { MueblesPageComponent } from './components/muebles-page/muebles-page.component';
import { MueblesSliderComponent } from './components/muebles-slider/muebles-slider.component';
import { MueblesContactComponent } from './components/muebles-contact/muebles-contact.component';
import { ColeccionSliderComponent } from './components/coleccion-slider/coleccion-slider.component';
import { EmailService } from './services/email.service';
import { MenuMaterialesComponent } from './components/menu-materiales/menu-materiales.component';
import { MenuMaterialesAluminioComponent } from './components/menu-materiales-aluminio/menu-materiales-aluminio.component';
import { MenuMaterialesPhifertexComponent } from './components/menu-materiales-phifertex/menu-materiales-phifertex.component';
import { MenuMaterialesSunbrellaComponent } from './components/menu-materiales-sunbrella/menu-materiales-sunbrella.component';
import { MuebleServiceLocalService } from './services/mueble-service-local.service';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PrincipalSliderComponent,
    WhatsappButtonComponent,
    HomeComponent,
    TitleSectionComponent,
    CategoriesSectionComponent,
    PrestationsSectionComponent,
    ProductosComponent,
    ProductosMenuComponent,
    ColeccionesMenuComponent,
    ColeccionesComponent,
    MenuSillonesComponent,
    MenuMueblesComponent,
    MenuMesasComponent,
    MenuPuffsComponent,
    MenuReposerasComponent,
    MenuCamastrosComponent,
    MenuBarrasComponent,
    MenuBanquetasComponent,
    MenuBancosComponent,
    MenuSillasComponent,
    MenuHamacasComponent,
    MenuPergolasComponent,
    MenuFormenteraComponent,
    MenuModenaComponent,
    MenuTirrenoComponent,
    MenuAlumadComponent,
    MenuDeckComponent,
    MenuDotComponent,
    MenuBeltComponent,
    MenuEspecialComponent,
    FilterPipe,
    Error404Component,
    MuebleComponent,
    MueblesPageComponent,
    MueblesSliderComponent,
    MueblesContactComponent,
    ColeccionSliderComponent,
    MenuMaterialesComponent,
    MenuMaterialesAluminioComponent,
    MenuMaterialesPhifertexComponent,
    MenuMaterialesSunbrellaComponent,
  
  ],
  imports: [
    BrowserModule, 
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    MuebleService,
    EmailService,
    ReactiveFormsModule,
    MuebleServiceLocalService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
