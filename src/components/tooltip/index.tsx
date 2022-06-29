import { FC, ReactNode } from 'react';
import './tooltipStyle.css';

type TooltipProps = {
  children: ReactNode;
  title: string;
  position: string;
};
const Tooltip: FC<TooltipProps> = ({ children, title, position }) => {
  return (
    <span className={`tooltip`} data-position={position} data-tool-tip={title}>
      {children}
    </span>
  );
};

export default Tooltip;
