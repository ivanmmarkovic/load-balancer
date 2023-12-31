export function handleErrors(error) {
    let status = undefined;
    let message = undefined;
    
    if(error.message.indexOf('dup key') != -1){
        let key = error.message.substring(error.message.lastIndexOf('{') + 1, error.message.lastIndexOf(':')).trim();
        status = 400;
        message = `Duplicate key ${key}`;
    }
    if(error.message.indexOf('Cast to ObjectId failed for value') != -1){
        status = 400;
        message = `Invalid param`;
    }
    if(error.message.indexOf('required') != -1){
        let index = error.message.indexOf('`') + 1;
        let key = error.message.substring(error.message.indexOf('`') + 1, error.message.indexOf('`', index));
        status = 400;
        message = `Required field ${key}`;
    }
    if(error.message == 'Not found'){
        status = 404;
        message = 'Not found';
    }

    return [status, message];
}

