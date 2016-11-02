import {Component, OnInit} from '@angular/core'


@Component({
    selector: 'top-header',
    template: `
        <md-toolbar color="primary">{{title}}</md-toolbar>
    `
})
export class HeaderComponent implements OnInit{
    abstract;
    title: string;

    ngOnInit(): void{
        this.title = 'Kevin';
    }
}