import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  lang:['English','spanish','Other'];
  constructor() { }

  ngOnInit() {
  }

}
