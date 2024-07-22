import { Component, input } from "@angular/core";
import { Image } from "../../types/elementTypes";

@Component({
  selector: "app-dashboard-item",
  standalone: true,
  imports: [],
  templateUrl: "./dashboard-item.component.html",
  styleUrl: "./dashboard-item.component.css",
})
export class DashboardItemComponent {
  title = input.required<string>();
  image = input.required<Image>();
}
