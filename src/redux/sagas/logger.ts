export const logger = (_store: any) => (next: any) => (action: any) => {
  next(action);
  console.log(action);
};
