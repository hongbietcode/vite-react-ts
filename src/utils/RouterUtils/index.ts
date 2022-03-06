const trimPath = (path?: string) => {
    if (path) {
        const trimedPath = path.replace(/^\/+|\/+$/g, '');
        return trimedPath.length > 0 ? trimedPath : undefined;
    }

    return path;
};

const pathCombine = (...path: string[]) => {
    const compactPath = path.map(trimPath).filter(Boolean);
    return compactPath.join('/');
};

const RouterUtils = {
    trimPath,
    pathCombine,
};

export default RouterUtils;
