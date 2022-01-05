import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { WorldMapComponent } from './components/world-map/world-map.component';
import { WorldCellComponent } from './components/world-cell/world-cell.component';
import { WorldListComponent } from './components/world-list/world-list.component';
import { TabListComponent } from './components/tab-list/tab-list.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BodyComponent,
        WorldMapComponent,
        WorldCellComponent,
        WorldListComponent,
        TabListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
