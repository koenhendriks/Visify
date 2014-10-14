/**
 * Created by koen on 10/14/14.
 */
var wave;
var numRows = 16;

require(['$api/audio', '$api/models'], function(audio, models) {
    var analyzer = audio.RealtimeAnalyzer.forPlayer(models.player);

    analyzer.addEventListener('audio', function(evt) {
        // There will be 256 samples, but we want to only display every [step]
        // samples because we have fewer than 256 rows.
        var step = 256 / numRows;
        for (var i = 0; i < numRows; i++) {
            wave = evt.audio.wave.left[step * i];
        }
    });
});