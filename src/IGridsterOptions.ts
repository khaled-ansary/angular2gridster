export interface IGridsterOptions {
    direction?: string;
    lanes?: number;
    widthHeightRatio?: number;
    heightToFontSizeRatio?: number;
    dragAndDrop?: boolean;
    itemSelector?: string;
    resizable?: boolean;
    adoptingGridsterSize?: boolean;
    responsiveView?: boolean;
    responsiveDebounce?: number;
    breakpoint?: string;
    minWidth?: number;
    responsiveOptions?: Array<IGridsterOptions>;
}
