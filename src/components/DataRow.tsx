interface DataRowProps {
  label: string
  value: string | number | null | undefined
}

export default function DataRow({ label, value }: DataRowProps) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
      <span className="font-medium text-gray-700">{label}:</span>
      <span className="text-gray-900">{value || "Not provided"}</span>
    </div>
  )
}