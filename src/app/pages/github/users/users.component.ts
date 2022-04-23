import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  loading: boolean = false;
  showResults: boolean = false;
  users: User[] = [];
  searchTerm: string = '';
  constructor(
    private githubService: GithubService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {

      if (params['q']) {
        this.searchTerm = params['q'];
        this.search();
      }
    })
  }

  addSerchTermtoUrl() {
    this.router.navigate(['/github/users'], {
      queryParams: {
        q: this.searchTerm
      },
      queryParamsHandling: 'merge',
    });
  }

  search() {
    this.addSerchTermtoUrl();
    this.loading = true;
    this.showResults = false;
    this.users = [];

    this.githubService.searchUsers(this.searchTerm).subscribe(
      (response: any) => {
        this.loading = false;
        this.showResults = true;
        for (let item of response.items) {
          this.users.push(this.githubService.makeObject(User, item));
        }
      });
  }

}
