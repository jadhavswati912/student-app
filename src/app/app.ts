import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'student-app-1';
  student = {
    fullName: '',
    email: ''
  };
  
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Data:', this.student);
      alert('Registration Successful!');

      // Reset the form after submission
      form.reset();
    }
  }
}
