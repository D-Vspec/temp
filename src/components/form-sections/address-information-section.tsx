"use client"

import type { Control } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AddressInformationSectionProps {
  control: Control<any>
}

export function AddressInformationSection({ control }: AddressInformationSectionProps) {
  return (
    <Card className="border-2 border-black">
      <CardHeader className="bg-gray-100">
        <CardTitle className="text-center font-bold">ADDRESS INFORMATION</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="streetAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">NO./STREET/SUBDIVISION:</FormLabel>
                <FormControl>
                  <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="barangay"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">BRGY:</FormLabel>
                <FormControl>
                  <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="cityMunicipality"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">CITY/MUNICIPALITY:</FormLabel>
                <FormControl>
                  <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="province"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">PROVINCE:</FormLabel>
                <FormControl>
                  <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="region"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">REGION:</FormLabel>
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
