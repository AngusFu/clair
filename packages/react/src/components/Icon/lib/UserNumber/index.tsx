import { IconContainer, IconProps } from "@components/Icon/lib/Container";
import { UserNumber } from "@clair/icons";
import { getStyleMergedComponent } from "@src/utils";

export const IconUserNumber = getStyleMergedComponent<IconProps>({
  template: UserNumber
})(IconContainer);
