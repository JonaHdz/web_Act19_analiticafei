//paso 13
const form = document.querySelector('form');
const inputCreditNumber = document.getElementById('Card_number');
const inputExpity = document.getElementById('Expiry');

inputCreditNumber.addEventListener('keyup', function (e) {
    $cc.validate(e)
});

inputExpity.addEventListener('keyup', function (e) {
    $cc.expiry.call(this,e)
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});
