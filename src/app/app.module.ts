import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.modules';
import { AppComponent } from './app.component';
import {AppFooterComponent} from './app-footer/app-footer.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {NavBarItemComponent} from './nav-bar/nav-bar-item/nav-bar-item.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PdfExamplePageComponent } from './pages/pdf-example-page/pdf-example-page.component';
import { TableExampleComponent } from './pages/table-example/table-example.component';

import { TableModule } from 'primeng/table'; // Here

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    HeaderComponent,
    MainComponent,
    NavBarComponent,
    NavBarItemComponent,
    PdfExamplePageComponent,
    TableExampleComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
