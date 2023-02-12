import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/project_interface';
import { GetDataloadService } from 'src/app/services/get-dataload/get-dataload.service';
import { IsLoadingService } from 'src/app/services/is-loading/is-loading.service';
import { ComponentGeneratorService } from 'src/app/services/component-generator/component-generator.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  dataload: IProject[] = [];

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
    let url = 'project/';

    // refill the object with the data inside the response
    this.getdataservice
      .get_dataload(url, this.dataload)
      .subscribe((data: any) => {
        this.dataload = data;
      });
  }

  save(
    url: string,
    title: string,
    description: string,
    repo: string,
    live: string
  ) {
    const data = {
      title: title,
      repo_url: repo,
      live_url: live,
      description: description,
      img_url: url,
    };

    this.loadingMessage.sendData(false);
    this.addService.add('project/', data).subscribe(() => {
      window.location.reload();
    });
  }
}
