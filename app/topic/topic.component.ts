import { Component } from '@angular/core'

@Component({
    selector: 'topic',
    template: `
        <div>Topic</div>
        <a routerLink="/topics/1">topic detail</a>
        <router-outlet></router-outlet>
    `,
    styles: [`

    `]
})
export class TopicComponent{ }