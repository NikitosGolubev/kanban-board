/**
 * @fileOverview Validation view interface.
 * @namespace NikitosGolubev\Views\Content
 */

import View from '../../view';

/**
 * @implements View, Observer
 * @abstract
 */
class ValidationView extends View {
    namespace() { return 'NikitosGolubev\\Views\\Content\\Validation\\ValidationView'; }

    constructor(model) {
        super(model);
    }

    /**
     * @see Observer.update()
     * @param {{responses: object}} data
     */
    update({responses}) {
        for (let field in responses) {
            this.main({response: responses[field], paramName: field});
        }
    }

    /**
     * @see View.main()
     * @param {{response: object}}
     */
    main({response, paramName} = false) {
        const {visualValidation=true, result} = response;

        if (visualValidation) {
            if (result) this.success(response);

            if (!result) this.fail(response);
        }
        else if (!result) console.error(`${paramName}: ${response.message}`);
    }

    /**
     * Prints positive validation result
     * @abstract
     * @param response
     */
    success(response) {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }

    /**
     * Prints negative validation result
     * @abstract
     * @param response
     */
    fail(response) {
        console.error("It's an abstract method which requires implementation!");
        throw "It's an abstract method which requires implementation!";
    }
}

export default ValidationView;
