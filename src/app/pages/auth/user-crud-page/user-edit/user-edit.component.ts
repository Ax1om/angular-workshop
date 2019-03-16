import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@core/services/data/user.service';

@Component({
  selector: 'si-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    this.user = this.activatedRoute.snapshot.data.user || {};
  }

  ngOnInit() {
  }

  onSubmit() {
    this.user.birthday = new Date(this.user.birthday).toISOString();
    this.userService.save(this.user).subscribe(() => {
      this.router.navigate(['/pages/user-crud'])
    });
  }

}
