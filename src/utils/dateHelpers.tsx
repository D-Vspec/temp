export const formatDate = (dateString: string | null | undefined) => {
  if (!dateString) return "Not provided"
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return "Invalid date"
  }
}