import { Component, DoCheck, OnInit } from '@angular/core';
//service
import { DarkModeService } from 'src/app/service/dark-mode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck{

  public darkMode :boolean = true;
  constructor(private darkModeService: DarkModeService){}

  ngOnInit(): void {
    this.darkMode = this.darkModeService.darkMode;
  }

  ngDoCheck(): void {
    this.darkMode = this.darkModeService.darkMode;
  }
}

