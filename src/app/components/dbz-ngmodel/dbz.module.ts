import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  imports: [FormsModule, CommonModule],
})
export class DbzModule {}
