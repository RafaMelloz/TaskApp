import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';

@Component({
  selector: 'app-btn-troca-modo',
  templateUrl: './btn-troca-modo.component.html',
  styleUrls: ['./btn-troca-modo.component.css']
})
export class BtnTrocaModoComponent implements OnInit{

  public modoTela:boolean = false

  constructor(private darkModeService: DarkModeService){
  }

  

  ngOnInit(): void {
    this.modoTela = this.darkModeService.darkMode;
  }

  alteraModoTela() {
    if (this.modoTela == true) {
      this.modoTela = false
      this.darkModeService.darkMode = false  
    }else{
      this.modoTela = true
      this.darkModeService.darkMode = true;
    }
  }
}
