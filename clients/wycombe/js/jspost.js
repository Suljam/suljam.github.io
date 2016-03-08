// // Accordion menus
// (function($) {
//     $.fn.accordion = function() {
//
//       el = $(this),
//       elItem = el.children(),
//       elP = elItem.find('>:first-child'),
//       elN = elItem.children().slice(1);
//
//       elP.on('click', function() {
//         elP = $(this);
//         if(elP.next().hasClass('show')) {
//           closeAll();
//         } else {
//           closeAll();
//           elP.next().addClass('show');
//         }
//       });
//
//       function closeAll() {
//         elN.removeClass('show');
//       }
//
//     }
// }(jQuery));
//
// $('.accordion').accordion(); // Your class name here
// Navigation Button

$(".menubut").bind( "click", function() {
	$('.topbar').addClass('show');
});

$(".menulink").bind( "click", function() {
	$('.topbar').removeClass('show');
});

// $(document).click(function(e){
//   if (!$(".topbar").is(e.target) && $(".topbar").has(e.target).length === 0) {
//     // Clicked outside, close menu
//     $(".topbar").removeClass('show');
//   }
// });

// End