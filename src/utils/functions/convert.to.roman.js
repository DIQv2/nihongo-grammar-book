export const convertToRoman = (num) => {
    const romanNumerals = [
        { value: 1000, numeral: 'Ⅿ' },
        { value: 900, numeral: 'ⅭⅯ' },
        { value: 500, numeral: 'Ⅾ' },
        { value: 400, numeral: 'ⅭⅮ' },
        { value: 100, numeral: 'Ⅽ' },
        { value: 90, numeral: 'ⅩⅭ' },
        { value: 50, numeral: 'Ⅼ' },
        { value: 40, numeral: 'ⅩⅬ' },
        { value: 10, numeral: 'Ⅹ' },
        { value: 9, numeral: 'Ⅸ' },
        { value: 5, numeral: 'Ⅴ' },
        { value: 4, numeral: 'Ⅳ' },
        { value: 1, numeral: 'Ⅰ' }
    ];

    let roman = '';

    romanNumerals.forEach(({ value, numeral }) => {
        while (num >= value) {
            roman += numeral;
            num -= value;
        }
    });
    return roman;
}