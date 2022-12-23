import { FormGroup, ValidatorFn, Validators } from "@angular/forms";



export function createPromoRangeValidator(): ValidatorFn {
    return(form:FormGroup): Validators | null => {
        const startDate:Date = form.get('promoStartAt').value;
        const endDate:Date = form.get('promoEndAt').value;
        console.log(endDate.getTime());
        console.log(startDate.getTime());
        if(startDate && endDate){
            const isRangeValid = (endDate.getTime() - startDate.getTime() > 0);
                    console.log(isRangeValid);
            
                    return isRangeValid ? null : { promoPeriod:true };
        }

        return null;
    }
}