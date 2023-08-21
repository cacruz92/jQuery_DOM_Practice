$(document).ready(function(){
    $("#submit").on("click", function(event){
        event.preventDefault();

        const movieTitle = $("#movie-title").val();
        const movieRating = $("#movie-rating").val();

        const newLI = $('<li>').text(`${movieTitle}: ${movieRating}`);
        const removeButton = $('<button>').text("x").addClass('remove-button');
        
        newLI.append(removeButton);
        $("#movieList").append(newLI);

        $("#movie-title").val("");
        $("#movie-rating").val("");

        $(".remove-button").on("click", function(){
            $(this).parent().remove();
        });
    });
})
