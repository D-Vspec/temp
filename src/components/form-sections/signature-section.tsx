"use client"

import { Card, CardContent } from "@/components/ui/card"

export function SignatureSection() {
  return (
    <Card className="border-2 border-black">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="border-b-2 border-black h-16 mb-2"></div>
            <p className="font-bold text-sm">BORROWER SIGNATURE OVER PRINTED NAME</p>
          </div>
          <div className="text-center">
            <div className="border-b-2 border-black h-16 mb-2"></div>
            <p className="font-bold text-sm">BORROWER SIGNATURE OVER PRINTED NAME</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

