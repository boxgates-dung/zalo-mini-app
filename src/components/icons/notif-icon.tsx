import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "state";
import { Box, Text, Icon } from "zmp-ui";

export const NotifIcon: FC<{ active?: boolean }> = ({ active }) => {
  const cart = useRecoilValue(cartState);

  return (
    <Box className="relative">
      
      <Icon icon="zi-notif" className="relative top-[-10px]" />
      {cart.length > 0 && (
        <Box className="absolute -right-2 -top-[2px] p-[2px] bg-background rounded-full">
          <Text
            className="w-4 h-4 bg-[var(--zmp-primary-color)] rounded-full text-white"
            size="xxxxSmall"
          >
            {cart.length > 9 ? "9+" : cart.length}
          </Text>
        </Box>
      )}
    </Box>
  );
};
