// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

/// <reference types="react-scripts" />

declare module 'redux-react-hook';
declare module 'react-testing-library';

declare module '@storybook/addon-knobs';
declare module '@storybook/addon-a11y';

interface FormData {
    entries(): Array<[string, string | Blob]>;
}