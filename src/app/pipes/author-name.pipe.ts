import { Pipe, PipeTransform } from '@angular/core';
import { AuthorUtil } from '../utils/author-util';

@Pipe({
  name: 'authorName'
})
export class AuthorNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return AuthorUtil.formatName(value);
  }

}
