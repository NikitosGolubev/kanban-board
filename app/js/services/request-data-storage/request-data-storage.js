/**
 * @fileOverview Request data storage interface.
 * @namespace NikitosGolubev\Services\RequestDataStorage
 */

import Service from '../service';

/**
 * Provides unified API to store data and info how to handle it.
 * @extends Service
 */
class RequestDataStorage extends Service {
    namespace() { return 'NikitosGolubev\\Services\\RequestDataStorage\\RequestDataStorage'; }

    constructor() {
        super();

        /**
         * Data container. Contains all the data which were set.
         * @type {object}
         */
        this.params = {};
    }

    /**
     * Returns all the data which were set.
     * @return {object}
     */
    getParams() {return this.params;}

    /**
     * Sets data record to records container.
     * @param {string} paramName The name of key in the storage.
     * @param content The data provided.
     * @param {null|HTMLElement} target HTMLElement which relates to this data.
     * @param {boolean} required
     * @param visualValidation If data should be validated visually or not (to user).
     * @param rest Other properties which may be useful to handle this piece of data.
     */
    setParam(paramName, {
        content,
        target = null,
        required = true,
        visualValidation = true,
        ...rest
    }) {
        this.validateParam(content, target, required);

        const param = Object.assign(rest, {
            content: content,
            target: target,
            required: required,
            visualValidation: visualValidation
        });

        this.params[paramName] = param;
    }

    /**
     * Returns only content (particular data which were provided).
     * @param {object|null} $params
     * @return {object}
     */
    getContentsOnly($params = null) {
        let contentOnlyObj = {};

        if ($params === null) $params = this.params;

        for (let paramName in $params) {
            contentOnlyObj[paramName] = $params[paramName].content;
        }

        return contentOnlyObj;
    }

    /**
     * Allows to apply some action to somehow modify the data given(content).
     * @param {object|null} $params
     * @param {function} modifyAction
     * @param callbackArgs Arguments to pass in callback.
     * @return {object}
     */
    modifyContent($params = null, modifyAction, ...callbackArgs) {
        if ($params === null) $params = this.params;

        for (let paramName in $params) {
            $params[paramName].content = modifyAction($params[paramName].content, ...callbackArgs);
        }

        return $params;
    }

    /**
     * Validates param. Unifies the format each data param should be set.
     * @param content Actual data.
     * @param {null|HTMLElement} target HTML element which is related to the given data.
     * @param {boolean} required
     * @throws Error
     */
    validateParam(content, target, required) {
        if (
            content === undefined ||
            !((target instanceof HTMLElement) || target === null) ||
            !(required instanceof Boolean)
        ) {
            const invalidParamMsg = `
                REQUEST PARAMETER IS INVALID: \n
                -) You MUST provide 'content' (can't be undefined). \n
                -) 'target' MUST be an HTMLElement or not given (NULL by default). \n
                -) 'required' property MUST be a boolean type (it's TRUE by default). \n
                Error from RequestDataStorage
            `;

            throw new Error(invalidParamMsg);
        }
    }

}

export default RequestDataStorage;