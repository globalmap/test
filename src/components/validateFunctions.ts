export function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validateAge(age: string) {
    let state = false;
    if(parseInt(age) >= 21 && parseInt(age) !== 0 ) {
        state = true
    } else {
        state = false
    }

    return state;
}

export function validateExp(exp: string, age: any) {
    let state = false;

    if(parseInt(exp) >= 0 && parseInt(exp) < age ) {
        state = true
    } else {
        state = false
    }

    return state
}

export function validateYearly(yearly: string) {
    let state = false;

    if(parseFloat(yearly) < 1000000 && parseFloat(yearly) >= 0) {
        state = true
    } else {
        state = false
    }


    return state;
}

export function validateDate(date: string) {
    let state = false;

    const reg1 = /^\d{4}-\d{2}-\d{2}$/.test(date); // yyyy-mm-dd
    const reg2 = /^\d{2}\/\d{1,2}\/\d{4}$/.test(date); // mm/dd/yyyy

    if(reg1 || reg2) {
        state = true
    }

    return state;
}


export function validateChildren(children: string) {
    let state = false;


    if(children === 'TRUE' || children === 'FALSE' || children === '') {
        state = true
    }

    return state;
}

export function validateLicense(license: string) {
    let state = false;
    const checkOnlyNumber = /^[0-9]+$/.test(String(license))

    if(undefined !== license && license.length === 6 && checkOnlyNumber === false) {
        state = true
    }

    return state;
}