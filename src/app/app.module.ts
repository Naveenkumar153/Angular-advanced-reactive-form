import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider'
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
// components
import { AppLevelHttpInterceptor } from './services/http-interceptor.interceptor';
import { CoursesComponent } from './courses/courses.component';
import { CourseStep1Component } from './courses/course-step1/course-step1.component';
import { CourseStep2Component } from './courses/course-step2/course-step2.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseStep1Component,
    CourseStep2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [
    { 
      provide:HTTP_INTERCEPTORS,
      useClass:AppLevelHttpInterceptor,
      multi:true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
