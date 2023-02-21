/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
