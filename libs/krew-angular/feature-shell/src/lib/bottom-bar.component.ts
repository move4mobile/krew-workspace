import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'krew-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomBarComponent implements OnInit {
  ngOnInit(): void {
    console.log('BottomBarComponent -> ngOnInit');
  }
}
