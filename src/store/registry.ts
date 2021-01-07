// This util ensures isolation in tests and storybook
// Almost all stores should add themselves to the registry upon initialization
// e.g.
// const init = { ...useStore.getState() }
// registry.useUserStore = () => useStore.setState({ ...init })
export const registry: Record<string, (() => void)> = {}

export const reset = (): void => {
  for (const storeReset of Object.values(registry)) {
    storeReset()
  }
}
