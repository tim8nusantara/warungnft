/*----- FILTER -----*/
    	const newLocal = $(document).ready(function () {
    $('.list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'All') {
            $('.itemBox').show('1000');
            $('.itemTeks').show('1000');
        } else {
            $('.itemBox').not('.' + value).hide('1000');
            $('.itemTeks').not('.' + value).hide('1000');
            $('.itemBox').filter('.' + value).show('1000');
            $('.itemTeks').filter('.' + value).show('1000');
        }
    });

    $('.list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
/*----- SEARCH -----*/
    $('#searchbar').on('input', function() {
        var inputVal = $(this).val();
        $(".itemTeks").each(function() {
          var title = $(this).text();
          if (title.toLowerCase().indexOf(inputVal.toLowerCase()) >= 0) {
            $(this).parent().show();
          } else {
            $(this).parent().hide();
          }
        });
      }
      );
});