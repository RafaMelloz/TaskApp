import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Components
import { InputAddItensComponent } from './components/input-add-itens/input-add-itens.component';
import { ListComponent } from './components/list/list.component';

//Page
import { HomeComponent } from './components/pages/home/home.component';




@NgModule({
  declarations: [
    InputAddItensComponent,
    ListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
