// timeTravel.js
import * as TimeMachine from 'time-machine';

const timeTravelUtils = {
  createTimeMachine: (destination) => {
    return new TimeMachine.TimeMachine(destination);
  },
  travelThroughTime: (timeMachine) => {
    return timeMachine.travel();
  },
};

export default timeTravelUtils;
