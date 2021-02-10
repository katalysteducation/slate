import { Range } from 'slate';
/**
 * Check if a list of ranges is equal to another.
 *
 * PERF: this requires the two lists to also have the ranges inside them in the
 * same order, but this is an okay constraint for us since decorations are
 * kept in order, and the odd case where they aren't is okay to re-render for.
 */
export declare const isRangeListEqual: (list: Range[], another: Range[]) => boolean;
//# sourceMappingURL=range.d.ts.map