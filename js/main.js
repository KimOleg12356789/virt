$(document).ready(function(){

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
})

$('.cateslay-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 9,
        slidesToScroll: 1,
        
       
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 9,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 9,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 641,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 482,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 416,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
      ]
  });

$('.stranicamodeli-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        
       
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 9,
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 641,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 482,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 416,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          }
      ]
  });

if (!$(event.target).closest('.dropdown').length) {
    $('.option-list, .search-box').hide();
   }
 });

 $('.select').click(function(event) {
   //$('.option-list, .search-box').hide();
   $(this).closest('.dropdown').find('.option-list, .search-box').toggle(); 
   $('.option-list a').click(function(){
     var select = $(this).text();
     $(this).closest('.dropdown').children('.select').text(select);
     $('.option-list, .search-box').hide();
   });
 });

 //Search
 
 $('.seach-control').keyup(function(){
  var val = $(this).val().toLowerCase();
  var list =  $(this).closest('.dropdown').find('li')
   list.each(function()
    {
      var text = $(this).text().toLowerCase();
      if(text.indexOf(val)==-1)
        {
          $(this).hide();
        }
      else
        {
            $(this).show();
        }
        
    })


});



const search = document.querySelector('.bg_search');
const seachmain = document.querySelector('.search_main');


search.addEventListener('click', () => {
  // seachmain.classList.toggle('navsearch');
  seachmain.classList.toggle('searchopen');
});




const btncategory = document.querySelector('.btn_category');
const categoryall = document.querySelector('.category_all');


btncategory.addEventListener('click', () => {
  // seachmain.classList.toggle('navsearch');
  categoryall.classList.toggle('categoryopen');
});



const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});


let triggersModal = document.querySelectorAll(".js-show-modal");
      let modals = document.querySelectorAll(".js-modal");

      function closeModal() {
        modals.forEach(modal => {
          if (modal.classList.contains("is-open")) {
            modal.classList.remove("is-open");
          }
        });
      }


      modals.forEach(modal => {
        modal.addEventListener("click", function (event) {
          const isOutside = !event.target.closest(".modal__inner");
          const isCloseButton = event.target.matches(".js-close-modal");
          if (isCloseButton || isOutside) {
            closeModal();
          }
        });
      });

      triggersModal.forEach((button) =>
      button.addEventListener("click", function (e) {
        e.preventDefault();
        let modalID = this.dataset.modal;
        console.log(modalID);
        modals.forEach(function (modal) {
          if (modal.dataset.modal == modalID) {
            modal.classList.add("is-open");
          }
        });
      }));