import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from "../../model/task-list";
import { DarkModeService } from 'src/app/service/dark-mode.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements DoCheck,OnInit{
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');
  public darkMode : boolean = true;
  constructor(private darkModeService: DarkModeService){}

  ngOnInit(): void {
    this.darkMode = this.darkModeService.darkMode;
  }

  ngDoCheck() {
    this.setlocalStorage();
    this.darkMode = this.darkModeService.darkMode;
  }

  public setEmit(event: string){
    this.taskList.push({task: event, check: false})
  }

  public destroyItem(event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAll(){
    const confirm = window.confirm("Tem certeza que deseja apagar todos os itens?")
    if (confirm == true) {
      this.taskList = []
    }
  
  }

  public validaInput(event :string , index: number){
    if (!event.length) {
      const confirm = window.confirm("Deseja deletar a task vazia?")

      if (confirm) {
        this.destroyItem(index);
      }
    }
  }

  public setlocalStorage(){
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.check) - Number(last.check));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}

