import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-studet-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './studet-list.component.html',
  styleUrl: './studet-list.component.css'
})
export class StudetListComponent implements OnInit {

  constructor(public service: StudentService) { }

  ngOnInit(): void {
    this.service.getStudents().subscribe(
      result => {
        if (result) {
          this.ELEMENT_DATA = result;
          this.dataSource = this.ELEMENT_DATA;
        }
      }
    );
  }

  dataSource: any;
  title: string = 'STUDENT LIST';
  isButtonDisabled: boolean = false;

  ELEMENT_DATA: Student[] = [];
  //  [
  //  { firstName: 'John', lastName: 'Doe', id: 1 },
  //  { firstName: 'Jane', lastName: 'Doe', id: 2 }
  //];

  displayedColumns: string[] = ['id', 'firstName', 'lastName'];

  onButtonClick() {
    this.title = 'MY STUDENT LIST';
    this.isButtonDisabled = true;
  }
}

