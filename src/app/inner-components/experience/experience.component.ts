import { Component, OnInit } from '@angular/core';
import { IExperience } from 'src/app/interfaces/experience_interface';
import { GetDataloadService } from 'src/app/services/get-dataload/get-dataload.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  // later whis will be filled with the info inside the request
  dataload: IExperience[] = [];

  constructor(private getdataservice: GetDataloadService) {}

  ngOnInit(): void {
    this.fill();
  }

  fill(): void {
    // this is the endpoint to call to GET the expereince array data
    let url = 'experience/';

    // refill the object with the data inside the response
    this.getdataservice
      .get_dataload(url, this.dataload)
      .subscribe((data: any) => {
        this.dataload = data;
        console.log(this.dataload);
      });
  }
}
