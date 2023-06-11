import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-add-itens',
  templateUrl: './input-add-itens.component.html',
  styleUrls: ['./input-add-itens.component.css']
})
export class InputAddItensComponent {
  @Output() public emitItemTask = new EventEmitter();

  public addItemList : string ="";

  public submitItemList(){
    this.addItemList = this.addItemList.trim();
    if (this.addItemList){
      this.emitItemTask.emit(this.addItemList);
      this.addItemList = ''
    }
    }
    
}
