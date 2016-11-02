import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component'
import { NavigationLHSComponent } from './navigation.LHS.component'
import { HeaderComponent } from './header.component'
import { ContentComponent } from './content.component'

@NgModule({
    imports: [BrowserModule, MaterialModule.forRoot()],
    declarations: [AppComponent, NavigationLHSComponent, HeaderComponent, ContentComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
