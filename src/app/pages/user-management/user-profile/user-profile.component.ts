import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'ngx-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  form: FormGroup;
  user: any;
  path = 'User';
  sidemenuTitle = 'User profile';
  sidemenuValue = 'admin';
  sidemenuLinks = [
    {
      title: 'My profile',
      link: ''
    },
    {
      title: 'Change password',
      link: ''
    }
  ];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    const id = this.userService.getUserId();
    this.userService.getUser(id)
      .subscribe(user => {
        this.user = user;
      });
  }

}
