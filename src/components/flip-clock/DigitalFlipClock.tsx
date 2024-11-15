import React from "react";

// function component
function AnimatedCard({
  animation,
  digit,
}: {
  animation: "fold" | "unfold";
  digit: number;
}){
  return (
    <div className={`flipCard ${animation}`}>
      <span>{`${digit}`}</span>
    </div>
  );
};

// function component
function StaticCard({ position, digit }: { position: "upperCard"|"lowerCard"; digit: number }){
  return (
    <div className={position}>
      <span>{`${digit}`}</span>
    </div>
  );
};

// function component
function FlipUnitContainer({ digit, shuffle, unit }:{digit:number;shuffle:boolean;unit:string}){
  // assign digit values
  let currentDigit = digit;
  let previousDigit = digit - 1;

  // to prevent a negative value
  if (unit !== "hours") {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
  } else {
    previousDigit = previousDigit === -1 ? 23 : previousDigit;
  }

  // add zero
  if (currentDigit < 10) {
    // @ts-expect-error : number is being converted into a string to append the 0
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    // @ts-expect-error : number is being converted into a string to append the 0
    previousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  // shuffle animations
  const animation1 = shuffle ? "fold" : "unfold";
  const animation2 = !shuffle ? "fold" : "unfold";

  return (
    <div className={"flipUnitContainer md:w-[50%] flex-grow"}>
      <StaticCard position={"upperCard"} digit={currentDigit} />
      <StaticCard position={"lowerCard"} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
    </div>
  );
};


class MyClock {
  time: Date;
  ampm:"AM"|"PM"
  hours: number;
  minutes: number;
  seconds: number;

  constructor() {
    this.time = new Date();
     const currentHour = this.time.getHours();
    this.hours = currentHour > 12 ? currentHour - 12 : currentHour;
    this.minutes = this.time.getMinutes();
    this.seconds = this.time.getSeconds();
    this.ampm = currentHour > 12 ? "PM" : "AM";
    this.updateTime();
  }

  updateTime() {
    this.time = new Date();
    const currentHour = this.time.getHours();
    this.ampm = currentHour > 12 ? "PM" : "AM";
    this.hours = currentHour > 12 ? currentHour - 12 : currentHour;
    this.minutes = this.time.getMinutes();
    this.seconds = this.time.getSeconds();
  }
}



// class component
export function FlipClock(){
  const clock = new MyClock();
  const [hours, setHours] = React.useState(clock.hours);
  const [hoursShuffle, setHoursShuffle] = React.useState(true);
  const [minutes, setMinutes] = React.useState(clock.minutes);
  const [minutesShuffle, setMinutesShuffle] = React.useState(true);
  const [seconds, setSeconds] = React.useState(clock.seconds);
  const [secondsShuffle, setSecondsShuffle] = React.useState(true);
  const[ampm,setAMPM]=React.useState(clock.ampm)
  const [ampmShuffle, setAMPMShuffle] = React.useState(true);

  React.useEffect(() => {
    const timerID = setInterval(() => {
      clock.updateTime();
      if(clock.ampm!==ampm){
      setHours(clock.hours);
      setHoursShuffle(true);
    }
      if(clock.ampm!==ampm){
      setMinutes(clock.minutes);
      setMinutesShuffle(true);
    }
      if(clock.seconds!==seconds){
      setSeconds(clock.seconds);
      setSecondsShuffle(true);
      }
      if(clock.ampm!==ampm){
      setAMPM(clock.ampm);
      setAMPMShuffle(true);
    }
    }, 50);
    return () => clearInterval(timerID);
  }, []);
//   console.log({hours, minutes, seconds});
  return (
    <div className={"flipClock"}>
      <FlipUnitContainer
        key={`hour-${hours}`}
        unit={"hours"}
        digit={hours}
        shuffle={hoursShuffle}
      />
      <FlipUnitContainer
        key={`$minutes-${minutes}`}
        unit={"minutes"}
        digit={minutes}
        shuffle={minutesShuffle}
      />
      <FlipUnitContainer
        key={`$seconds-${seconds}`}
        unit={"seconds"}
        digit={seconds}
        shuffle={secondsShuffle}
      />
      <FlipUnitContainer
        key={ampm}
        unit={"ampm"}
        // @ts-expect-error
        digit={ampm}
        shuffle={ampmShuffle}
      />
    </div>
  );
};

