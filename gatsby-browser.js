import "./src/styles/global.css"
export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.hash) {
    return false
  }

  return true
}
