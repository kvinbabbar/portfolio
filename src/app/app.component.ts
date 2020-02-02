import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import { SetTitleService } from './services/set-title.service';
import { map, filter } from 'rxjs/operators';
import { routeAnimation } from './animations/routeAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimation]
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private setTitleService: SetTitleService,
    private titleService: Title) {}

  ngOnInit() {
    const appTitle = this.titleService.getTitle();

    this.route.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        if(child.snapshot.data['title']) {
          return child.snapshot.data['title'];
        }
        return appTitle;
      })
    ).subscribe((title: string) => {
      const newTitle = title + " | Portfolio";
      this.setTitleService.setTitle(newTitle);
    });
  }
}
