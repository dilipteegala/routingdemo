import { Component, OnInit } from '@angular/core';
import { Employee }    from '../employee.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  model = new Employee("dilip","rao",true,"");
  lang:['English','spanish','Other'];
  constructor() { }

  ngOnInit() {
  }

}
