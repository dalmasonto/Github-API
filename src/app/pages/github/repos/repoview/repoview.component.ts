import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from 'src/app/classes/repository';
import { User } from 'src/app/classes/user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repoview',
  templateUrl: './repoview.component.html',
  styleUrls: ['./repoview.component.scss']
})
export class RepoviewComponent implements OnInit {

  username: string = ''
  reponame: string = ''

  repo: any = null
  loadingRepo: boolean = true;

  activeTab: string = 'https';

  contributors: any = null;
  loadingContributors: boolean = true;

  stargazers: any = null;
  loadingStargazers: boolean = true;

  loadingOwner: boolean = true;

  loadingLanguages: boolean = false;
  repoLanguages: any = null;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.reponame = params['reponame'];
    });
    this.getRepo();
  }

  getRepo() {
    this.githubService.getUserRepo(this.username, this.reponame).subscribe(response => {
      const repo = this.githubService.makeObject(Repository, response);
      this.loadingRepo = false;
      this.getRepoOwner(repo);
      this.getRepoContributors(repo);
      this.getRepoLanguages(repo);
      this.getRepoStargazers(repo);

    })
  }

  getRepoOwner(repo: any) {
    this.loadingOwner = true;
    this.githubService.getUser(this.username).subscribe(user => {
      repo.owner = this.githubService.makeObject(User, user);
      this.repo = repo;
      this.loadingOwner = false;
    });
  }

  getRepoLanguages(repo: any) {
    this.loadingLanguages = true;
    this.githubService.getRepoLanguages(repo.languages_url).subscribe(languages => {
      this.calculateLangugesPercentage(languages);
      this.loadingLanguages = false;
    });
  }

  calculateLangugesPercentage(languagesObj: any) {
    const langs = [];
    for (let language of Object.entries(languagesObj)) {
      langs.push({
        name: language[0],
        value: language[1]
      })
    }
    let total = 0;
    for (let language of langs) {
      total += <number>(language.value);
    }
    for (let language of langs) {
      language['value'] = ((<number>language.value / total) * 100).toFixed(2);
    }
    this.repoLanguages = langs;
  }

  getRepoContributors(repo: any) {
    this.githubService.getRepoContributors(repo.contributors_url).subscribe(contributors => {
      this.contributors = contributors;
      this.loadingContributors = false;
    });
  }

  getRepoStargazers(repo: any) {
    this.githubService.getRepoStargazers(repo.stargazers_url).subscribe(stargazers => {
      this.stargazers = stargazers;
      this.loadingStargazers = false;
    });
  }

}
