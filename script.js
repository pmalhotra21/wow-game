let score = 0;
$(document).ready(function() {
    let $gamePiece = $('<div id="game-piece"></div>');
    $('#game-board').append($gamePiece);

    $('#start-game').on('click', function() {
        $gamePiece.css({
            top: '10px',
            left: '10px'
        });

        // Example of state change and score increment
        $gamePiece.draggable({
            containment: '#game-board',
            stop: function() {
                score += 10;
                $('#score').text(score);
            }
        });
    });

    $('#reset-game').on('click', function() {
        score = 0;
        $('#score').text(score);
        $gamePiece.css({
            top: '10px',
            left: '10px'
        });
    });
});
