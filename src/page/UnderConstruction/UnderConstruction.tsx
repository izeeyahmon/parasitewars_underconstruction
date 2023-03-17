import React, { FC } from 'react';
import styles from './UnderConstruction.module.scss';

import logo from 'images/logo-big.png';
import {ReactComponent as TwitterIcon} from 'images/icon/twitter.svg';
import {ReactComponent as DiscordIcon} from 'images/icon/discord.svg';

import { 
  MarqueeText,
  SocialMedia
} from 'components';

interface UnderConstructionProps {}

const UnderConstruction: FC<UnderConstructionProps> = () => (
  <div className={`relative h-screen max-h-screen ${styles.UnderConstruction}`} data-testid="UnderConstruction">
  	<MarqueeText animate="left" className={styles.ComingSoonTop} text="Coming Soon" />

    {/* content start */}
    <div className="w-full h-full flex">
      <div className="m-auto">
        <img className={`m-auto ${styles.Logo}`} src={logo} onDragStart={(e)=>e.preventDefault()} />

        {/* social media start */}
        <div className="whitespace-nowrap flex justify-center h-12">
          <SocialMedia 
            href="https://twitter.com/ParasiteWars" 
            position="left" 
            bgColor="purple" 
            text="Twitter"
            icon={<TwitterIcon width="20" className="m-auto z-10 fill-gray-300" />} />
          
          <SocialMedia 
            disabled={true}
            href="" 
            position="right" 
            bgColor="blue" 
            text="Discord" 
            icon={<DiscordIcon width="30" className="m-auto z-10 fill-white" />} />  
        </div>
        {/* social media end */}

      </div>
    </div>
    {/* content end */}

    {/* copyright */}
    <div className="absolute w-full bottom-0 text-center mb-16">
      <span className="font-poppins text-gray-400 text-xs opacity-50">© 2023 Parasite Wars by Bulan Phases, Labs, Inc.</span>
    </div>

    <MarqueeText animate="right" className={styles.ComingSoonBottom} text="Coming Soon" />
  </div>
);

export default UnderConstruction;
