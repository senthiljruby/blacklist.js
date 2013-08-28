// Thanks http://www.noswearing.com/

(function($) {
  $blacklist_words = ['ass', 'arse', 'arsehole', 'assbag', 'assbandit','assbanger', 'assbite', 'assclown',
                   'asscock', 'assface', 'asshat', 'asshead', 'asshole', 'asshopper', 'assjacker',
                   'asslicker', 'assmunch', 'assshole', 'asswipe', 'bampot', 'bastard', 'beaner',
                   'bitch', 'bitchass', 'bitchy', 'blow job', 'blowjob', 'boner', 'bullshit', 'butt plug',
                   'butt-pirate', 'camel toe', 'carpetmuncher', 'chinc', 'chink', 'choad', 'chode', 'clit',
                   'cock', 'cockbite', 'cockface','cockmaster', 'cockmongruel', 'cockmuncher', 'cocksmoker',
                   'cocksucker', 'coochie', 'coon', 'cooter', 'cracker', 'cum', 'cumbubble', 'cumtart',
                   'cunnilingus', 'cunt', 'cunthole', 'damn', 'deggo', 'dick', 'dickbag', 'dickhead',
                   'dickhole', 'dickmonger', 'dicks', 'dickweed', 'dickwod', 'dildo', 'dipshit', 'dookie',
                   'douche', 'douchebag', 'douchewaffle', 'dumass', 'dumb ass', 'dumbass', 'dumbshit',
                   'dumshit', 'dyke', 'fag', 'fagbag', 'faggit', 'faggot', 'fagtard', 'fatass', 'fellatio',
                   'fudgepacker', 'gaydo', 'gaytard', 'gaywad', 'goddamn', 'goddamnit', 'gooch', 'gook',
                   'gringo', 'guido', 'handjob', 'hard on', 'heeb', 'hell', 'ho', 'homo', 'homodumbshit',
                   'honkey', 'humping', 'jackass', 'jap', 'jerk off', 'jigaboo', 'jizz', 'jungle bunny',
                   'kike', 'kooch', 'kootch', 'kyke','lesbo', 'lezzie', 'mcfagget', 'mick', 'minge', 'muff',
                   'munging', 'negro', 'nigga', 'nigger', 'niglet', 'nut sack', 'nutsack', 'paki', 'panooch',
                   'pecker', 'peckerhead', 'penis', 'piss', 'pissed', 'pissed off', 'pollock', 'poon', 'poonani',
                   'poonany', 'porch monkey', 'porchmonkey', 'prick', 'punta', 'pussy', 'pussylicking', 'puto',
                   'queef', 'queer', 'queerbait', 'renob', 'rimjob', 'sand nigger', 'sandnigger', 'schlong',
                   'scrote', 'shit', 'shitbagger', 'shitcunt', 'shitdick', 'shitface', 'shitfaced', 'shithead',
                   'shitter', 'shittiest', 'shitting', 'shitty', 'skank', 'skeet', 'slut', 'slutbag', 'snatch',
                   'spic', 'spick', 'splooge', 'tard', 'testicle', 'thundercunt', 'tit', 'tits', 'twat', 'twatlips',
                   'twats', 'twatwaffle', 'va-j-j', 'vag', 'vjayjay', 'wank', 'wetback', 'whore', 'whorebag',
                   'wop']

  $.fn.blacklist = function(options) {
    var settings = $.extend({
          symbol        : '***',
          color         : 'red',
          ignore        : null,
          add_blacklist : null
    }, options);

    // IGNORING BLACKLIST WORDS

    $(settings.ignore).each(function(index, value){
      ($blacklist_words.remove(value))
    });

    // ADD TO THE LIST OF BLACKLIST WORDS TEMPORARY

    $(settings.add_blacklist).each(function(index, value){
      ($blacklist_words.push(value))
    });

    // BLACKLIST WORDS
    return $(this).each( function() {
      if ($.inArray($(this).text(), $blacklist_words) > -1){
        $(this).text(settings.symbol);

        if ( settings.color ) {
          $(this).css('color', settings.color);
        }
      }
    });
  }

  // DEFINED PROTOTYPE FOR Removing Array
  Array.prototype.remove= function(){
      var what, a= arguments, L= a.length, ax;
      while(L && this.length){
          what= a[--L];
          while((ax= this.indexOf(what))!= -1){
              this.splice(ax, 1);
          }
      }
      return this;
  }
}(jQuery));
