import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatToolbarModule,MatButtonModule,MatIconModule } from '@angular/material';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { AppComponent } from './app.component';
import {CommonModule }from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material';


import { HeaderComponent } from './header/header.component';
import { ExampleComponent } from './example/example.component';

import { HomeComponent } from './home/home.component';
import { OnlineSerivesComponent } from './online-serives/online-serives.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ChatModule } from './chat/chat.module';
import { ApiAiClient} from 'api-ai-javascript'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExampleComponent,
    HomeComponent,
    OnlineSerivesComponent,
    AboutUsComponent,
    ContactUsComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCarouselModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    ChatModule,
    ApiAiClient

  ],
  exports: [
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
