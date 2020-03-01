import React, { PureComponent } from 'react';
import classnames from 'classnames';
import RcTooltip from 'rc-tooltip';
import * as ColorPickers from 'react-color';
import { ActionType } from 'rc-trigger/lib/interface';

export type ColorResult = ColorPickers.ColorResult;

// http://casesandberg.github.io/react-color/
export type IColorPickerType =
  | 'Chrome'
  | 'Sketch'
  | 'Photoshop'
  | 'Block'
  | 'Github'
  | 'Twitter'
  | 'Hue'
  | 'Alpha'
  | 'Circle'
  | 'Slider'
  | 'Compact'
  | 'Material'
  | 'Swatches';

export type ITooltipPlacement =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "bottomRight"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "leftTop"
  | "leftBottom"
  | "rightTop"
  | "rightBottom";

export { ActionType };

export interface IReactColorPopoverPickerProps {
  chidlren?: React.ReactChildren
  type?: IColorPickerType
  placement?: ITooltipPlacement
  className?: string
  overlayClassName?: string
  prefixCls?: string
  trigger?: ActionType
  visible?: boolean
  overlayStyle?: React.CSSProperties
  zIndex?: number
  value: string
  onChange?: (event: ColorResult) => void
  onAfterChange?: (event: ColorResult) => void
  onVisibleChange?: (event: boolean) => void
}

interface ICState {
  visible: boolean
}

class ReactColorPopoverPicker extends PureComponent<IReactColorPopoverPickerProps, ICState> {
  state = {
    visible: false
  };

  static defaultProps = {
    type: 'Chrome',
    placement: 'bottom',
    prefixCls: 'm-color-popover-picker',
    trigger: ['click'],
    zIndex: 999,
    onChange: (event: ColorResult) => {},
  };

  static getDerivedStateFromProps(nextProps: IReactColorPopoverPickerProps) {
    if ('visible' in nextProps) {
      return { visible: nextProps.visible };
    }
    return null;
  }

  /**
   * Overlay Node getter.
   */
  getOverlay(): React.ReactElement | null {
    const { type, value, onAfterChange, onChange } = this.props;
    const ColorPickerComponent = (ColorPickers as any)[`${type}Picker`] as React.ComponentType<any> | null;
    return ColorPickerComponent ? (
      <ColorPickerComponent
        color={value}
        onChange={onChange}
        onChangeComplete={onAfterChange}
      />
    ) : null;
  }

  /**
   * The handler of change of visible.
   */
  onVisibleChange = (visible: boolean): void => {
    const { onVisibleChange } = this.props;
    this.setState({ visible });
    if (typeof onVisibleChange === 'function') {
      onVisibleChange(visible)
    }
  }

  render() {
    const { props, state } = this;
    const { visible } = state;
    const {
      className,
      prefixCls,
      trigger,
      overlayClassName,
      overlayStyle,
      zIndex,
      value,
      ...rest
    } = props;
    const children = props.children as React.ReactElement<any>;
    return (
      <RcTooltip
        {...rest}
        overlayStyle={{...(overlayStyle || {}), zIndex }}
        overlayClassName={classnames(`${prefixCls}-overlay`, overlayClassName)}
        onVisibleChange={this.onVisibleChange}
        visible={visible}
        overlay={this.getOverlay()}
        trigger={trigger as ActionType}
      >
        {
          children || (
            <div className={classnames(`${prefixCls}-trigger`, className)}>
              <div className={`${prefixCls}-trigger-transparent`} />
              <div className={`${prefixCls}-trigger-inner`} style={{ backgroundColor: value }} />
            </div>
          )
        }
      </RcTooltip>
    );
  }
}

export default ReactColorPopoverPicker;
