import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "state";
import { Box, Text } from "zmp-ui";

export const TicketIcon: FC<{ active?: boolean }> = ({ active }) => {
  return (
    <Box className="relative">
      <svg 
      className="svg-icon" height="24" width="24" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill={active ? "var(--zmp-primary-color)" : "#767a7f"}>
        <path
          
          d="M898.133333 855.466667h-768c-46.933333 0-85.333333-38.4-85.333333-85.333334v-177.066666c0-12.8 8.533333-21.333333 21.333333-21.333334 10.666667 0 21.333333 8.533333 21.333334 21.333334v177.066666c0 23.466667 19.2 42.666667 42.666666 42.666667h768c23.466667 0 42.666667-19.2 42.666667-42.666667v-168.533333c0-12.8 8.533333-21.333333 21.333333-21.333333s21.333333 8.533333 21.333334 21.333333v168.533333c0 46.933333-38.4 85.333333-85.333334 85.333334zM960 443.733333c-12.8 0-21.333333-8.533333-21.333333-21.333333v-179.2c0-23.466667-19.2-42.666667-42.666667-42.666667H128c-23.466667 0-42.666667 19.2-42.666667 42.666667v172.8c0 10.666667-10.666667 21.333333-21.333333 21.333333-12.8 0-21.333333-10.666667-21.333333-21.333333v-172.8c0-46.933333 38.4-85.333333 85.333333-85.333333h768c46.933333 0 85.333333 38.4 85.333333 85.333333v179.2c0 10.666667-8.533333 21.333333-21.333333 21.333333z" /><path d="M960 622.933333c-61.866667 0-110.933333-49.066667-110.933333-110.933333 0-61.866667 49.066667-110.933333 110.933333-110.933333v42.666666c-38.4 0-68.266667 29.866667-68.266667 68.266667s29.866667 68.266667 68.266667 68.266667v42.666666zM70.4 614.4l-8.533333-42.666667c32-6.4 70.4-36.266667 70.4-66.133333 0-32-23.466667-59.733333-55.466667-66.133333l8.533333-42.666667c51.2 10.666667 89.6 55.466667 89.6 108.8-2.133333 55.466667-53.333333 98.133333-104.533333 108.8z" /><path d="M76.8 439.466667c-4.266667 0-8.533333-2.133333-12.8-2.133334v-42.666666c8.533333 0 14.933333 0 21.333333 2.133333l-8.533333 42.666667zM712.533333 296.533333c0 10.666667-8.533333 21.333333-21.333333 21.333334s-21.333333-10.666667-21.333333-21.333334V192c0-12.8 8.533333-21.333333 21.333333-21.333333s21.333333 8.533333 21.333333 21.333333v104.533333zM712.533333 480c0 12.8-8.533333 21.333333-21.333333 21.333333s-21.333333-8.533333-21.333333-21.333333v-104.533333c0-10.666667 8.533333-21.333333 21.333333-21.333334s21.333333 10.666667 21.333333 21.333334v104.533333zM712.533333 667.733333c0 10.666667-8.533333 21.333333-21.333333 21.333334s-21.333333-8.533333-21.333333-21.333334v-104.533333c0-12.8 8.533333-21.333333 21.333333-21.333333s21.333333 8.533333 21.333333 21.333333v104.533333zM714.666667 832c0 12.8-8.533333 21.333333-21.333334 21.333333-10.666667 0-21.333333-8.533333-21.333333-21.333333v-81.066667c0-10.666667 8.533333-21.333333 21.333333-21.333333 10.666667 0 21.333333 10.666667 21.333334 21.333333V832zM552.533333 341.333333H247.466667c-10.666667 0-21.333333 8.533333-21.333334 21.333334s10.666667 21.333333 21.333334 21.333333h302.933333c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-19.2-21.333334zM548.266667 494.933333H245.333333c-10.666667 0-21.333333 8.533333-21.333333 21.333334 0 10.666667 10.666667 21.333333 21.333333 21.333333h302.933334c10.666667 0 21.333333-10.666667 21.333333-21.333333 0-12.8-8.533333-21.333333-21.333333-21.333334zM556.8 637.866667H253.866667c-12.8 0-21.333333 10.666667-21.333334 21.333333 0 12.8 8.533333 21.333333 21.333334 21.333333h302.933333c12.8 0 21.333333-8.533333 21.333333-21.333333 0-10.666667-8.533333-21.333333-21.333333-21.333333z"
        />
      </svg>
    </Box>
  );
};


