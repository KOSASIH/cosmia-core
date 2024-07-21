// timeTravel.service.js
import { timeTravelUtils } from '../utils/timeTravel';

const timeTravelService = {
  async createTimeMachine(destination) {
    const timeMachine = timeTravelUtils.createTimeMachine(destination);
    // Save time machine to database
    return timeMachine;
  },
  async travelThroughTime(timeMachineId) {
    const timeMachine = await getTimeMachineFromDatabase(timeMachineId);
    const travelResult = timeTravelUtils.travelThroughTime(timeMachine);
    return travelResult;
  },
};

export default timeTravelService;
