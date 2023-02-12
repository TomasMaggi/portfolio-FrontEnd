import { Component, OnInit, Input } from '@angular/core';
import { GetDataloadService } from 'src/app/services/get-dataload/get-dataload.service';
import { DatePipe } from '@angular/common';
import { ComponentGeneratorService } from 'src/app/services/component-generator/component-generator.service';
import { IsLoadingService } from 'src/app/services/is-loading/is-loading.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input()
  isLogged: boolean = false;
  editing: boolean = false;
  adding: boolean = false;

  new_start_date: Date | null = null;
  new_finish_date: Date | null = null;

  // later whis will be filled with the info inside the request
  dataload: any[] = [];

  constructor(
    private getdataservice: GetDataloadService,
    private datepipe: DatePipe,
    private newComponentService: ComponentGeneratorService,
    private loadingMessage: IsLoadingService
  ) {}

  ngOnInit(): void {
    this.fill();
    console.log(this.isLogged);
  }

  fill(): void {
    // this is the endpoint to call to GET the expereince array data
    let url = 'experience/';

    // refill the object with the data inside the response and
    // add a reference so we can know if is being edited right now
    this.getdataservice
      .get_dataload(url, this.dataload)
      .subscribe((data: any) => {
        this.dataload = data;
      });
  }
  transformDate(date: any) {
    return this.datepipe.transform(date, 'yyyy-MM-dd');
  }

  save(name: string, descr: string, logo: string) {
    const data = {
      company_name: name,
      job_description: descr,
      company_logo_url: logo,
      start_date: this.new_start_date,
      finish_date: this.new_finish_date,
    };
    this.loadingMessage.sendData(false);
    this.newComponentService.add('experience/', data).subscribe(() => {
      window.location.reload();
    });
  }

  addDate(e: any) {
    return new Date(e.target.value);
  }
}
