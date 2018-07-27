import {PipeTransform, Pipe} from '@angular/core';
import { Quizz } from './../domain';

@Pipe({name: 'filterPipe'})
export class FilterPipe implements PipeTransform {
    transform(value, args) {
        if(args != undefined) {
            return value.filter(duel => duel.quizz.titre.includes(args));
        } else {
            return value;
        }
    }
}
