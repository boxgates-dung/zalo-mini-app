import React, { ReactNode, useMemo, useState } from "react";
import { Box, Button, Icon, Text } from "zmp-ui";

interface ListRendererProps<T> {
  title?: string;
  limit?: number;
  items: T[];
  renderLeft: (item: T) => ReactNode;
  renderRight: (item: T) => ReactNode;
  renderKey?: (item: T) => string;
  onClick?: (item: T) => void;
  divider?: 'none' | 'normal' | 'full-width';
  itemCenter?: boolean;
}

export function ListRenderer<T>({
  title,
  items,
  limit,
  renderLeft,
  renderRight,
  renderKey,
  onClick,
  divider,
  itemCenter = false,
}: ListRendererProps<T>) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapsedItems = useMemo(() => {
    return items.slice(0, limit);
  }, [items]);

  return (
    <Box className="bg-background rounded-xl">
      {title && <Text.Title className="p-4 pb-0">{title}</Text.Title>}
      <Box>
        {(isCollapsed ? collapsedItems : items).map((item, i, list) => (
          <div
            key={renderKey ? renderKey(item) : i}
            onClick={() => onClick?.(item)}
            className="flex space-x-4 p-4 last:pb-0 relative"
          >
            {renderLeft(item)}
            <Box className="flex-1 min-w-0 relative">
              {renderRight(item)}
              {divider === 'normal' && i < list.length - 1 && (
                <hr className="absolute left-0 -right-4 -bottom-4 border-divider border-t-[0.5px]"></hr>
              )}
            </Box>
            {divider === 'full-width' && i < list.length - 1 && (
              <hr className="absolute w-100 -left-4 right-0 bottom-0 border-divider border-t-[0.5px]"></hr>
            )}
          </div>
        ))}
      </Box>
      {isCollapsed && collapsedItems.length < items.length ? (
        <Box className="p-2">
          <Button
            onClick={() => setIsCollapsed(false)}
            fullWidth
            suffixIcon={<Icon icon="zi-chevron-down" />}
            variant="tertiary"
            type="neutral"
          >
            Xem thêm
          </Button>
        </Box>
      ) : (
        <Box className="w-full h-4"></Box>
      )}
    </Box>
  );
}
