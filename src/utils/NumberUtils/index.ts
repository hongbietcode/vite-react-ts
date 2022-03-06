/* eslint-disable no-useless-escape */

const vndFormat = (x: number | string, inValidResult = '--') => {
    if (typeof x === 'string') {
        if (parseInt('1,2') == 1) {
            x = parseInt(x.replace(/\,/g, ''));
        } else {
            x = parseInt(x.replace(/\./g, ''));
        }
    }

    if (!isNaN(x)) {
        return (x || 0).toLocaleString('he-IL') + ' ₫';
    }

    return inValidResult;
};

const numberFormat = (x: number | string, inValidResult = '--') => {
    if (typeof x === 'string') {
        if (parseInt('1,2') == 1) {
            x = parseInt(x.replace(/\,/g, ''));
        } else {
            x = parseInt(x.replace(/\./g, ''));
        }
    }

    if (!isNaN(x)) {
        return (x || 0).toLocaleString('he-IL');
    }

    return inValidResult;
};

const NumberUtils = {
    vndFormat,
    numberFormat,
};

export default NumberUtils;
