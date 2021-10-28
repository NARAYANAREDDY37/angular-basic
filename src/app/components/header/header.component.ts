import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = true;
  subscription: Subscription;

  constructor(private uiSerivice: UiService, private router:Router) {
    this.subscription = this.uiSerivice
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  toogleAddTask() {
    this.uiSerivice.toogleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
}
