import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { 
  Router, 
  ActivatedRoute, 
  Event, 
  NavigationStart,
  NavigationEnd, 
  NavigationCancel, 
  NavigationError, 
  } from '@angular/router';
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
  loading: boolean = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private setTitleService: SetTitleService,
    private titleService: Title) {
      this.router.events.subscribe((event: Event) => {
        this.navigationInterceptor(event);
      });
    }

  ngOnInit() {
    const appTitle = this.titleService.getTitle();

    this.router.events.pipe(
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
  
  navigationInterceptor(event: Event): void {
    if(event instanceof NavigationStart) {
      this.loading = true;
    }
    if(event instanceof NavigationEnd) {
      this.loading = false;
    }
    if(event instanceof NavigationCancel) {
      this.loading = false;
    }
    if(event instanceof NavigationError) {
      this.loading = false;
    }
  }
}
