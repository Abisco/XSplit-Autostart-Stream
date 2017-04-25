function autostream() {
    var xjs = require('xjs');

    xjs.Output.getOutputList()
    .then(function(outputs) {
    outputs.map(output => {
    output.getName()
    .then(function(name) {
        if(name.includes('YouTube Live - JCC Live - Nonprofits & Activisim')) {
        output.startBroadcast();
        }
    })
    })
    })
}

window.onload = autostream();

