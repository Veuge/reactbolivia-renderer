import ReactReconciler from 'react-reconciler';

const reconciler = ReactReconciler({
    supportsMutation: true,
    isPrimaryRenderer: true,
    supportsPersistence: false,
    supportsHydration: false,

    createInstance: (type, props) => {
        console.log('createInstance', { type, props });
        const element = document.createElement(type);
        Object.keys(props).forEach((prop) => {
            if (!["children", "onClick", "key"].includes(prop)) {
                element[prop] = props[prop];
            }
        });
        return element;
    },
    createTextInstance: (text) => document.createTextNode(text),
    appendChild: (parent, child) => parent.appendChild(child),
    appendInitialChild: (parent, child) => parent.appendChild(child),
    appendChildToContainer: (parent, child) => parent.appendChild(child),

    // Rest....
    finalizeInitialChildren: () => false,
    prepareUpdate: () => null,
    shouldSetTextContent: () => false,
    getRootHostContext: () => null,
    getChildHostContext: () => null,
    getPublicInstance: () => null,
    prepareForCommit: () => null,
    resetAfterCommit: () => null,
    preparePortalMount: () => null,
    scheduleTimeout: () => null,
    cancelTimeout: () => null,
    noTimeout: () => null,
    getCurrentEventPriority: () => 0,
    getInstanceFromNode: () => null,
    beforeActiveInstanceBlur: () => null,
    afterActiveInstanceBlur: () => null,
    prepareScopeUpdate: () => null,
    getInstanceFromScope: () => null,
    detachDeletedInstance: () => null,
    clearContainer: () => null,
});

const render = (element, container) => {
    const root = reconciler.createContainer(container, 0, null, false, false, '', (error) => console.log(error), null);
    reconciler.updateContainer(element, root, null, null);
};

export default render;
