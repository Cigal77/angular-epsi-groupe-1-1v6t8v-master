import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import {MatchService} from '../../../core/services/match.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  matchs$: Observable<CoreEnvironment>;

  constructor(
    private matchService: MatchService
  ) {
    this.matchs$ = matchService.get();
  }

  ngOnInit() {
  }

  supprTag(tab, tag): void {
    tab.slice(tag.index);
  }

}
