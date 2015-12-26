export function isValidProps(myId, Entities) {
  if(!myId) return false
  if(!Entities) return false
  if(!Entities[myId]) return false

  return true
}
