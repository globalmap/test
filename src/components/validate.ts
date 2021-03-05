import {
    validateEmail,
    validateAge,
    validateExp,
    validateYearly,
    validateLicense,
    validateDate,
    validateChildren
} from './validateFunctions';

export const validationStyle = ( dataKey: any, Key: any, dataAge: any) => {
    let  style = {};
    switch (Key) {
        case "Email":
            if(validateEmail(dataKey) === false) {
                style={background: "#f4cccc"}
            }
            break;
        case "Age":
            if(validateAge(dataKey) === false) {
                style={background: "#f4cccc"}
            }
            break;
        case "Expirience":
            if(validateExp(dataKey, dataAge) === false) {
                style={background: "#f4cccc"}
            }
            break;

        case "Yearly Income":
            if(validateYearly(dataKey) === false) {
                style={background: "#f4cccc"}
            }
            break;

        case "License number":
            if(validateLicense(dataKey) === false) {
                style={background: "#f4cccc"}
            }
            break;
        
        case "Expiration date":
            if(validateDate(dataKey) === false) {
                style={background: "#f4cccc"}
            }
            break;   

        case "Has Children":
            if(validateChildren(dataKey) === false) {
                style={background: "#f4cccc"}
            }
            break;

        default:
            break;
    }

    
    return style;
}


export const validateEmpty = (Key: any, dataKey: any) => {
    let data = dataKey;

    switch (Key) {
        case 'Email':
            data = dataKey.toLowerCase()
            break;
        case 'Phone':
            if (dataKey.length === 10) {
                data = `+1${dataKey}`
            } else if(dataKey.length === 11 && dataKey.charAt() === '1') {
                data = `+${dataKey}`
            } 
            break;
        case 'Has Children':
            if(dataKey === '') {
                data = 'FALSE'
            }
            break;
        case 'Yearly Income':
            data = parseFloat(dataKey.replace(',', '.')).toFixed(2)
            break;
        default:
            break;
    }

    return data;
}