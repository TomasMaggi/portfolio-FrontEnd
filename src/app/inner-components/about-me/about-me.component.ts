import { Component, OnInit } from '@angular/core';
import { GetDataloadService } from 'src/app/services/get-dataload/get-dataload.service';
import { IPersona } from '../../interfaces/persona_interface';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  // doesnt matter what is inside the obj cause is just sended to the
  // service so he knows what type of object send back
  dataload: IPersona = {
    id: 0,
    first_name: '',
    last_name: '',
    about_me_text: '',
    img_route: '',
  };

  constructor(private getdataservice: GetDataloadService) {}

  ngOnInit(): void {
    this.fill();
  }

  fill(): void {
    // this is the endpoint to call to GET the aboutme data
    let url = 'persona/1';

    // refill the object with the data inside the response
    this.getdataservice
      .get_dataload(url, this.dataload)
      .subscribe((data: any) => {
        this.dataload = data;
      });
  }
}
