import React, { ChangeEventHandler, Dispatch } from 'react';
import IAppData from '../interface/i-app-data';

interface IProps {
  appData: IAppData;
  setAppData: Dispatch<IAppData>;
}

const ScheduleInput: React.FC<IProps> = props => {
  const handleSchedule: ChangeEventHandler<HTMLTextAreaElement> = e => {
    props.setAppData({ schedules: e.target.value });
  };
  return (
    <div>
      <textarea
        value={props.appData.schedules}
        onChange={handleSchedule}
        style={{ width: '80%', height: '5em' }}></textarea>
    </div>
  );
};

export default ScheduleInput;
