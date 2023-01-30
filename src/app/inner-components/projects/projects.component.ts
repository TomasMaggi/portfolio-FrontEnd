import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/project_interface';
import { GetDataloadService } from 'src/app/services/get-dataload/get-dataload.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  dataload: IProject[] = [];

  constructor(private getdataservice: GetDataloadService) {}

  ngOnInit(): void {
    this.fill();
  }

  fill(): void {
    // this is the endpoint to call to GET the expereince array data
    let url = 'project/';

    // refill the object with the data inside the response
    this.getdataservice
      .get_dataload(url, this.dataload)
      .subscribe((data: any) => {
        this.dataload = data;
      });
  }
}
