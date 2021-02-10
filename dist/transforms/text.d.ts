import { Editor, Location, Node } from '..';
export declare const TextTransforms: {
    /**
     * Delete content in the editor.
     */
    delete(editor: Editor, options?: {
        at?: Location;
        distance?: number;
        unit?: 'character' | 'word' | 'line' | 'block';
        reverse?: boolean;
        hanging?: boolean;
        voids?: boolean;
    }): void;
    /**
     * Insert a fragment at a specific location in the editor.
     */
    insertFragment(editor: Editor, fragment: Node[], options?: {
        at?: Location;
        hanging?: boolean;
        voids?: boolean;
    }): void;
    /**
     * Insert a string of text in the Editor.
     */
    insertText(editor: Editor, text: string, options?: {
        at?: Location;
        voids?: boolean;
    }): void;
};
//# sourceMappingURL=text.d.ts.map