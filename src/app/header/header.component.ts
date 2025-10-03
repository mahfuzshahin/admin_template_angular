import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {initDropdowns} from "flowbite";
import {SidebarStateService} from "../service/sidebar-state.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterViewInit{
  isSidebarVisible = false;
  constructor(private sidebarService: SidebarStateService) {}
  ngOnInit() {
  }
  ngAfterViewInit() {
    initDropdowns();
  }
  onToggle() {
    this.sidebarService.toggleSidebar();
  }
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  logout(): void {
    // this.authService.logout();
    // this.router.navigate(['/']); // Redirect to login after logout
  }
}
