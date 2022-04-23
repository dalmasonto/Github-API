import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  socials: any = [
    {
      icon: 'fab fa-facebook-f',
      link: 'https://www.facebook.com/',
      title: 'Dalmas Ogembo'
    },
    {
      icon: 'fab fa-twitter',
      link: 'https://twitter.com/',
      title: 'Dalmas Ogembo'
    },
    {
      icon: 'fab fa-instagram',
      link: 'https://www.instagram.com/',
      title: 'Dalmas Ogembo'
    },
    {
      icon: 'fab fa-linkedin-in',
      link: 'https://www.linkedin.com/',
      title: 'dalmasonto',
    },
    {
      icon: 'fab fa-github',
      link: '',
      title: 'dalmasonto',
    }
  ]

  company_socials: any = [
    {
      icon: 'fab fa-youtube',
      link: '',
      title: 'LIVE Software Developer',
    },
    {
      icon: 'fab fa-google-plus-g',
      link: '',
      title: 'LIVE Software Developer',
    },
    {
      icon: 'fab fa-pinterest-p',
      link: '',
      title: 'LIVE Software Developer',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
