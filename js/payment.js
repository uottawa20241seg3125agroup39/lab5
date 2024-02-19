$(document).ready(function(){

    $('#submitPayment').click(payment_placeOrderButton);
    $('#paymentForm').submit(async function(e){
        e.preventDefault();
        await payment_submit();
    });
    $('#payment-form-go-back-btn').click(payment_goBack);


    console.log('payment modal loaded...');
})



function payment_placeOrderButton(){
    console.log('Place Order button clicked...');
    let form=$('#paymentForm');
    form.addClass('was-validated');
    // form.validate();
    // form.submit();
}

async function hashText(text) {//text hash code from GPT4
    // 将字符串转换为Uint8Array，因为crypto.subtle.digest接受TypedArray或ArrayBuffer
    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    // 使用SHA-256算法计算哈希
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    // 将ArrayBuffer转换为16进制字符串
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function payment_submit() {
    console.log('Payment form submitted...');
    let form = $('#paymentForm');
    let promises = [];
    let name=form.find('#nameOnCard').val();
    form.find('input').each(function () {
        let e=$(this);
        promises.push((async function () {
            e.prop('disabled', true);
            e.val(await hashText(e.val()));
        })())
    })
    await Promise.all(promises);
    // await (async function(){
    //     console.log(`DEBUG: submit.html?name=${name}`);
    //     console.log(`DEBUG: href after 5 sec`);
    //     await new Promise(r => setTimeout(r, 1000));
    //     console.log(`DEBUG: 4 sec left`);
    //     await new Promise(r => setTimeout(r, 1000));
    //     console.log(`DEBUG: 3 sec left`);
    //     await new Promise(r => setTimeout(r, 1000));
    //     console.log(`DEBUG: 2 sec left`);
    //     await new Promise(r => setTimeout(r, 1000));
    //     console.log(`DEBUG: 1 sec left`);
    //     await new Promise(r => setTimeout(r, 1000));
    // })();
    window.location.href = `submit.html?name=${name}`;
}
function canIUse(func){
    // function definition check code from GPT4
    return typeof  window[func] === 'function'
}
function payment_goBack(){
    if (canIUse('global_paymentGoBack')){
        global_paymentGoBack();
        return;
    }
    console.log('Cannot find uplevel function');
}