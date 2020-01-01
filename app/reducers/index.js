// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import errs from './errs.reducer';
import choose from './choose.reducer';
import user from './user.reducer';
import vehicles from './vehicles.reducer';
import selectVehicles from './selectVehicle.reducer';
import drivers from './driver.reducer';
import selectDriver from './selectDriver.reducer';
import defineLevel from './defineLevel.reducer' 
import selectDefineLevel from './selectDefineLevel.reducer'
import commands from './command.reducer';
import selectCommand from './selectCommand.reducer';
import motoBike from './motoBike.reducer';
import selectMotoBike from './selectMotoBike.reducer'

export default function createRootReducer(history: History) {
  return combineReducers<{}, *>({
    router: connectRouter(history),
    errs,
    choose,
    user,
    vehicles,
    selectVehicles,
    drivers,
    selectDriver,
    defineLevel,
    selectDefineLevel,
    commands,
    selectCommand,
    motoBike,
    selectMotoBike
  });
}
