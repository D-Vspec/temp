import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FormSectionProps {
  title: string
  children: React.ReactNode
  bgColor?: string
}

export default function FormSection({ title, children, bgColor = "bg-gray-50" }: FormSectionProps) {
  return (
    <Card className="border-2 border-black">
      <CardHeader className={bgColor}>
        <CardTitle className="text-lg font-bold text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  )
}
