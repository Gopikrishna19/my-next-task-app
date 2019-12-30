export const noOp = () => undefined;

export const safeCall = method => (method ? method : noOp);
