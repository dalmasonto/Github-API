import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  ACCESS_TOKEN: string = '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'

  headers: HttpHeaders = new HttpHeaders()


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    // this.headers.set('Authorization', `Token ${this.ACCESS_TOKEN}`);
    // this.headers.set('me', `Token ${this.ACCESS_TOKEN}`);

  }


  getUser(username: string): Observable<any> {
    this.headers.set('Authorization', `token ${this.ACCESS_TOKEN}`);
    const endpoint = `https://api.github.com/users/${username}`;
    return this.http.get(endpoint, {
      headers: this.headers
    }).pipe(response => {
      return response
    });
  }

  makeObject(target_object: any, obj_to_convert: any): any {
    const obj_to_return = new target_object();
    for (let item of Object.entries(obj_to_convert)) {
      obj_to_return[item[0]] = item[1];
    }
    return obj_to_return;
  }

  getUserRepos(username: string): Observable<any> {
    const endpoint = `https://api.github.com/users/${username}/repos`;
    return this.http.get(endpoint, {
      headers: {
        Authorization: `token ${this.ACCESS_TOKEN}`,
      }
    }).pipe(response => {
      return response
    });
  }

  getUserRepo(username: string, repo: string): Observable<any> {
    const endpoint = `https://api.github.com/repos/${username}/${repo}`;
    return this.http.get(endpoint, {
      headers: {
        Authorization: `token ${this.ACCESS_TOKEN}`,
      }
    }).pipe(response => {
      return response
    });
  }

  getRepoLanguages(endpoint: string): Observable<any> {
    return this.http.get(endpoint, {
      headers: {
        Authorization: `token ${this.ACCESS_TOKEN}`,
      }
    }).pipe(response => {
      return response
    });
  }

  getRepoContributors(endpoint: string): Observable<any> {
    return this.http.get(endpoint, {
      headers: {
        Authorization: `token ${this.ACCESS_TOKEN}`,
      }
    }).pipe(response => {
      return response
    });
  }

  getRepoStargazers(endpoint: string): Observable<any> {
    return this.http.get(endpoint, {
      headers: {
        Authorization: `token ${this.ACCESS_TOKEN}`,
      }
    }).pipe(response => {
      return response
    });
  }

  getRepoTopics(endpoint: string): Observable<any> {
    return this.http.get(endpoint, {
      headers: {
        Authorization: `token ${this.ACCESS_TOKEN}`,
      }
    }).pipe(response => {
      return response
    });
  }

  searchUsers(search_term: string): Observable<any> {
    const endpoint = `https://api.github.com/search/users?q=${search_term}`;
    return this.http.get(endpoint, {
      headers: {
        Authorization: `token ${this.ACCESS_TOKEN}`,
      }
    }).pipe(response => {
      return response
    });
  }

  searchRepos(search_term: string): Observable<any> {
    const endpoint = `https://api.github.com/search/repositories?q=${search_term}`;
    return this.http.get(endpoint, {
      headers: {
        Authorization: `token ${this.ACCESS_TOKEN}`,
      }
    }).pipe(response => {
      return response
    });
  }

}
