function fn(...c) {
    if (!c.every((a) => Number.isNumber(a)))
      throw "All arguments must be numbers.";
    return c.reduce((a, b) => a + b);
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.



 function banana() {
    this.val1 = "value1";
    this.val2 = "value2";
    let newBananaValue = this.val1;
    this.bananaMethod = function () {
        myBananaValue = newBananaValue;
        return myBananaValue;
    };
}
let bananaInstance = new banana();
alert(bananaInstance.bananaMethod());

const bP = [
  { emojis: [{ banana: "🍌", party: "🎉", partyTime: "🎂" }] },
  {
    time: [
      { estart: "18:30", estEnd: "23:30", pdstart: "16:30", pdtEnd: "21:30" },
      {
        timeZone: function (time) {
          var diff = time.split(":");
          return parseInt(diff[0]) * 60 + parseInt(diff[1]);
        },
      },
    ],
  },
];

const startEnd = {
  tZ: bP[1].time[1].timeZone,
  estart: bP[1].time[0].estart,

  pdstart: bP[1].time[0].pdstart,

  estEnd: bP[1].time[0].estEnd,

  pdtEnd: bP[1].time[0].pdtEnd,
};

const tZsE = {
  timezoneStart: startEnd.tZ(startEnd.estart) - startEnd.tZ(startEnd.pdstart),
  timezoneEnd: startEnd.tZ(startEnd.estEnd) - startEnd.tZ(startEnd.pdtEnd),
  tZeS: startEnd.tZ(startEnd.estart),
  tZeE: startEnd.tZ(startEnd.estEnd),
  tZpS: startEnd.tZ(startEnd.pdstart),
  tZpE: startEnd.tZ(startEnd.pdtEnd),
};

let bananaParty = (currentTime, tZg) => {
  let tZgVal = startEnd.tZ(currentTime);
  console.log(tZsE.tZpS)
  if (
    tZg == "est" &&
    tZgVal - tZsE.tZpS > tZsE.timezoneStart &&
    tZgVal - tZsE.tZpE < tZsE.timezoneEnd
  ) {
    if (bP[0].emojis[0].partyTime === "🎂") {
      return `It's ${bP[0].emojis[0].banana} ${bP[0].emojis[0].party} time Greg!`;
    }
  } else if (
    tZg == "pdt" &&
    tZsE.tZeS - tZgVal > tZsE.timezoneStart &&
    tZsE.tZsE - tZgVal < tZsE.timezoneEnd
  ) {
    if (bP[0].emojis[0].partyTime === "🎂") {
      return (
        `It's ${bP[0].emojis[0].banana} ${bP[0].emojis[0].party} time` +
        " Greg!"
      );
    }
  } else {
    return `Grrrrrrrrrr`;
  }
};

bananaParty("19:00", "est");

/* say we have a little program 
going with Mr. Bungle lyrics, 
mainly because I'm listening to the 
California album right now. 
song I didn't use:
golemIITheBionicVapourBoy */

const theHolyFilament = noneOfThemKnewTheyWereRobots = 1;
staringIntoGlassyEyes = 'Mesmerized';
const california = theAirConditionedNightmare = 1;

let golemIITheBionicVapourBoy = goodByeSoberDay;

let mrBungle = function vanityFair (golemIITheBionicVapourBoy)

{
  if (golemIITheBionicVapourBoy !== arsMoriendi &&golemIITheBionicVapourBoy !== pinkCigarette ) 
  {
    return 'Squeeze me macaroni, slop your face with my bologna!';
  }
}

  let sweetCharity = function retroVertigo (staringIntoGlassyEyes)
{
    if (theHolyFilament !== noneOfThemKnewTheyWereRobots)
    {
    return 'Slap back white shark attack';
    }
  }
  
if (golemIITheBionicVapourBoy == arsMoriendi)

{
console.log  (`He who hears in the vast silence He who wafts on the red wind "In extremis" He who steals pearls from the ashes He who leaps across the precipice "Ride si sapis" 'Ave atque vale' I shall rise again Bardo of the flesh So feast on me All my bones are laughing As you're dancing on my grave 'Ave atque vale' `); 
}

else if (golemIITheBionicVapourBoy == pinkCigarette)

{ 
console.log (`I found a pink cigarette... on the bed the day that you left`); 
}


/* But you have this const down here you can't just
copy-paste and move to the top with the other const */

const goodByeSoberDay = arsMoriendi;

/* the const is initializing after 
goodByeSoberDay is being called so you get" an initialization error */

