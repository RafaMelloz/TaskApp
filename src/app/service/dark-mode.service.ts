import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService implements OnInit {

  public darkMode:boolean = true; 

  constructor() { }

  ngOnInit(): void {
   
  }

  
}
