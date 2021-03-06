import { FunctionalComponent } from 'vue';

import 'ant-design-vue/es/drawer/style';
import Drawer from 'ant-design-vue/es/drawer';

import SiderMenu, { SiderMenuProps, PrivateSiderMenuProps } from './SiderMenu';

export type SiderMenuWrapperProps = SiderMenuProps & PrivateSiderMenuProps;

const SiderMenuWrapper: FunctionalComponent<SiderMenuWrapperProps> = props => {
  return props.isMobile ? (
    <Drawer>
      <SiderMenu {...props} />
    </Drawer>
  ) : (
    <SiderMenu {...props} />
  );
};

SiderMenuWrapper.inheritAttrs = false;

export default SiderMenuWrapper;
