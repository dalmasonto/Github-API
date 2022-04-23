import { Stat } from "../interfaces/stat";

export class Repository {
  // Make a constructor of a github repository
  constructor(
    public id: number,
    public node_id: string,
    public name: string,
    public full_name: string,
    public private_: boolean,
    public owner: any,
    public html_url: string,
    public description: string,
    public fork: boolean,
    public url: string,
    public forks_url: string,
    public keys_url: string,
    public collaborators_url: string,
    public teams_url: string,
    public hooks_url: string,
    public issue_events_url: string,
    public events_url: string,
    public assignees_url: string,
    public branches_url: string,
    public tags_url: string,
    public blobs_url: string,
    public git_tags_url: string,
    public git_refs_url: string,
    public trees_url: string,
    public statuses_url: string,
    public languages_url: string,
    public stargazers_url: string,
    public contributors_url: string,
    public subscribers_url: string,
    public subscription_url: string,
    public commits_url: string,
    public git_commits_url: string,
    public comments_url: string,
    public issue_comment_url: string,
    public contents_url: string,
    public compare_url: string,
    public merges_url: string,
    public archive_url: string,
    public downloads_url: string,
    public issues_url: string,
    public pulls_url: string,
    public milestones_url: string,
    public notifications_url: string,
    public labels_url: string,
    public releases_url: string,
    public deployments_url: string,
    public created_at: Date,
    public updated_at: Date,
    public pushed_at: Date,
    public git_url: string,
    public ssh_url: string,
    public clone_url: string,
    public svn_url: string,
    public homepage: string,
    public size: number,
    public stargazers_count: number,
    public watchers_count: number,
    public language: string,
    public has_issues: boolean,
    public has_projects: boolean,
    public has_downloads: boolean,
    public has_wiki: boolean,
    public has_pages: boolean,
    public forks_count: number,
    public mirror_url: string,
    public archived: boolean,
    public disabled: boolean,
    public open_issues_count: number,
    public license: any,
    public forks: number,
    public open_issues: number,
    public watchers: number,
    public default_branch: string,
    public score: number,
    public visibility: any,
    public subscribers_count: number,
  ) { }

  getStats(): Stat[] {
    return [
      {
        title: 'Forks',
        value: this.forks,
        url: `https://github.com/${this.owner.login}/${this.name}/fork`,
      },
      {
        title: 'Watchers',
        value: this.watchers,
        url: `https://github.com/${this.owner.login}/${this.name}/watchers`,
      },
      {
        title: 'Stars',
        value: this.stargazers_count,
        url: `https://github.com/${this.owner.login}/${this.name}/stargazers`,
      },
      {
        title: 'Issues',
        value: this.open_issues,
        url: `https://github.com/${this.owner.login}/${this.name}/issues`,
      },
      {
        title: 'Subscribers',
        value: this.subscribers_count,
        url: this.html_url,
      }
    ]
  }

  getMoreInfo() {
    return [
      {
        title: 'Description',
        value: this.description,
        icon: 'fas fa-info-circle',
      },
      {
        title: 'Visibility',
        value: this.visibility,
        icon: 'fas fa-eye'
      },
      {
        title: 'Created',
        value: this.getDate(this.created_at),
        icon: 'fas fa-calendar-alt',
      },
      {
        title: 'Updated',
        value: this.getDate(this.updated_at),
        icon: 'fas fa-calendar-alt',
      },
      {
        title: 'Pushed',
        value: this.getDate(this.pushed_at),
        icon: 'fas fa-upload',
      },
      {
        title: 'Size',
        value: this.size,
        icon: 'fas fa-database',
      },
      {
        title: 'Forked',
        value: this.fork,
        icon: 'fa-solid fa-code-branch'
      }
    ]
  }

  getDate(date: Date): string {
    return new Date(date).toDateString();
  }
}


// export class Repository {
//   // Make a constructor of github repo based on id, name, full_name, forks, languages
//   constructor(
//     public id: number,
//     public name: string,
//     public full_name: string,
//     public forks: number,
//     public language: string,
//     public html_url: string,
//     public owner: User,
//     public created_at: Date,
//   ) { }
// }
