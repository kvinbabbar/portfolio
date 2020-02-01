import { Component, OnInit } from '@angular/core';
import { SetTitleService } from '../services/set-title.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private titleService: SetTitleService) { }

  ngOnInit() {
  }

  setTitle(title: string) {
    const newTitle = title + ' | Portfolio'
    this.titleService.setTitle(newTitle);
  }

}
