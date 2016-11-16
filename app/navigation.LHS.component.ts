import {Component, OnInit} from '@angular/core'


@Component({
    selector: 'nav-lhs',
    template: `
        <div class="LHS-navigation">
            <md-list>
                <md-list-item *ngFor="let item of items">
                    <a routerLink="{{item.path}}" routerLinkActive="active">{{item.title}}</a>
                </md-list-item>
            </md-list>
        </div>

    `,
    styles:[`
        .LHS-navigation{
            width: 299px;
        }

    `]
})
export class NavigationLHSComponent implements OnInit{
    abstract;
    items: string[];

    ngOnInit(): void{
        this.items = [
            {title: 'Dashboard', path: '/dashboard'},
            {title: 'Topics', path: '/topics'},
            {title: 'Cases', path: '/cases'},
            {title: 'Directories', path: '/directories'},
        ];
    }
}