import { useVirtualKeyboardVisible } from "hooks";
import React, { FC, useMemo, useState } from "react";
import { useLocation } from "react-router";
import { MenuItem } from "types/menu";
import { BottomNavigation, Icon, useNavigate } from "zmp-ui";
import { CartIcon } from "./icons/cart-icon";
import { TicketIcon } from './icons/ticket-icon';
import { NotifIcon } from "./icons/notif-icon";

const tabs: Record<string, MenuItem> = {
  "/": {
    label: "Trang chủ",
    icon: <Icon icon="zi-home" />,
  },
  // "/booking": {
  //   label: "Booking",
  //   icon: <TicketIcon />,
  //   activeIcon: <TicketIcon active />,
  // },
  "/cart": {
    label: "Hoạt động",
    icon: <Icon icon="zi-clock-1-solid" />,
  },
  // "/notification": {
  //   label: "Thông báo",
  //   icon: <NotifIcon />,
  //   activeIcon: <NotifIcon active />,
  // },
  "/individual": {
    label: "Tài khoản",
    icon: <Icon icon="zi-user-circle-solid" />,
  },
};

export type TabKeys = keyof typeof tabs;

export const NO_BOTTOM_NAVIGATION_PAGES = ["/search", "/category", "/notification/detail"];

export const Navigation: FC = () => {
  const [activeTab, setActiveTab] = useState<TabKeys>("/");
  const keyboardVisible = useVirtualKeyboardVisible();
  const navigate = useNavigate();
  const location = useLocation();

  const noBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES.includes(location.pathname);
  }, [location]);

  if (noBottomNav || keyboardVisible) {
    return <></>;
  }

  return (
    <BottomNavigation
      id="footer"
      activeKey={activeTab}
      onChange={(key: TabKeys) => setActiveTab(key)}
      className="z-50"
    >
      {Object.keys(tabs).map((path: TabKeys) => (
        <BottomNavigation.Item
          key={path}
          label={tabs[path].label}
          icon={tabs[path].icon}
          activeIcon={tabs[path].activeIcon}
          onClick={() => {
            navigate(path, {
              animate: false,
            })
          }}
        />
      ))}
    </BottomNavigation>
  );
};
