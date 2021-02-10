/**
 * Extendable Custom Types Interface
 */
export interface CustomTypes {
    [key: string]: unknown;
}
export declare type ExtendedType<K extends string, B> = unknown extends CustomTypes[K] ? B : B & CustomTypes[K];
//# sourceMappingURL=custom-types.d.ts.map