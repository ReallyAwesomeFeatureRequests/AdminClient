import {Component} from "@angular/core";

@Component({
  selector: 'rafr-callback',
  template: `
    <div class="card">
      <div class="card-block">
        <span i18n>Logging in...</span>
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated w-100" role="progressbar"
               aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  `
})
export class CallbackComponent {
}
