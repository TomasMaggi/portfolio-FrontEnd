import { Component, Input, OnInit } from '@angular/core';
import { ISkill } from 'src/app/interfaces/skill_interface';
import { EditDataService } from 'src/app/services/edit-data/edit-data.service';
import { IsLoadingService } from 'src/app/services/is-loading/is-loading.service';
import { DeleteComponentService } from 'src/app/services/delete-component/delete-component.service';

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

  constructor(
    private editData: EditDataService,
    private loadingMessage: IsLoadingService,
    private deleteService: DeleteComponentService
  ) {}

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
    this.loadingMessage.sendData(true);
    this.editData.changeEntity(`skill/${id}`, data).subscribe(() => {
      window.location.reload();
    });
  }
  erase(id: number) {
    this.loadingMessage.sendData(false);
    this.deleteService.delete(`skill/${id}`).subscribe(() => {
      window.location.reload();
    });
  }
}
