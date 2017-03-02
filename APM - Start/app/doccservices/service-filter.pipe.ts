import { PipeTransform, Pipe } from '@angular/core';

import { IDoccService } from './doccservice';


@Pipe({
    name: 'serviceFilter'
})

export class ServiceFilterPipe implements PipeTransform{
    transform(value: IDoccService[], filterBy: string) : IDoccService[] {
        return filterBy? value.filter((service:IDoccService) =>
            service.serviceName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}