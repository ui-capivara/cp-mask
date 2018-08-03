/* 
    Component created by capivara-cli https://capivarajs.github.io/
*/
import capivara from 'capivarajs';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import template from './component/mask.template.html';
import style from './component/mask.style.scss';
import { CapivaraMask } from './component/mask.component';

const Component = {
    /**
     * @name template
     * @description Applies the visual part of the component
     */
    template  : template,
    /**
     * @name style
     * @description Import component style
     */
    style     : style,
    /**
     * @name constants
     * @description Declares the constants that will be accepted by component. See https://capivarajs.github.io/components.html#constants
     */
    constants: [],
    /**
     * @name functions
     * @description Declares the functions that will be accepted by component. See https://capivarajs.github.io/components.html#functions
     */
    functions: [],
    /**
     * @name bindings
     * @description Declares the variables that will be accepted by component. See https://capivarajs.github.io/components.html#bindings
     */
    bindings: ['capivaraMask', 'lazyPlaceholder', 'inputClass'],
    /**
     * @name controller
     * @description Sets the scope of the component
     */
    controller: CapivaraMask
};

export default capivara.component('cp-mask', Component);