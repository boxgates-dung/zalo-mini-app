import React, { FC } from "react";
import { ListRenderer } from "components/list-renderer";
import { useRecoilValue } from "recoil";
import { notificationsState } from "state";
import { Box, Header, Page, Text, useNavigate, Spinner } from "zmp-ui";
import { Divider } from "components/divider";
// import { useLocation, useNavigate } from "react-router";

const NotificationList: FC = () => {
  const notifications = useRecoilValue(notificationsState);
  const navigate = useNavigate();

  return (
    <>
      <Box className="bg-background">
        <ListRenderer
          divider="full-width"
          items={notifications}
          renderLeft={(item) => (
            <img className="w-10 h-10 rounded-full" src={item.image} />
          )}
          renderRight={(item) => (
            <Box
              key={item.id}
              onClick={() => navigate('/notification/detail', {
                replace: false,
                animate: true,
                direction: "forward",
                state: {
                  date: 'sadsd',
                  title: 'dasda',
                  content: 'sdasd'
                }
              })}
            >
              <Text
                size="xxxSmall"
                className="text-neutral-400 mb-1"
              >
                {item.date}
              </Text>
              <Text.Header>{item.title}</Text.Header>
              <Text
                size="small"
                className="text-gray overflow-hidden whitespace-nowrap text-ellipsis"
              >
                {item.content}
              </Text>
            </Box>
          )}
        />
      </Box>

      {/* <Box className="flex items-center justify-center py-4">
        <Spinner />
      </Box> */}
    </>
  );
};

const NotificationPage: FC = () => {
  return (
    <Page>
      <Header title="Thông báo" showBackIcon={false} />
      <Divider />
      <NotificationList />
    </Page>
  );
};

export default NotificationPage;
