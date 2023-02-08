import { Component, OnInit, Input } from '@angular/core';
import { GetDataloadService } from 'src/app/services/get-dataload/get-dataload.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input()
  isLogged: boolean = false;
  editing: boolean = false;

  // later whis will be filled with the info inside the request
  dataload: any[] = [];

  constructor(
    private getdataservice: GetDataloadService,
    private datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.fill();
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
        for (let i of this.dataload) {
          i['edditing'] = false;
        }
      });
  }
  transformDate(date: any) {
    return this.datepipe.transform(date, 'yyyy-MM-dd');
  }

  edit(expereince: any) {
    console.log(expereince.id);

    expereince.edditing = true;
  }
}
