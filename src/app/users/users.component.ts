import { Component, OnInit } from '@angular/core';

import { UserApiServiceService } from '../user-api-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userApi: UserApiServiceService) { }

  ngOnInit(): void {
    // alert('user component loaded');
    // this.http.get('https://reqres.in/api/users?page=2').subscribe(
    //   (data:UsersInterface) => {
    //     console.log(data);
    //     alert(data.total);
    //   },
    //   (error) => {
    //     console.clear();
    //     console.log('Error occurred on API call');
    //     console.log(error);
    //   }
    // )

    this.userApi.getUsers(

    )
  }

}
