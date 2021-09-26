import React, { useState } from 'react';
import IAppData from '../interface/i-app-data';
import ScheduleInput from '../schedule-input';
import ScheduleRenderer from '../schedule-renderer';
import defaultAppData from './default-app-data';
import './index.scss';

const Root: React.FC = () => {
  const [appData, setAppData] = useState<IAppData>(defaultAppData);
  return (
    <div className="schedule-shot--root container">
      <ScheduleInput appData={appData} setAppData={setAppData} />
      <ScheduleRenderer appData={appData} />
    </div>
  );
};

export default Root;
