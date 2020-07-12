
(function() {
    var names = ["Nilkant", "Shubh", "Saksham", "Meeraj", "Aakash", "Anubhav", "Ankush", "Apoorva", "Pushpa", "Ashok"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'a') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();