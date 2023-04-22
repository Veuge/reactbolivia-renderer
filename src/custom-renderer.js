import ReactReconciler from "react-reconciler";

const reconciler = ReactReconciler({
    supportsMutation: true,
    isPrimaryRenderer: true,
    supportsPersistence: false,
    supportsHydration: false,

    // Callbacks para nuestro ejemplo simple
    createInstance: (type, props) => null,
    createTextInstance: (text) => null,
    appendChild: (parent, child) => null,
    appendInitialChild: (parent, child) => null,
    appendChildToContainer: (parent, child) => null,

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
})

const render = (element, container) => {
    console.log('render', { element, container });
    const root = reconciler.createContainer(container, 0, null, false, false, '', (error) => console.log(error), null);
    reconciler.updateContainer(element, root, null, null);
};

export default render;
