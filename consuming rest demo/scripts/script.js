  function listCountries(){
    $.ajax({
        type:"GET",
        url:"https://baas.kinvey.com/appdata/kid_ZkDY80oi1b/Countries",
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Basic cGVzaG86MTIzNA==");
        },
        success: function(data){
            for (var index in data) {
                $('#wrapper').append($('<div id="country">').text(data[index].name))
            }
            $('#wrapper').append($('<hr>'));
        },
        error: function(err){
            console.log('3213');
        }
    })};

$(document).ready(function () {
    $('button#listCountries').on('click',listCountries )
});


