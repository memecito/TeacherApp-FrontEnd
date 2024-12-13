import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IKnowledge } from '../../interfaces/iknowledge.interface';
import { KnowledgesService } from '../../services/knowledges.service';

@Component({
  selector: 'app-teacher-knowledges',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './teacher-knowledges.component.html',
  styleUrl: './teacher-knowledges.component.css'
})
export class TeacherKnowledgesComponent {
  regKnowledges: FormGroup;
  arrKnoledge: IKnowledge[]= [];

  knoledgeServices= inject(KnowledgesService);

  constructor(){
    this.regKnowledges= new FormGroup({
      knowledge: new FormControl(null, [Validators.required])
    },[]);
  }

  async ngOnInit(){
    try {
      this.arrKnoledge= await this.knoledgeServices.getAllKnowledges();
    } catch (error) {
      console.log('Error en los conocimientos: ',error);
    }
  }

  getDataForm(){

  }

}
