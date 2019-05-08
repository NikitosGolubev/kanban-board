/**
 * @fileOverview Creates add button.
 * @namespace NikitosGolubev\UiFactories\Simple
 */

import UiFactory from './ui-factory';
// UI dependencies
import AddSvgImgFactory from "./add-svg-img-factory";

/**
 * @extends UiFactory
 */
class AddButtonFactory extends UiFactory {
    constructor($data = false) {
        super($data);
    }

    /**
     * @see UiFactory.build()
     * @param {object} data {content: buttonSign} expected
     */
    build(data) {
        let btnContainer = document.createElement('div');
        btnContainer.classList.add('add-btn');

        // add img
        let addImgContainer = document.createElement('div');
        let svgAddImg = this.uiObjects.get('addImg').get();
        svgAddImg.classList.add('add-btn__img');
        addImgContainer.appendChild(svgAddImg);

        // button sign
        let contentContainer = document.createElement('div');
        contentContainer.innerText = data.content;

        btnContainer.appendChild(addImgContainer);
        btnContainer.appendChild(contentContainer);

        return btnContainer;
    }

    /**
     * @see UiFactory.uiObjectsFactory()
     * @return {Map<any, UiFactory>}
     */
    uiObjectsFactory() {
        return new Map([
           ['addImg', new AddSvgImgFactory()]
        ]);
    }
}

export default AddButtonFactory;
