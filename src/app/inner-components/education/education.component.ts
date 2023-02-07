import { Component, OnInit } from '@angular/core';
import { GetDataloadService } from 'src/app/services/get-dataload/get-dataload.service';
import { IEducation } from 'src/app/interfaces/education_interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  dataload: IEducation[] = [];

  constructor(
    private getdataservice: GetDataloadService,
    private datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.fill();
  }
  fill(): void {
    // this is the endpoint to call to GET the aboutme data
    let url = 'education/';

    // refill the object with the data inside the response
    this.getdataservice
      .get_dataload(url, this.dataload)
      .subscribe((data: any) => {
        this.dataload = data;
      });
  }

  transformDate(date: any) {
    return this.datepipe.transform(date, 'yyyy-MM-dd');
  }
}
