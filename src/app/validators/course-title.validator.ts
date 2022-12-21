
import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { Dataservice } from "../services/dataservice.service";
import { map } from 'rxjs/operators';

export function courseTitleValidator(courses:Dataservice):AsyncValidatorFn{
    return (control:AbstractControl) => {
        return courses.getData().pipe(map(courses => {
            console.log(courses)
            let totalCourse = courses.find((course:any) => {
                return course.title.toLowerCase() == control.value.toLowerCase();
            })
            return totalCourse ? { titleExists:true } : null;
        })
      )
    }
}

export function passwordValidator(){
    
}