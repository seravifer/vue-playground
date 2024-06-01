export const get = async <T>(url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw response
  }
  const contentType = response.headers.get('content-type')
  if (contentType?.includes('application/json')) {
    return (await response.json()) as T
  }
  throw new Error('Not supported content type')
}
