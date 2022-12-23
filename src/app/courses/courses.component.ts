import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers:[
    {
      provide:STEPPER_GLOBAL_OPTIONS,useValue:{showError:true}
    }
  ],
})
export class CoursesComponent {

  form = this.fb.group({
    radioBtn:['',Validators.required],
  });

  constructor(private fb:FormBuilder){

  }

}
