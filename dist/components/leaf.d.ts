import React from 'react';
import { Element, Text } from 'slate';
import { RenderLeafProps } from './editable';
declare const MemoizedLeaf: React.MemoExoticComponent<(props: {
    isLast: boolean;
    leaf: Text;
    parent: Element;
    renderLeaf?: ((props: RenderLeafProps) => JSX.Element) | undefined;
    text: Text;
}) => JSX.Element>;
export declare const DefaultLeaf: (props: RenderLeafProps) => JSX.Element;
export default MemoizedLeaf;
//# sourceMappingURL=leaf.d.ts.map