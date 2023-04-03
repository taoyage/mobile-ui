import { DialogProps } from './dialog';
export declare type DialogShowProps = Omit<DialogProps, 'visible'>;
declare function show(props: DialogShowProps): void;
export default show;
