import React, { FC } from "react";
import { Route } from "react-router";
import { Box, AnimationRoutes } from "zmp-ui";
import { Navigation } from "./navigation";
import HomePage from "pages/index";
import CategoryPage from "pages/category";
import CartPage from "pages/cart";
import NotificationPage from "pages/notification/index";
import IndividualPage from "pages/individual/index";
import SearchPage from "pages/search";
import NotificationDetailPage from "pages/notification/notification-detail";
import BookingPage from "pages/Booking/index";

import { getSystemInfo } from "zmp-sdk";
import { ScrollRestoration } from "./scroll-restoration";

if (getSystemInfo().platform === "android") {
  const androidSafeTop = Math.round(
    (window as any).ZaloJavaScriptInterface.getStatusBarHeight() /
    window.devicePixelRatio
  );
  document.body.style.setProperty(
    "--zaui-safe-area-inset-top",
    `${androidSafeTop}px`
  );
}

export const Layout: FC = () => {
  return (
    <Box flex flexDirection="column" className="h-screen">
      <ScrollRestoration />
      <AnimationRoutes>
        <Route path="/notification/detail" element={<NotificationDetailPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/category" element={<CategoryPage />}></Route>
        <Route path="/notification" element={<NotificationPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/individual" element={<IndividualPage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </AnimationRoutes>
      <Navigation />
    </Box>
  );
};
