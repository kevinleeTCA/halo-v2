import {Component, OnInit} from '@angular/core'


@Component({
    selector: 'content-mid',
    template: `
        <div>
            This will show details of each navigation item
        </div>
    `
})
export class ContentComponent implements OnInit{
    abstract;

    ngOnInit(): void{
    }
}