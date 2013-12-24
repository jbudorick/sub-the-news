// witnesses -> these dudes I know
// allegedly -> kinda probably
// new study -> tumblr post
// rebuild   -> avenge
// space     -> spaaace
// google glass -> virtual boy
// smartphone -> pokedex
// electric -> atomic
// senator -> elf-lord
// car -> cat
// election -> eating contest
// congressional leaders -> river spirits
// homeland security -> homestar runner
// could not be reached for comment -> is guilty and everyone knows it

var recursiveS = function(node, searchRes) {
  if (node.childNodes.length == 0) {
    for (var i = 0; i < searchRes.length; ++i) {
      node.textContent =
        node.textContent.replace(searchRes[i].search_, searchRes[i].replacement_, "gi");
    }
    return;
  }

  for (var i = 0; i < node.childNodes.length; ++i) {
    recursiveS(node.childNodes[i], searchRes);
  }
}

function STNReplacement(search, replacement) {
  this.search_ = search;
  this.replacement_ = replacement;
}

var baseSub = function(node) {
  var baseRes = 
    [
      new STNReplacement(/witnesses/gi, "these dudes I know"),
      new STNReplacement(/allegedly/gi, "kinda probably"),
      new STNReplacement(/new study/gi, "tumblr post"),
      new STNReplacement(/rebuild/gi, "avenge"),
      new STNReplacement(/ space /g, " spaaace "),
      new STNReplacement(/Space /i, "Spaaace "),
      new STNReplacement(/Google Glass/gi, "Virtual Boy"),
      new STNReplacement(/smartphone/gi, "pokedex"),
      new STNReplacement(/electric/g, "atomic"),
      new STNReplacement(/Electric/g, "Atomic"),
      new STNReplacement(/Senator/g, "Elf-Lord"),
      new STNReplacement(/Sen\./g, "Elf-Lord"),
      new STNReplacement(/Sens\./g, "Elf-Lords"),
      new STNReplacement(/ car /gi, " cat "),
      new STNReplacement(/ election/g, " eating contest"),
      new STNReplacement(/Election/g, "Eating contest"),
      new STNReplacement(/congressional leaders/gi, "river spirits"),
      new STNReplacement(/homeland security/g, "homestar runner"),
      new STNReplacement(/Homeland Security/g, "Homestar Runner"),
      new STNReplacement(/could not be reached for comment/gi, "is guilty and everyone knows it")
    ];

  recursiveS(node, baseRes);
}

baseSub(document.body);
