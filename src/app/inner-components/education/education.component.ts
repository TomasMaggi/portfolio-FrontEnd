import { Component, OnInit, Input } from '@angular/core';
import { GetDataloadService } from 'src/app/services/get-dataload/get-dataload.service';
import { IEducation } from 'src/app/interfaces/education_interface';
import { DatePipe } from '@angular/common';
import { ComponentGeneratorService } from 'src/app/services/component-generator/component-generator.service';
import { IsLoadingService } from 'src/app/services/is-loading/is-loading.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  dataload: IEducation[] = [];

  @Input()
  isLogged: boolean = false;

  adding = false;
  new_start_date: Date | null = null;
  new_finish_date: Date | null = null;

  constructor(
    private getdataservice: GetDataloadService,
    private newComponentService: ComponentGeneratorService,
    private loadingMessage: IsLoadingService
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
  save(title: string, type: string, institution: string, desc: string) {
    const data = {
      title: title,
      type: type,
      institution: institution,
      description: desc,
      date_of_start: this.new_start_date,
      date_of_finish: this.new_finish_date,
    };
    this.loadingMessage.sendData(false);
    this.newComponentService.add('education/', data).subscribe(() => {
      window.location.reload();
    });
  }

  addDate(e: any) {
    return new Date(e.target.value);
  }
}
