export const trpc = {
  useQuery: () => ({ data: [], isLoading: false }),
  useMutation: () => ({ mutate: () => {}, isLoading: false }),
  admin: {
    getPrayers: { useQuery: () => ({ data: [], isLoading: false }) },
    deletePrayer: { useMutation: () => ({ mutate: () => {}, isLoading: false }) }
  },
  prayers: {
    getWall: { useQuery: () => ({ data: [], isLoading: false }) }
  },
  bible: {
    getWeeklyChapter: { useQuery: () => ({ data: null, isLoading: false }) }
  }
}
