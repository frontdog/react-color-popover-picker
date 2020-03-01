import React, { PureComponent } from 'react';
import * as ColorPickers from 'react-color';
import { ActionType } from 'rc-trigger/lib/interface';
export declare type ColorResult = ColorPickers.ColorResult;
export declare type IColorPickerType = 'Chrome' | 'Sketch' | 'Photoshop' | 'Block' | 'Github' | 'Twitter' | 'Hue' | 'Alpha' | 'Circle' | 'Slider' | 'Compact' | 'Material' | 'Swatches';
export declare type ITooltipPlacement = "left" | "right" | "top" | "bottom" | "bottomRight" | "topLeft" | "topRight" | "bottomLeft" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
export { ActionType };
export interface IReactColorPopoverPickerProps {
    chidlren?: React.ReactChildren;
    type?: IColorPickerType;
    placement?: ITooltipPlacement;
    className?: string;
    overlayClassName?: string;
    prefixCls?: string;
    trigger?: ActionType;
    visible?: boolean;
    overlayStyle?: React.CSSProperties;
    zIndex?: number;
    value: string;
    onChange?: (event: ColorResult) => void;
    onAfterChange?: (event: ColorResult) => void;
    onVisibleChange?: (event: boolean) => void;
}
interface ICState {
    visible: boolean;
}
declare class ReactColorPopoverPicker extends PureComponent<IReactColorPopoverPickerProps, ICState> {
    state: {
        visible: boolean;
    };
    static defaultProps: {
        type: string;
        placement: string;
        prefixCls: string;
        trigger: string[];
        zIndex: number;
        onChange: (event: ColorPickers.ColorResult) => void;
    };
    static getDerivedStateFromProps(nextProps: IReactColorPopoverPickerProps): {
        visible: boolean | undefined;
    } | null;
    /**
     * Overlay Node getter.
     */
    getOverlay(): React.ReactElement | null;
    /**
     * The handler of change of visible.
     */
    onVisibleChange: (visible: boolean) => void;
    render(): JSX.Element;
}
export default ReactColorPopoverPicker;
