import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators } from '@angular/forms';
import { createPromoRangeValidator } from 'src/app/validators/date.rage.validators';

@Component({
  selector: 'app-course-step2',
  templateUrl: './course-step2.component.html',
  styleUrls: ['./course-step2.component.scss']
})
export class CourseStep2Component implements OnInit {

  form = this.fb.group({
    courseType:['premium',Validators.required],
    price:[null,Validators.required],
    promoStartAt:[null],
    promoEndAt:[null],
  }, 
  { validators: [createPromoRangeValidator()],updateOn:'blur', });
// createPromoRangeValidator()
  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void {
     this.form.valueChanges.subscribe(val => {
       console.log(val);
       const priceControl = this.form.controls['price'];
       console.log(priceControl);

       if(val.courseType == 'free' && priceControl.enabled){
          priceControl.disable({emitEvent:false});
       }
       else if(val.courseType == 'premium' && priceControl.disabled){
        priceControl.enable({ emitEvent:false });
       }

     });
  }
}
