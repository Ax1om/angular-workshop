import { Component, OnInit } from '@angular/core';
export interface ISkill {
  name: string;
  category: string;
  valid: boolean;
}
@Component({
  selector: 'si-skill-insert',
  templateUrl: './skill-insert.component.html',
  styleUrls: ['./skill-insert.component.scss']
})
export class SkillInsertComponent {
  skill: ISkill = {
    name: '',
    category: '',
    valid: true
  };

  submitForm() {
    // call your backend service with skill
    alert('user send');
  }
}
