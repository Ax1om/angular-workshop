import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'si-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.scss']
})
export class UserInsertComponent implements OnInit {
  user: any;
  userFromGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.userFromGroup = this.formBuilder.group({
      name: ['', Validators.required],
      surname: '',
      country: '',
      email: ['', Validators.compose(
        [
          Validators.required,
          Validators.email
        ]
      )]
    });
  }

  submitForm() {
    this.user = {
      name: this.userFromGroup.value.name,
      surname: this.userFromGroup.value.surname,
      country: this.userFromGroup.value.country,
      email: this.userFromGroup.value.email,
    };
  }
}
