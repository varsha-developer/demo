import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'body', component:BodyComponent},
  {path:'header', component:HeaderComponent},
  // {path:'update/:id', component:UpdateComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
