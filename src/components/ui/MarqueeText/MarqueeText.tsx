import React, { FC } from 'react';
import styles from './MarqueeText.module.scss';

import {ReactComponent as StarIcon} from 'images/icon/star.svg';

interface MarqueeTextProps {
  animate?: string
  className?: string
  text?: string
}

const MarqueeText: FC<MarqueeTextProps> = (props) => {
  const marqueeClass = props.animate == 'right' ? 'animate-marqueeRight justify-end' : 'animate-marquee justify-start';

  return (
    <div className={`absolute w-full select-none ${props.className} ${styles.MarqueeText}`}>
      <div className="overflow-x-hidden">
        <div className={`whitespace-nowrap flex ${marqueeClass}`}>
          {
            Array.from({ length: 50 }, (_, i) => 
              <p key={i} className="font-campton text-lg inline-block font-bold">
                <span className="pl-2 pr-3">{props.text} </span>
                <StarIcon fill="#0E0720" className="inline-block" width="12" />
              </p>
            )
          }
        </div>
      </div>
    </div>
  ) 
};

export default MarqueeText;
