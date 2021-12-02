import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpFilmService } from 'src/app/services/http-film.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  myForm!:FormGroup;
  history:any[] = [];
  constructor(private __fb:FormBuilder, private _service:HttpFilmService) { }

  ngOnInit(): void {
    this.myForm = this.__fb.group({
      title: ['title', Validators.required],
      year: [''],
    });
  }

  findMovie(form:FormGroup) {
    if (form.valid) {
      this._service.getMoive(form.value.title, form.value.year).subscribe(data => {
          this.history = [data, ...this.history];
        });
      }
  }
}