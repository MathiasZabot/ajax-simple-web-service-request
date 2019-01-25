$(document).ready(function () {
    let quote;
    $.ajax({
        url:"https://thatsthespir.it/api",
        type:"GET",
        dataType:"json",
        timeout: 5000,
        success: function (data) {
            save(data);
            console.log(data);
            $("#quote").html('"'+quote.quote+'"');
            $("#author").html(quote.author)
        },
        fail: function(xhr, textStatus, errorThrown){
            alert('request failed')}
    });

    function save(data) {
        quote = data;
    }
    $('#more').click(function() {
        location.reload();
    });
});