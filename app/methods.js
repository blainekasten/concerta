export default {
  A: function() {
    var oscillator = audioCtx.createOscillator();
    var gNode = audioCtx.createGain();
    gNode.connect(gainNode)

    oscillator.type = 0; // sine wave
    oscillator.frequency.value = 100;
    oscillator.start();

    oscillator.connect(gNode);

    gNode.linearRampToValueAtTime(0,1600)


    console.log('pitch: ' + 250);

  },

  B: function() {
    var oscillator = audioCtx.createOscillator();
    var gNode = audioCtx.createGain();
    gNode.connect(gainNode)

    oscillator.type = 0; // sine wave
    oscillator.frequency.value = 150;
    oscillator.start();

    oscillator.connect(gNode);

    setTimeout(function(){
      oscillator.stop();
    }, 600);

    console.log('pitch: ' + 250);

  },

  C: function() {
    var oscillator = audioCtx.createOscillator();
    var gNode = audioCtx.createGain();

    oscillator.type = 0; // sine wave
    oscillator.frequency.value = 200;
    oscillator.start();

    oscillator.connect(gNode);
    gNode.connect(gainNode)

    setTimeout(function(){
      var interval = setInterval(function(){
          if (gNode.gain.value != 0)
            gNode.gain.value -= ((gNode.gain.value * 100) - 1) / 100;
          else
            clearInterval(interval);
        }, 60)
    }, 600)

    //gNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 1)

    console.log('>>>>>>>');
  },

  D: function() {
    var oscillator = audioCtx.createOscillator();
    var gNode = audioCtx.createGain();
    gNode.connect(gNode)

    oscillator.type = 0; // sine wave
    oscillator.frequency.value = 250;
    oscillator.start();

    oscillator.connect(gNode);

    setTimeout(function(){
      oscillator.stop();
    }, 600);

    console.log('pitch: ' + 250);

  },
  E: function() {
    var oscillator = audioCtx.createOscillator();
    var gNode = audioCtx.createGain();
    gNode.connect(gNode)

    oscillator.type = 0; // sine wave
    oscillator.frequency.value = 300;
    oscillator.start();

    oscillator.connect(gNode);

    setTimeout(function(){
      oscillator.stop();
    }, 600);

    console.log('pitch: ' + 250);

  },
  F: function() {
    var oscillator = audioCtx.createOscillator();

    oscillator.type = 0; // sine wave
    oscillator.frequency.value = 400;
    oscillator.start();

    oscillator.connect(gNode);

    setTimeout(function(){
      oscillator.stop();
    }, 600);

    console.log('pitch: ' + 250);

  },

  //B: function() {

    //// Fill the buffer with white noise;
    //// just random values between -1.0 and 1.0
    //for (var channel = 0; channel < channels; channel++) {
      //// This gives us the actual array that contains the data
      //var nowBuffering = myArrayBuffer.getChannelData(channel);
      //for (var i = 0; i < frameCount; i++) {
        //// Math.random() is in [0; 1.0]
        //// audio needs to be in [-1.0; 1.0]
        //console.log(nowBuffering, typeof nowBuffering);

        //nowBuffering[i] = Math.random() * 2 - 1;
      //}
    //}

    //// Get an AudioBufferSourceNode.
    //// This is the AudioNode to use when we want to play an AudioBuffer
    //var source = audioCtx.createBufferSource();

    //// set the buffer in the AudioBufferSourceNode
    //source.buffer = myArrayBuffer;

    //// connect the AudioBufferSourceNode to the
    //// destination so we can hear the sound
    //source.connect(audioCtx.destination);

    //// start the source playing
    //source.start();

    //setTimeout(function(){
      //source.stop();
    //}, 600);

  //}



}
