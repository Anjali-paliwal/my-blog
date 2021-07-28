import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  id : number;
  name: string;
  isSelected: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})

export class CheckboxComponent implements OnInit {

  constructor() { 
  }

  task: Task = {
    id: 0,
    name: 'Select All',
    isSelected: false,
    color: 'primary',
    subtasks: [
      {id: 1,name: 'Java', isSelected: false, color: 'primary'},
      {id: 2,name: 'Python', isSelected: false, color: 'primary'},
      {id: 3, name: 'Ruby', isSelected: false, color: 'primary'}
    ]
  };

  allComplete: boolean = false;
  checkedLanguageList = [];

  isAllSelected(checked:boolean, name:string) {
    
    if(checked == true)
      this.checkedLanguageList.push(name);
    else{
      for(let i = 0;i< this.checkedLanguageList.length; i++){
        if(this.checkedLanguageList[i] === name){
          this.checkedLanguageList.splice(i,1);
        }
      }
    }

    //alert(`${checked} ${name}`);
    
    this.allComplete = this.task.subtasks.every(function(item:any){
      return item.isSelected == true;
      
    })
  }

  checkUncheckAll(isSelected: boolean) {

    for(let i=0;i< this.task.subtasks.length; i++){
      this.task.subtasks[i].isSelected = isSelected;
    }
    this.checkedItemList();
  }

  checkedItemList(){

    for(let i=0;i < this.task.subtasks.length;i++){

      if(this.task.subtasks[i].isSelected){
        this.checkedLanguageList.push(this.task.subtasks[i].name);
      }
      else{
        this.checkedLanguageList.pop();
      }

    }

  }

  getCheckedItemList(){
    if(this.checkedLanguageList){
      console.log(this.checkedLanguageList);
    }
  }

  ngOnInit(): void {
  }

}
