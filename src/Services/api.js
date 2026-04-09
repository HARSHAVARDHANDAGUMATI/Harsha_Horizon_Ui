export async function simulateRequest(payload, delay = 120) {
  await new Promise((resolve) => {
    window.setTimeout(resolve, delay)
  })

  return payload
}
