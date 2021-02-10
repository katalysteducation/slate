/**
 * The `withHistory` plugin keeps track of the operation history of a Slate
 * editor as operations are applied to it, using undo and redo stacks.
 */
export declare const withHistory: <T extends import("slate").BaseEditor>(editor: T) => T & import("slate").BaseEditor & {
    history: import("./history").History;
    undo: () => void;
    redo: () => void;
};
//# sourceMappingURL=with-history.d.ts.map