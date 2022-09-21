import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  appName = 'My App';

  @Output() SideNavigationToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleOpenSidenav(){
    this.SideNavigationToggle.emit();
  }

}