import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { InitialPageComponent } from './features/initial-page/initial-page.component';


@NgModule({
    declarations: [
        AppComponent,
        InitialPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        
      
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
