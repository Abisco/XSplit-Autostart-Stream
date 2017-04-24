var xjs = require('xjs');

xjs.Output.getOutputList()
.then(function(outputs) {
  outputs.map(output => {
   output.getName()
   .then(function(name) {
     if(name.includes('Twitch')) {
       output.startBroadcast();
     }
   })
 })
})