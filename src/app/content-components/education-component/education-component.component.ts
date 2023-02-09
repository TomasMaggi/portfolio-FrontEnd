import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IEducation } from 'src/app/interfaces/education_interface';
import { EditDataService } from 'src/app/services/edit-data/edit-data.service';

@Component({
  selector: 'app-education-component',
  templateUrl: './education-component.component.html',
  styleUrls: ['./education-component.component.css'],
})
export class EducationComponentComponent implements OnInit {
  @Input()
  dataload: IEducation = {
    id: 0,
    title: '',
    type: '',
    institution: '',
    description: '',
    date_of_start: null,
    date_of_finish: null,
  };

  @Input()
  isLogged: boolean = false;

  editing: boolean = false;

  constructor(private datepipe: DatePipe, private putdata: EditDataService) {}

  ngOnInit(): void {}

  transformDate(date: any) {
    return this.datepipe.transform(date, 'yyyy-MM-dd');
  }

  edit() {
    this.editing = true;
  }

  save(
    id: number,
    title: string,
    type: string,
    institution: string,
    description: string
  ) {
    const data = {
      title: title,
      type: type,
      institution: institution,
      description: description,
      date_of_start: this.dataload.date_of_start,
      date_of_finish: this.dataload.date_of_start,
    };
    this.putdata.changeEntity(`education/${id}`, data).subscribe(() => {
      this.editing = false;
      window.location.reload();
    });
  }
}
