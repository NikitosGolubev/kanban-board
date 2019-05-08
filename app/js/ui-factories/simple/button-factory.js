/**
 * @fileOverview Creates button.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';

/**
 * @extends UiFactory
 */
class ButtonFactory extends UiFactory {
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.build()
     * @param {object} data {content: buttonSign} expected
     */
    build(data) {
        let btn = document.createElement('button');
        btn.classList.add('btn');
        btn.classList.add('btn_primary');
        btn.innerText = data.content;
        return btn;
    }
}

export default ButtonFactory;
