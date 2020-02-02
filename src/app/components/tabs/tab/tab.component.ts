import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements AfterViewInit {
  @Input() panelHeading: string;
  @ViewChild('panelHead', {static: false}) panelHead: ElementRef;

  constructor() { }

  ngAfterViewInit() {
  }

  togglePanels() {
    const head = this.panelHead.nativeElement;
    head.querySelector('a').classList.toggle('collapsed');
    const sibling = head.nextElementSibling;
    if(sibling.style.maxHeight) {
      sibling.style.maxHeight = null;
    } else {
      sibling.style.maxHeight = sibling.scrollHeight + "px";
    }
  }

}
