import * as uuid from 'node-uuid';

export function generateGuid():string{
    let timeString:string = uuid.v4();

    return timeString.replace(/\./g,'');
}
