import { Injectable } from '@angular/core';
import { DefaultTags } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor() { }

  getTags(tags: Array<number>) {
    return DefaultTags.filter(tag => tags.includes(tag.id));
  }

}
