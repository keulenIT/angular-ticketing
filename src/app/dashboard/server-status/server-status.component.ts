import { Component } from "@angular/core";

@Component({
  selector: "app-server-status",
  standalone: true,
  imports: [],
  templateUrl: "./server-status.component.html",
  styleUrl: "./server-status.component.css",
})
export class ServerStatusComponent {
  currentStatus: "online" | "offline" | "unknown" = "unknown";

  constructor() {
    setInterval(() => {
      const randomizer = Math.random();
      if (randomizer < 0.5) {
        this.currentStatus = "online";
      } else if (randomizer < 0.9) {
        this.currentStatus = "offline";
      } else {
        this.currentStatus = "unknown";
      }
    }, 5000);
  }
}
