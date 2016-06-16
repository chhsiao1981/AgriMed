export function isValidProps(myId, Entities) {
  if(!myId) return false
  if(!Entities) return false
  if(!Entities[myId]) return false

  return true
}

export function delay(func, params, milliseconds=200) {
  setTimeout(() => {func(params)}, milliseconds)
}
