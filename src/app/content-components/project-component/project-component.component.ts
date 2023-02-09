import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/project_interface';
import { EditDataService } from 'src/app/services/edit-data/edit-data.service';

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.css'],
})
export class ProjectComponentComponent implements OnInit {
  @Input()
  dataload: IProject = {
    id: 0,
    title: '',
    repo_url: '',
    live_url: '',
    description: '',
    img_url: '',
  };

  @Input()
  isLogged: boolean = false;
  editing: boolean = false;

  constructor(private editdata: EditDataService) {}

  ngOnInit(): void {}

  edit() {
    this.editing = true;
  }

  save(id: number, title: string, description: string) {
    const data = {
      title: title,
      repo_url: this.dataload.repo_url,
      live_url: this.dataload.repo_url,
      description: description,
      img_url: this.dataload.img_url,
    };

    this.editdata.changeEntity(`project/${id}`, data).subscribe(() => {
      this.editing = false;
      window.location.reload();
    });
  }
}
