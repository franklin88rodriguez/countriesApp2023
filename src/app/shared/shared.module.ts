import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    //AppRoutingModule
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
