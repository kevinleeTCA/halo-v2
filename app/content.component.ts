import {Component, OnInit} from '@angular/core'


@Component({
    selector: 'content-mid',
    template: `
        <div>
            This will show details of each navigation item
            <router-outlet></router-outlet>
        </div>
    `
})
export class ContentComponent implements OnInit{
    abstract;

    ngOnInit(): void{
    }
}