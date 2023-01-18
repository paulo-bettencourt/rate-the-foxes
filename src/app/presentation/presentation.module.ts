import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PresentationComponent} from "./presentation/presentation.component";

const routes: Routes = [{
  path: '',
  component: PresentationComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(
      routes
    )
  ]
})
export class PresentationModule { }
