import React, { FC } from "react";
import { Box, Header, Icon, Page, Text, Avatar, Button } from "zmp-ui";
import subscriptionDecor from "static/subscription-decor.svg";
import { ListRenderer } from "components/list-renderer";
import { useToBeImplemented } from "hooks";

const Subscriptions: FC = () => {
  const onClick = useToBeImplemented();
  return (
    <Box className="m-4" onClick={onClick}>
      <Box
        className="bg-amber-400 text-white rounded-xl p-4 space-y-2"
        style={{
          backgroundImage: `url(${subscriptionDecor})`,
          backgroundPosition: "right 8px center",
          backgroundRepeat: "no-repeat",
        }}
      >


        <Box flex mt={6} flexWrap>
          <Box mt={6} mr={6} flex flexDirection="column">
            <Box>
              <Text size="xxSmall">Online</Text>
            </Box>
            <Box mt={2}>
              <Avatar />
            </Box>
          </Box>
          <Box mt={6} mr={6} flex flexDirection="column">
            <Box>
              <Text size="xxSmall">Online + Story</Text>
            </Box>
            <Box mt={2}>
              <Avatar online story="default" />
            </Box>
          </Box>
          <Box mt={6} mr={6} flex flexDirection="column">
            <Box>
              <Text size="xxSmall">Online + Story Seen</Text>
            </Box>
            <Box mt={2}>
              <Avatar online story="seen" />
            </Box>
          </Box>
          <Box mt={6} mr={6} flex flexDirection="column">
            <Box>
              <Text size="xxSmall">Blocked</Text>
            </Box>
            <Box mt={2}>
              <Avatar blocked />
            </Box>
          </Box>
        </Box>



        <Text.Title className="font-bold">Đăng ký thành viên</Text.Title>
        <Text size="xxSmall">Tích điểm đổi thưởng, mở rộng tiện ích</Text>
      </Box>
    </Box>
  );
};

const Subscription: FC = () => {
  const onClick = useToBeImplemented();

  return (
    <Box className="m-4">
      <Box className="bg-background rounded-xl">
        <Box className="flex items-center p-4">
          <Avatar />
          <Box className="flex-1 ml-4">
            <Text.Header>Nana</Text.Header>
            <Text
              size="small"
              className="text-gray overflow-hidden whitespace-nowrap text-ellipsis"
            >
              0169923123
            </Text>
          </Box>
          <Icon icon="zi-chevron-right" />
        </Box>

      </Box>
    </Box>
  );
};

const Personal: FC = () => {
  const onClick = useToBeImplemented();

  return (
    <Box className="m-4">
      <ListRenderer
        title="Cá nhân"
        onClick={onClick}
        items={[
          {
            left: <Icon icon="zi-user" />,
            right: (
              <Box flex>
                <Text.Header className="flex-1 items-center font-normal">
                  Thông tin tài khoản
                </Text.Header>
                <Icon icon="zi-chevron-right" />
              </Box>
            ),
          },
          {
            left: <Icon icon="zi-clock-2" />,
            right: (
              <Box flex>
                <Text.Header className="flex-1 items-center font-normal">
                  Lịch sử đơn hàng
                </Text.Header>
                <Icon icon="zi-chevron-right" />
              </Box>
            ),
          },
        ]}
        renderLeft={(item) => item.left}
        renderRight={(item) => item.right}
      />
    </Box>
  );
};

const Other: FC = () => {
  const onClick = useToBeImplemented();

  return (
    <Box className="m-4">
      <ListRenderer
        title="Khác"
        onClick={onClick}
        items={[
          {
            left: <Icon icon="zi-star" />,
            right: (
              <Box flex>
                <Text.Header className="flex-1 items-center font-normal">
                  Đánh giá đơn hàng
                </Text.Header>
                <Icon icon="zi-chevron-right" />
              </Box>
            ),
          },
          {
            left: <Icon icon="zi-call" />,
            right: (
              <Box flex>
                <Text.Header className="flex-1 items-center font-normal">
                  Liên hệ và góp ý
                </Text.Header>
                <Icon icon="zi-chevron-right" />
              </Box>
            ),
          },
        ]}
        renderLeft={(item) => item.left}
        renderRight={(item) => item.right}
      />
    </Box>
  );
};

const ProfilePage: FC = () => {
  return (
    <Page>
      <Header showBackIcon={false} title="&nbsp;" />
      <Subscription />
      <Personal />
      <Other />
    </Page>
  );
};

export default ProfilePage;
