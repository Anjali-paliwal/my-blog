import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef  } from '@angular/material/dialog';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegisterUserComponent>,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogRef.close();
  }
}
