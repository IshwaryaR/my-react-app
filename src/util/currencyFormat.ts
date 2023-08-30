const CURRENCY_FORMAT= new Intl.NumberFormat(undefined, {currency: 'SEK', style:'currency'})

function currencyFormat(price: number){
    return CURRENCY_FORMAT.format(price);
}
export default currencyFormat;