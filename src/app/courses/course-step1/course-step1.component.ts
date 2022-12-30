import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Dataservice } from 'src/app/services/dataservice.service';
import { courseTitleValidator } from 'src/app/validators/course-title.validator';
import { filter } from 'rxjs/operators';
interface CourseCategory {
  title:string,
}

@Component({
  selector: 'app-course-step1',
  // changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './course-step1.component.html',
  styleUrls: ['./course-step1.component.scss']
})
export class CourseStep1Component implements OnInit {

  form = this.fb.group({
      title:['',
        { 
          validators:[ Validators.required,Validators.minLength(5),Validators.maxLength(20) ],
          asyncValidators:[courseTitleValidator(this.dataService),],
          updateOn:'blur',
        },
      ],
      category:['BEGINNER',[Validators.required]],
      releaseAt:['',[Validators.required]],
      downloadAllowed:[false,[Validators.requiredTrue]],
      description:['',[Validators.required,Validators.minLength(5)]],
  })

  courseCategory$ : Observable<CourseCategory[]>;

  constructor(private fb:FormBuilder,private dataService:Dataservice){

  }

 

  ngOnInit(): void {
    this.courseCategory$ = this.dataService.getData();

    const draft = localStorage.getItem('STEP_1');

    if(draft){
      this.form.setValue(JSON.parse(draft));
    }

    // this.form.valueChanges.pipe(
    //   filter(() => this.form.valid)
    // ).subscribe((val) => localStorage.setItem('STEP_1',JSON.stringify(val)));
    this.form.valueChanges.subscribe((val) => localStorage.setItem('STEP_1',JSON.stringify(val)));
  }

  getData(){
    this.dataService.getData().subscribe(res => {
      console.log(res);
    })
  }

  submitData(){
    console.log(this.form.value.title)
    if(this.form.value.title){
      let postData = {
        title:this.form.value.title
      }
      console.log(postData);
      this.dataService.post(postData).subscribe(res => {
        console.log(res);
      })
    }
  }

  get courseTitle(){
    return this.form.controls['title'];
  }
  get descrip(){
    return this.form.controls['description'];
  }

}
