const handler: any = {
  get: function(target: any, prop: string) {
    if (prop === 'useQuery') {
      return () => ({ data: [], isLoading: false });
    }
    if (prop === 'useMutation') {
      return () => ({ mutate: () => {}, isLoading: false });
    }
    if (prop === 'useContext') {
      return () => new Proxy({}, handler);
    }
    return new Proxy({}, handler);
  }
};
export const trpc = new Proxy({}, handler) as any;
