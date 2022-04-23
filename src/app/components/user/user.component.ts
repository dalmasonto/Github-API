import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/classes/repository';
import { User } from 'src/app/classes/user';
import { Stat } from 'src/app/interfaces/stat';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  my_profile: any = null
  loading: boolean = false
  @Input() username: string = ''

  stats: Stat[] = []
  repos: Repository[] = []

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
    if (this.username !== '') {
      this.getUser(this.username)
      this.getUserRepos(this.username)
    }
  }

  getUser(username: string): void {
    this.githubService.getUser(username).subscribe(result => {
      this.my_profile = this.githubService.makeObject(User, result)
      this.stats = this.my_profile.getStats()
      this.loading = false
    })
  }

  getUserRepos(username: string): void {
    this.githubService.getUserRepos(username).subscribe(result => {
      result.map((repo: any) => {
        const prof = this.githubService.makeObject(User, repo.owner)
        this.repos.push(this.githubService.makeObject(Repository, repo))
      })
    })
  }

}
