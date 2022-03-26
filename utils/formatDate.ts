export default function formatDate(msDate: string) {
  const date = new Date(msDate);
  return date.toDateString().slice(3, 15);
}
