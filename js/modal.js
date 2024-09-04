$(document).ready(function() {
    $('img').on('click', function() {
        var src = $(this).attr('src');
        $('#modalImage').attr('src', src);
        
        var myModal = new bootstrap.Modal(document.getElementById('imageModal'), {
            backdrop: 'static'
        });
        
        myModal.show();
    });
});
