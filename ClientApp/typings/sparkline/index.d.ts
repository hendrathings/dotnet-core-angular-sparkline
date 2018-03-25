// TypeScript Version: 2.4

/// <reference types="jquery" />
interface JQuery {
    sparkline(values?: string | Array<(string | number)>, opts?: sparkline.Settings): any;
}

declare namespace sparkline {
    interface Settings {
        type?: string;
        barColor?: string;
        width?: string | number;
        height?: string;
        lineColor?: string;
        fillColor?: string | number;
        chartRangeMin?: string | number;
        chartRangeMax?: string | number;
        composite?: boolean;
        enableTagOptions?: boolean;
        tagOptionPrefix?: string;
        tagValuesAttribute?: string;
        disableHiddenCheck?: boolean;
    }

}