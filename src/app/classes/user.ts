import { Stat } from "../interfaces/stat";

export class User {
  //  Make a constructor of a github user
  constructor(
    public login: string,
    public id: number,
    public node_id: string,
    public avatar_url: string,
    public gravatar_id: string,
    public url: string,
    public html_url: string,
    public followers_url: string,
    public following_url: string,
    public gists_url: string,
    public starred_url: string,
    public subscriptions_url: string,
    public organizations_url: string,
    public repos_url: string,
    public events_url: string,
    public received_events_url: string,
    public type: string,
    public site_admin: boolean,
    public name: string,
    public company: string,
    public blog: string,
    public location: string,
    public email: string,
    public hireable: boolean,
    public bio: string,
    public public_repos: number,
    public public_gists: number,
    public followers: number,
    public following: number,
    public created_at: Date,
    public updated_at: Date,
    public twitter_username: string
  ) { }

  // Make a method to get the user's stats
  getStats(): Stat[] {
    return [
      {
        title: 'Followers',
        value: this.followers,
        url: `https://github.com/${this.login}?tab=followers`
      },
      {
        title: 'Following',
        value: this.following,
        url: `https://github.com/${this.login}?tab=following`
      },
      {
        title: 'Gists',
        value: this.public_gists,
        url: `https://github.com/${this.login}?tab=gists`
      },
      {
        title: 'Repositories',
        value: this.public_repos,
        url: `https://github.com/${this.login}?tab=repositories`
      },
    ];
  }

  getMoreInfo() {
    return [
      {
        title: 'Company',
        value: this.company,
        icon: 'fas fa-building'
      },
      {
        title: 'Location',
        value: this.location,
        icon: 'fas fa-map-marker-alt'
      },
      {
        title: 'Email',
        value: this.email,
        icon: 'fas fa-envelope'
      },
      {
        title: 'Hireable',
        value: this.hireable,
        icon: 'fas fa-user-check'
      },
      {
        title: 'Bio',
        value: this.bio,
        icon: 'fas fa-user-edit'
      },
      {
        title: 'Member Since',
        value: this.getDate(this.created_at),
        icon: 'fas fa-calendar-alt'
      },
      {
        title: 'Last Updated',
        value: this.getDate(this.updated_at),
        icon: 'fas fa-calendar-alt'
      },
      {
        title: 'Username',
        value: this.twitter_username,
        icon: 'fab fa-twitter'
      }
    ];
  }

  getDate(date: Date): string {
    return new Date(date).toDateString();
  }

}
