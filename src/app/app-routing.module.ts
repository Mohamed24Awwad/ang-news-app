import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';


const routes: Routes = [

  {path :"",component:HomeComponent},
  {path :"about",component:AboutComponent},
  {path :"news",component:NewsComponent},
  {path :"contact",component:ContactComponent},
  { path: '**', component:Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
