//  unuesed

import { RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface ScoreOptionProps {
  value: string
  label: string
  field: string
}

export default function ScoreOption({ value, label, field }: ScoreOptionProps) {
  return (
    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
      <RadioGroupItem value={value} id={`${field}-${value}`} />
      <Label htmlFor={`${field}-${value}`} className="cursor-pointer flex-1 text-sm">
        <span className="font-medium text-blue-600">{value}</span> - {label}
      </Label>
    </div>
  )
}