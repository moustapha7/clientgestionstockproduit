import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { StoreModule} from '@ngrx/store';


import { AppComponent } from './app.component';
import {ProduitComponent} from './produit/produit.component';
import { ProduitMockService } from './produit/produit.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';

import { ProduitService } from './produit/produit.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppService} from './app.service';
import { XhrInterceptor } from './xhr.interceptor';
import { CookieService}  from 'ngx-cookie-service';
import { UserComponent } from './user/user.component';
import { from } from 'rxjs';
import { principalReducer} from './shared/principal.reducer';
import { UserService } from './user/user.service';
import { CrudComponent } from './shared/crud/crud.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    CrudComponent,
    
  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule,
     HttpClientModule, StoreModule.forRoot({principal: principalReducer}) 
     ],
  providers:
   [
    ProduitMockService, 
    ProduitService,
     AppService, UserService,
     {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
     CookieService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
