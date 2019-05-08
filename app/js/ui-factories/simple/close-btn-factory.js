/**
 * @fileOverview Creates close btn.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';

/**
 * @extends UiFactory
 */
class CloseBtnFactory extends UiFactory {
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.build()
     * @param {object} data nothing expected
     */
    build(data) {
        let closeBtnSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        closeBtnSvg.setAttribute('viewBox', '0 0 15 15');
        closeBtnSvg.setAttribute('fill', 'none');

        let closeBtnPath = document.createElementNS('http://www.w3.org/2000/svg','path');
        closeBtnPath.setAttribute('fill-rule', 'evenodd');
        closeBtnPath.setAttribute('clip-rule', 'evenodd');
        closeBtnPath.setAttribute('d', 'M7.5 6.71875L14.2188 0L15 0.78125L8.28125 7.5L15 14.2188L14.2188 15L7.5 8.28125L0.78125 15L0 14.2188L6.71875 7.5L0 0.78125L0.78125 0L7.5 6.71875Z');

        closeBtnSvg.appendChild(closeBtnPath);
        return closeBtnSvg;
    }
}

export default CloseBtnFactory;
