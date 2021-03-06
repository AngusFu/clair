import { IconContainer, IconProps } from "@components/Icon/lib/Container";
import { Moments } from "@clair/icons";
import { getStyleMergedComponent } from "@src/utils";

export const IconMoments = getStyleMergedComponent<IconProps>({
  template: Moments
})(IconContainer);
