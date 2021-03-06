import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { shopReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffects } from './store/effects';
import { GuitarComponent } from './guitar/guitar.component';
import { GuitarsListsComponent } from './guitars-lists/guitars-lists.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, GuitarComponent, GuitarsListsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ shop: shopReducer }),
    EffectsModule.forRoot([ShopEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
