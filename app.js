let slidebar = document.getElementById('price-value')
let pageviews = document.getElementById('number-pageviews')
let price = document.getElementById('number-price')
let array_pageviews = [10, 50, 100, 500, 1]

let discount = document.getElementById('checkbox-discount')
let determine = function(){
    array_pageviews = [10, 50, 100, 500, 1]
    if(discount.checked){
        for(var i = 0; i < array_pageviews.length; i++){
            array_pageviews[i] -= array_pageviews[i] * 0.25;
        }
    }
    switch(slidebar.value){
        case('20'):
            pageviews.innerText = array_pageviews[0]+'k'
            price.innerText = "$8.00"
            break;
        case('40'):
            pageviews.innerText = array_pageviews[1]+'k'
            price.innerText = "$12.00"
            break;
        case('60'):
            pageviews.innerText = array_pageviews[2]+'k'
            price.innerText = "$16.00"
            break;
        case('80'):
            pageviews.innerText = array_pageviews[3]+'k'
            price.innerText = "$24.00"
            break;
        case('100'):
            pageviews.innerText = array_pageviews[4]+'M'
            if(discount.checked){
                pageviews.innerText = "750k"
            }
            price.innerText = "$36.00"
            break;
    }
}
determine()

slidebar.addEventListener('mousemove', function(){
    determine()
})
slidebar.addEventListener('touchmove', function(){
    determine()
}
discount.addEventListener('click', function(){
    determine()
})


if(window.innerWidth < 480){
    let text_discount = document.getElementById('discount')
    text_discount.innerText = '-25%'
}