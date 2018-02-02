$(document).ready(function() {
  const btn = $('.btn');
  btn.on('click', () => {
    let newText = $('#textarea').val();
    let result = URL.total(texto);
    $('#newExtract').html(JSON.stringify(result));
    $('#textarea').val('');
  });
});


