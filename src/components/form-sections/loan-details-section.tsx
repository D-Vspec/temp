"use client"

import type { Control } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

interface LoanDetailsSectionProps {
  control: Control<any>
}

export function LoanDetailsSection({ control }: LoanDetailsSectionProps) {
  return (
    <Card className="border-2 border-black">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <FormField
            control={control}
            name="loanPurpose"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Loan Purpose</FormLabel>
                <FormControl>
                  <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="desiredLoanAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Desired Loan Amount Php</FormLabel>
                <FormControl>
                  <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="paymentMode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Desired Mode of Payment</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="semi-annual">Semi-annual</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="loanTerm"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Desired Loan Term</FormLabel>
                <FormControl>
                  <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  )
}
