import React, { FC, useState } from "react";
import { Box, Header, Icon, Page, Text, Avatar, Button, Modal, useNavigate } from "zmp-ui";
import subscriptionDecor from "static/subscription-decor.svg";
import { ListRenderer } from "components/list-renderer";
import { useToBeImplemented } from "hooks";
import { SettingIcon } from "components/icons/setting-icon";
import { HeadphoneIcon } from "components/icons/headphone-icon";
import { PaymentIcon } from "components/icons/payment-icon";
import { Divider } from "components/divider";
import { NotifIcon } from "components/icons/notif-icon";

const Profile: FC = () => {
  const onClick = useToBeImplemented();

  return (
    <Box className="bg-[var(--zmp-primary-color)] mb-4">
      <Box className="px-4 pb-7 pt-3 text-center">
        <Avatar story="seen" src="https://user-images.githubusercontent.com/5709133/50445980-88299a80-0912-11e9-962a-6fd92fd18027.png" size={128} />
        <Box className="mt-2">
          <Text.Header className="mb-1 text-[20px] font-semibold text-[#121212]">Nana Nana</Text.Header>
          <Text
            size="xxSmall"
            className="text-gray font-semibold overflow-hidden whitespace-nowrap text-ellipsis"
          >
            +84169923123
          </Text>
          <Box className="mt-3">
            <Box className="inline-flex rounded-full bg-slate-600 px-2 py-1 gap-2">
              <Text className="font-bold text-xs text-white">
                10
              </Text>
              <Box className="bg-yellow-500 border-2 border-white w-4 h-4 rounded-full text-[7px] text-blue-700 font-bold p-[1px]">
                be
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

const PaymentMethod: FC = () => {
  const onClick = useToBeImplemented();

  return (
    <Box className="bg-white">
      <ListRenderer
        onClick={onClick}
        items={[
          {
            left: <PaymentIcon className="mt-[3px] w-4 h-4" />,
            right: (
              <Box flex>
                <Text.Header className="flex-1 items-center font-normal">
                  Thanh toán
                </Text.Header>
                <Icon icon="zi-chevron-right" className="text-lg text-slate-400 flex items-center" />
              </Box>
            ),
          }
        ]}
        renderLeft={(item) => item.left}
        renderRight={(item) => item.right}
      />
    </Box>
  );
};

const Other: FC = () => {
  const onClick = useToBeImplemented();
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <>
      <Box className="bg-white">
        <ListRenderer
          divider="full-width"
          onClick={() => setPopupVisible(true)}
          items={[
            {
              left: <HeadphoneIcon className="mt-[3px] w-4 h-4" />,
              right: (
                <Box flex>
                  <Text.Header className="flex-1 items-center font-normal">
                    Hỗ trợ
                  </Text.Header>
                  <Icon icon="zi-chevron-right" className="text-lg text-slate-400 flex items-center" />
                </Box>
              ),
            },
            {
              left: <SettingIcon className="mt-[3px] w-4 h-4" />,
              right: (
                <Box flex>
                  <Text.Header className="flex-1 items-center font-normal">
                    Cài đặt
                  </Text.Header>
                  <Icon icon="zi-chevron-right" className="text-lg text-slate-400 flex items-center" />
                </Box>
              ),
            },
          ]}
          renderLeft={(item) => item.left}
          renderRight={(item) => item.right}
        />
      </Box>

      <Modal
        visible={popupVisible}
        title="Hỗ trợ qua điện thoại"
        onClose={() => setPopupVisible(false)}
        description="Bạn có muốn gọi tới số 1900232345"
        modalClassName="rounded-md text-center"
      >
        <Box className="flex justify-between gap-3 mt-8">
          <Button
            onClick={() => {
              setPopupVisible(false);
            }}
            fullWidth
            variant="secondary"
            type="neutral"
            size="medium"
            className="rounded-md text-slate-800"
          >
            Hủy
          </Button>

          <Button
            onClick={() => {
              setPopupVisible(false);
            }}
            fullWidth
            size="medium"
            className="rounded-md text-slate-800"
          >
            Gọi
          </Button>
        </Box>
      </Modal>
    </>
  );
};

const IndividualPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Header 
      showBackIcon={true} 
      backgroundColor="var(--zmp-primary-color)" 
      backIcon={(<NotifIcon />)}
      onBackClick={()=>{
        navigate('/notification', {
          animate: false,
        })
      }}
      />
      <Profile />
      <PaymentMethod />
      <Divider />
      <Other />
    </Page>
  );
};

export default IndividualPage;
