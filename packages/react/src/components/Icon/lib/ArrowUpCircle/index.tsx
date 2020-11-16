import { IconContainer, IconProps } from "@components/Icon/lib/Container";
import { ArrowUpCircle } from "@clair/icons";
import { getStyleMergedComponent } from "@src/utils";

export const IconArrowUpCircle = getStyleMergedComponent<IconProps>({
  template: ArrowUpCircle
})(IconContainer);
