import { Component, Input, OnInit } from '@angular/core';
import { ISkill } from 'src/app/interfaces/skill_interface';
import { GetDataloadService } from 'src/app/services/get-dataload/get-dataload.service';
import { ComponentGeneratorService } from 'src/app/services/component-generator/component-generator.service';
import { IsLoadingService } from 'src/app/services/is-loading/is-loading.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  dataload: ISkill[] = [];

  @Input()
  isLogged: boolean = false;
  adding: boolean = false;

  constructor(
    private getdataservice: GetDataloadService,
    private addService: ComponentGeneratorService,
    private loadingMessage: IsLoadingService
  ) {}

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

  save(url: string, technology: string, percentage: string) {
    const data = {
      technology: technology,
      percentage: percentage,
      icon_url: url,
    };
    this.loadingMessage.sendData(false);
    this.addService.add('skill/', data).subscribe(() => {
      window.location.reload();
    });
  }
}
