import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repository } from 'src/app/classes/repository';
import { User } from 'src/app/classes/user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  loading: boolean = false;
  showResults: boolean = false;
  repos: Repository[] = [];
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
    this.router.navigate(['/github/repositories'], {
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
    this.repos = [];

    this.githubService.searchRepos(this.searchTerm).subscribe(
      (response: any) => {
        this.loading = false;
        this.showResults = true;
        for (let item of response.items) {
          this.repos.push(this.githubService.makeObject(Repository, item));
        }
      });
  }

}
