const counter = function () {
  const btns = document.querySelectorAll('.counter__btn');


  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter__value');
      const currentValue = +inp.value;
      let newValue;
      const right = document.getElementById('right');
      const left = document.getElementById('left');
      const result = document.getElementById('result');

      if (direction === 'plus') {
        newValue = currentValue + 1000;
      } else {
        newValue = currentValue - 1000 > 0 ? currentValue - 1000 : 0;
      }

      if (newValue === 7000) {
      	right.style.display = 'none';
      	result.style.gridTemplateColumns = '1fr';
      }else{
      	right.style.display = 'block';
      	result.style.gridTemplateColumns = '50% 50%';
      }

       inp.value = newValue;

       let wrap = document.getElementById("wrap");

       wrap.style.transform = 'translateX(-' + newValue + 'px)';
      console.log(newValue)
    })
  })

}

counter();



const countertwo = function () {
  const btns = document.querySelectorAll('.counter__btn-2');


  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter__value-2');
      const currentValue = +inp.value;
      let newValue;
      const right = document.getElementById('rightt');
      const left = document.getElementById('leftt');
      const result = document.getElementById('resultt');

      if (direction === 'plus') {
        newValue = currentValue + 1000;
      } else {
        newValue = currentValue - 1000 > 0 ? currentValue - 1000 : 0;
      }

      if (newValue === 2000) {
      	right.style.display = 'none';
      	result.style.gridTemplateColumns = '1fr';
      }else{
      	right.style.display = 'block';
      	result.style.gridTemplateColumns = '50% 50%';
      }

       inp.value = newValue;

       let wrap = document.getElementById("wrap-2");

       wrap.style.transform = 'translateX(-' + newValue + 'px)';
      console.log(newValue)
    })
  })

}

countertwo();




$(document).ready(function(){
	$('.ques__item').on('click', function(){
		$(this).toggleClass('ques__item-active');
		// $('.header__window').toggleClass('header__window-active')
	});
});






$(document).ready(function(){
    var servicesS = $('body');

    $(window).scroll(function(){
        var scroll = $(window).scrollTop() + $(window).height();
        var offsetServices = servicesS.offset().top;

        if (scroll > offsetServices) {

            window.addEventListener('scroll', function() {
                var number = pageYOffset - offsetServices;

                if (number > 1700) {
                  $('.fixed').addClass(
                      'fixed__fixed'
                    );   
                } else if (number < 1700) {
                    $('.fixed').removeClass(
                      'fixed__fixed'
                  );
                }


                

                console.log(number)
                
            });
        };
        
    })
})


