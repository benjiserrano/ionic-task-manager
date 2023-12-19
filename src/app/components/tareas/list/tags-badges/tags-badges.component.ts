import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Tag } from 'src/app/models/Tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tags-badges',
  templateUrl: './tags-badges.component.html',
  styleUrls: ['./tags-badges.component.scss'],
})
export class TagsBadgesComponent  implements OnInit, OnChanges {
 
  @Input() tagsIds!: Array<number>;
  tags!: Tag[];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.getTags();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tagsIds && changes['tagsIds']) {
      this.getTags();
    }
  }

  getTags() {
    this.tags = this.tagService.getTags(this.tagsIds);
  }

}
