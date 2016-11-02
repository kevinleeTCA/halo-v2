import {Component, OnInit} from '@angular/core'


@Component({
    selector: 'nav-lhs',
    template: `
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
    `
})
export class NavigationLHSComponent implements OnInit{
    abstract;
    items: string[];

    ngOnInit(): void{
        this.items = [
            'Dashboard',
            'Topics',
            'Cases',
            'Directories'
        ];
    }
}