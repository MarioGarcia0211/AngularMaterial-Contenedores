import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';



@NgModule({
  declarations: [ToolbarComponent, FooterComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[ToolbarComponent, FooterComponent, SidenavComponent]
})
export class SharedModule { }
