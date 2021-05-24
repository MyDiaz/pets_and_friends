import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./core/core.module";
import {Routing} from "./app.routing";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {environment} from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RegisterComponent } from './register/register.component';
import { AdoptComponent } from './adopt/adopt.component';
import { AdoptTargetComponent } from './adopt-target/adopt-target.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormAdoptComponent } from './form-adopt/form-adopt.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AdoptComponent,
    AdoptTargetComponent,
    MenuComponent,
    NavbarComponent,
    FormAdoptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatMenuModule,
    Routing,
    BrowserAnimationsModule,
    CoreModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
