import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './SocialMedia.module.scss';

interface SocialMediaProps {
  href?: string
  position?: string
  bgColor?: string
  text?: string
  icon?: any
  disabled?: boolean
}

const SocialMedia: FC<SocialMediaProps> = (props) => {
  const background = props.bgColor == 'blue' ? 'bg-blue-400' : 'bg-purple-400';
  const buttonIcon = props.bgColor == 'blue' ? styles.BlueButton : styles.PurpleButton;
  const disabled = props.disabled ? `${styles.Disabled} cursor-not-allowed opacity-50` : '';

  return (
    <Link 
      to="" 
      onClick={() => {
        if(props.href && !props.disabled) window.open(props.href);
        return null; 
      }} 
      onDragStart={(e)=>e.preventDefault()} 
      className={`${styles.Link} ${disabled}`}>

      <div className={`${background} rounded-full p-1 mx-2`}>
        
        {/* text (right) */}
        { props.position == 'right' ? 
          <span className="relative z-10 font-campton text-white text-sm inline-block align-top pl-5 pr-3 h-full leading-10">{ props.text }</span>
          : null
        }
        
        {/* icon */}
        <div className="inline-block h-10">
          <div className={`${buttonIcon} relative rounded-full w-10 h-full flex`}>
            {props.icon}
          </div>
        </div>
        
        {/* text (left) */}
        { props.position == 'left' ? 
          <span className="relative z-10 font-campton text-white text-sm inline-block align-top pl-3 pr-5 h-full leading-10">{ props.text }</span>
          : null
        }  

      </div>

    </Link>
  ) 
};

export default SocialMedia;
