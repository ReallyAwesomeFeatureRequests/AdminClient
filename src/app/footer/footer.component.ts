import {Component} from "@angular/core";

@Component({
  selector: 'rafr-footer',
  template: `
    <footer class="footer navbar-fixed-bottom">
      <div class="container">
        <span class="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      margin-top: 16px;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 60px;
      line-height: 60px;
      background-color: #f5f5f5;
    }

  `]
})
export class FooterComponent {
}
