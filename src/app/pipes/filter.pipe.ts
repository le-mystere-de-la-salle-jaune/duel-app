import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'filterPipe'})
export class FilterPipe implements PipeTransform {
    transform(value, args) {
        let returnTab:any[];
        value.forEach(element => {
            if(element.titre.contains(args)) {
                returnTab.push(element);
            }
        });
        return returnTab;
    }
}
