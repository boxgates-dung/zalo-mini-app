import React, { FC } from "react";
import { ListRenderer } from "components/list-renderer";
import { useRecoilValue } from "recoil";
import { notificationsState } from "state";
import { Box, Header, Page, Text, Tabs } from "zmp-ui";
import { Divider } from "components/divider";
import { useLocation, useNavigate } from "react-router";

const PromotionList: FC = () => {
  const notifications = useRecoilValue(notificationsState);
  const navigate = useNavigate();

  return (
    <Box className="bg-background">
      <ListRenderer
        noDivider
        items={notifications}
        renderLeft={(item) => (
          <img className="w-10 h-10 rounded-full" src={item.image} />
        )}
        renderRight={(item) => (
          <Box
            key={item.id}
            onClick={() => navigate('/notification/detail')}
          >
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
  );
};

const EventList: FC = () => {
  const notifications = useRecoilValue(notificationsState);
  const navigate = useNavigate();

  return (
    <Box className="bg-background">
      <ListRenderer
        noDivider
        items={notifications}
        renderLeft={(item) => (
          <img className="w-10 h-10 rounded-full" src={item.image} />
        )}
        renderRight={(item) => (
          <Box
            key={item.id}
            onClick={() => navigate('/notification/detail')}
          >
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
  );
};

const BookingPage: FC = () => {
  // const sdsd


  return (
    <Page>
      <Header title="Thông báo" showBackIcon={false} />
      <Tabs id="contact-list" className="tabs-full-width" onChange={(e) => console.log(e) }>
        <Tabs.Tab key="tab-promotion" label="Xe liên tỉnh">
          <PromotionList />
        </Tabs.Tab>
        <Tabs.Tab key="tab-event" label="Hàng hóa">
          <EventList />
        </Tabs.Tab>
      </Tabs>
    </Page>
  );
};

export default BookingPage;
