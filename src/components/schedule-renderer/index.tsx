import { Stage, Text } from '@inlet/react-pixi';
import React from 'react';
import IAppData from '../interface/i-app-data';

interface IProps {
  appData: IAppData;
}

const ScheduleRenderer: React.FC<IProps> = props => {
  return (
    <div>
      <Stage width={300} height={300} options={{ backgroundColor: 0xeeeeee }}>
        <Text text={props.appData.schedules} />
      </Stage>
    </div>
  );
};

export default ScheduleRenderer;
