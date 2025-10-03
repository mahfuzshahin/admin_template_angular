 import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
 import {initFlowbite} from "flowbite";
 import {HeaderComponent} from "./header/header.component";
 import {NavComponent} from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'news_portal_admin_ui';
  ngOnInit() {
    initFlowbite();
  }
}
