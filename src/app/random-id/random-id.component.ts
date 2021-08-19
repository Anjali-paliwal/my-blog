import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-id',
  templateUrl: './random-id.component.html',
  styleUrls: ['./random-id.component.css']
})
export class RandomIdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  randomId(event){
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var result = "_";
    var charLength = characters.length;

    for(var i = 0; i < 10; i++){
      result += characters.charAt(Math.floor(Math.random() *charLength ));
    }
    result += event.timeStamp;
    
    console.log("Id is "+result);
    //document.getElementById("demo").innerHTML = result;
  }

}
