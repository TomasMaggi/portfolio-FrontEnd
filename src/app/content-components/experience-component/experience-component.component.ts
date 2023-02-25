import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IExperience } from 'src/app/interfaces/experience_interface';
import { DeleteComponentService } from 'src/app/services/delete-component/delete-component.service';
import { EditDataService } from 'src/app/services/edit-data/edit-data.service';
import { IsLoadingService } from 'src/app/services/is-loading/is-loading.service';

@Component({
  selector: 'app-experience-component',
  templateUrl: './experience-component.component.html',
  styleUrls: ['./experience-component.component.css'],
})
export class ExperienceComponentComponent implements OnInit {
  @Input()
  dataload: IExperience = {
    id: 0,
    company_name: '',
    job_description: '',
    company_logo_url: '',
    start_date: null,
    finish_date: null,
  };
  @Input()
  isLogged: boolean = false;

  editing: boolean = false;

  constructor(
    private datepipe: DatePipe,
    private saveDataService: EditDataService,
    private loadingMessage: IsLoadingService,
    private deleteService: DeleteComponentService
  ) {}

  ngOnInit(): void {}

  transformDate(date: any) {
    return this.datepipe.transform(date, 'yyyy-MM-dd');
  }

  edit(expereince: any) {
    this.editing = true;
  }

  save(
    id: string,
    company_name: string,
    description: string,
    start_Date: Date | null = this.dataload.start_date,
    finish_date: Date | null = this.dataload.finish_date
  ) {
    const data = {
      company_name: company_name,
      job_description: description,
      company_logo_url: this.dataload.company_logo_url,
      start_date: start_Date,
      finish_date: finish_date,
    };

    this.editing = false;
    this.loadingMessage.sendData(true);
    this.saveDataService
      .changeEntity(`experience/${id}`, data)
      .subscribe(() => {
        window.location.reload();
      });
  }
  addDate(e: any) {
    return new Date(e.target.value);
  }

  erase(id: number) {
    this.loadingMessage.sendData(false);
    this.deleteService.delete(`experience/${id}`).subscribe(() => {
      window.location.reload();
    });
  }
}
