var stripe = Stripe('pk_test_uSQ9Sr22wt6t14R44ezokis7');
var elements = stripe.elements();
var card = elements.create('card');
card.mount('#card-element');
var promise = stripe.createToken(card);
promise.then(function(result){
    return result.token
})

