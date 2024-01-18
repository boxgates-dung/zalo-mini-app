import React, { FC } from "react";
import { Box } from "zmp-ui";

type Props = {
  className?: string
}

export const PaymentIcon: FC<Props> = (props) => {
  return (
    <Box className="relative">
      <svg className={props.className} height="22" width="22" version="1.1" viewBox="0 0 512 512">
        <g id="XMLID_1_">
          <path id="XMLID_6_" d="M467.8,60.4H45c-25.2,0-45,20.5-45,45v301.3c0,25.2,20.5,45,45,45h422c25.2,0,45-20.5,45-45V106.1
		C512.8,80.9,492.3,60.4,467.8,60.4z M482.8,407.5c0,8.7-7.1,15-15,15H45c-8.7,0-15-7.1-15-15V241.8h452.8
		C482.8,241.8,482.8,407.5,482.8,407.5z M30,151.1v-45c0-8.7,7.1-15,15-15h422c8.7,0,15,7.1,15,15v45H30z"/>
        </g>
      </svg>
    </Box>
  );
};
