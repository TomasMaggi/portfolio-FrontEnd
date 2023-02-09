import { Component, OnInit, Input } from '@angular/core';
import { EditDataService } from 'src/app/services/edit-data/edit-data.service';
import { GetDataloadService } from 'src/app/services/get-dataload/get-dataload.service';
import { IPersona } from '../../interfaces/persona_interface';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  @Input()
  islogged: boolean = false;

  editing: boolean = false;

  // doesnt matter what is inside the obj cause is just sended to the
  // service so he knows what type of object send back
  dataload: IPersona = {
    id: 0,
    first_name: '',
    last_name: '',
    about_me_text: '',
    img_route: '',
  };

  constructor(
    private getdataservice: GetDataloadService,
    private editdataservice: EditDataService
  ) {}

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

  edit() {
    this.editing = true;
  }

  save(p_nombre: string, p_apellido: string, p_about: string) {
    this.editing = false;

    const data = {
      first_name: p_nombre,
      last_name: p_apellido,
      about_me_text: p_about,
      img_route: this.dataload.img_route,
    };

    this.editdataservice
      .changeEntity('persona/1', data)
      .subscribe(() => window.location.reload());
  }
}
