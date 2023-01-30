import { Component, OnInit } from '@angular/core';
import { ISkill } from 'src/app/interfaces/skill_interface';
import { GetDataloadService } from 'src/app/services/get-dataload/get-dataload.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  dataload: ISkill[] = [];

  constructor(private getdataservice: GetDataloadService) {}

  ngOnInit(): void {
    this.fill();
  }

  fill(): void {
    // this is the endpoint to call to GET the expereince array data
    let url = 'skill/';

    // refill the object with the data inside the response
    this.getdataservice
      .get_dataload(url, this.dataload)
      .subscribe((data: any) => {
        this.dataload = data;
      });
  }
}
