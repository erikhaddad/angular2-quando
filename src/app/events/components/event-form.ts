import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'event-form',
  styleUrls: ['./event-form.scss'],
  templateUrl: 'event-form.html'
})

export class EventFormComponent {
  @Output() createEvent = new EventEmitter(false);

  title: string = '';

  clear(): void {
    this.title = '';
  }

  submit(): void {
    const title: string = this.title.trim();
    if (title.length) {
      this.createEvent.emit(title);
    }
    this.clear();
  }
}
