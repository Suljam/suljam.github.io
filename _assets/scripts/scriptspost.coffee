# Scripts to run at the end of the page load

(($) ->
  $ ->
    $('#scroller').simplyScroll frameRate: 60
    return
  return
) jQuery


$(document).ready ->
  jQuery(window).scroll ->
    threshold = 700
    if jQuery(window).scrollTop() >= 830
      $('.logo').addClass 'active'
    else
      $('.logo').removeClass 'active'
    return
  return

# $(document).ready ->
#   jQuery(window).scroll ->
#     threshold = 700
#     if jQuery(window).scrollTop() >= 830
#       $('.navbar').addClass 'active'
#     else
#       $('.navbar').removeClass 'active'
#     return
#   return

# Formspree Ajax

# $.ajax
#   url: '//formspree.io/suleiman.leadbitter@gmail.com'
#   method: 'POST'
#   data: message: 'hello!'
#   dataType: 'json'

$('.showmenu').click ->
  $('.menus').addClass 'show'
  return
$('.menulink').click ->
  $('.menus').removeClass 'show'
  return
# $(document).click (e) ->
#   if !$('.menus').is(e.target) and $('.menus').has(e.target).length == 0
#     # Clicked outside, close menu
#     $('.menus').removeClass 'show'
#   return


# $('.showmenu').click ->
#   $('.menus').addClass 'show'
#   return
# $('.menulink').click ->
#   $('.menus').removeClass 'show'
#   return

# jQuery(document).ready ->
#   jQuery('#block-block-23 li a').each ->
#     if jQuery(this).attr('href') == location.pathname
#       jQuery(this).addClass 'active'
#     return
#   return
