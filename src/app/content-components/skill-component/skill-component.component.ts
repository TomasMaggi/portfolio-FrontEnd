import { Component, Input, OnInit } from '@angular/core';
import { ISkill } from 'src/app/interfaces/skill_interface';
import { EditDataService } from 'src/app/services/edit-data/edit-data.service';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css'],
})
export class SkillComponentComponent implements OnInit {
  @Input()
  isLogged: boolean = false;

  @Input()
  dataload: ISkill = {
    id: 0,
    technology: '',
    percentage: '',
    icon_url: '',
  };

  editing: boolean = false;

  constructor(private editData: EditDataService) {}

  ngOnInit(): void {}

  edit() {
    this.editing = true;
  }

  save(id: number, technology: string, percentage: string) {
    const data = {
      technology: technology,
      percentage: percentage,
      icon_url: this.dataload.icon_url,
    };
    this.editData.changeEntity(`skill/${id}`, data).subscribe(() => {
      window.location.reload();
    });
  }
}
