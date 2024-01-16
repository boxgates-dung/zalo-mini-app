import React, { FC } from "react";
import { ListRenderer } from "components/list-renderer";
import { useRecoilValue } from "recoil";
import { notificationsState } from "state";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";

const Message: FC = () => {
  const notifications = useRecoilValue(notificationsState);
  return (
    <>
    sdfsdf
    </>
  );
};

const NotificationPage: FC = () => {
  return (
    <Page>
      <Header title="Thông báo" backIcon={''} showBackIcon={true} />
      <Divider />
      <Message />
    </Page>
  );
};

export default NotificationPage;
