import { Component } from '@angular/core'

@Component({
    selector: 'halo-v2',
    template: `
        <top-header>Loading user info...</top-header>
        <div class="nav-and-content">
            <nav-lhs>Loading LHS...</nav-lhs>
            <content-mid>Loading middle pannel...</content-mid>
        </div>
    `,
    styles: [`
        .nav-and-content {
            flex: 1;
            display: flex;
            flex-direction: row;
        }

        content-mid {
            flex: 1;
        }
    `]
})
export class AppComponent{ }