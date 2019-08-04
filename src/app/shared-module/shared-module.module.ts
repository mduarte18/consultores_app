import { TimeFormat } from './../global/convertFrom24To12Format';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TimeFormat],
  imports: [
    CommonModule
  ],
  exports: [TimeFormat]
})
export class SharedModuleModule { }
