import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { FooterComponent } from './shell/footer/footer.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShellComponent, FooterComponent, HeaderComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ShellComponent, HeaderComponent, FooterComponent]
})
export class CoreModule { }
