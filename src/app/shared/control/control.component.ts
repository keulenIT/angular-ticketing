import {
  Component,
  ElementRef,
  ViewEncapsulation,
  inject,
  input,
} from "@angular/core";

@Component({
  selector: "app-control, a[appButton]",
  standalone: true,
  imports: [],
  templateUrl: "./control.component.html",
  styleUrl: "./control.component.css",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "control",
  },
})
export class ControlComponent {
  label = input.required<string>();
  private el = inject(ElementRef);

  onClick() {
    console.log(this.el);
  }
}
