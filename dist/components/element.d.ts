import React from 'react';
import { Range, NodeEntry, Element as SlateElement } from 'slate';
import { RenderElementProps, RenderLeafProps } from './editable';
/**
 * Element.
 */
declare const Element: (props: {
    decorate: (entry: NodeEntry<import("slate").BaseNode>) => Range[];
    decorations: Range[];
    element: SlateElement;
    renderElement?: ((props: RenderElementProps) => JSX.Element) | undefined;
    renderLeaf?: ((props: RenderLeafProps) => JSX.Element) | undefined;
    selection: Range | null;
}) => JSX.Element;
declare const MemoizedElement: React.MemoExoticComponent<(props: {
    decorate: (entry: NodeEntry<import("slate").BaseNode>) => Range[];
    decorations: Range[];
    element: SlateElement;
    renderElement?: ((props: RenderElementProps) => JSX.Element) | undefined;
    renderLeaf?: ((props: RenderLeafProps) => JSX.Element) | undefined;
    selection: Range | null;
}) => JSX.Element>;
/**
 * The default element renderer.
 */
export declare const DefaultElement: (props: RenderElementProps) => JSX.Element;
export default MemoizedElement;
//# sourceMappingURL=element.d.ts.map