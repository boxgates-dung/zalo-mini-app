import React, { FC } from "react";
import { ListRenderer } from "components/list-renderer";
import { useRecoilValue } from "recoil";
import { notificationsState } from "state";
import { Box, Header, Page, Text, Tabs, useNavigate } from "zmp-ui";
import { Divider } from "components/divider";

const NotificationPage: FC = (e) => {
  const navigate = useNavigate();
  console.log(notificationsState)
  
  return (
    <Page>
      <Header title="Thông báo" showBackIcon={true} />
      <Divider />
      <Box mx={4}>
        <Text.Header className="text-center">Thông báo hoạt động khuyến mại</Text.Header>
        <Text
          size="small"
          className="text-gray overflow-hidden text-center whitespace-nowrap text-ellipsis"
        >
          19:03. Thứ bảy, 13 tháng 1 năm 2024
        </Text>
        <Divider />
        <Text
          size="small"
          className="text-slate-800 leading-5"
        >
          Nộp 01 hồ sơ thông báo qua thư điện tử kèm chữ ký điện tử hoặc kèm bản scan Thông báo thực hiện khuyến mại có chữ ký và dấu đến địa chỉ đã được các Sở Công .
        </Text>
      </Box>
    </Page>
  );
};

export default NotificationPage;
