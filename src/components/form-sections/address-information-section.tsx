"use client"

import type { Control } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect } from "react"

interface AddressInformationSectionProps {
  control: Control<any>
  clientData?: any
}

export function AddressInformationSection({ control, clientData }: AddressInformationSectionProps) {
  // Populate form fields when clientData is provided
  useEffect(() => {
    if (clientData?.data) {
      const data = clientData.data

      // Set form values using setValue
      if (data.streetAddress) control._formValues.streetAddress = data.streetAddress
      if (data.barangay) control._formValues.barangay = data.barangay
      if (data.cityMunicipality) control._formValues.cityMunicipality = data.cityMunicipality
      if (data.province) control._formValues.province = data.province
      if (data.region) control._formValues.region = data.region
    }
  }, [clientData, control])

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
                  <Input
                    {...field}
                    value={field.value || clientData?.data?.streetAddress || ""}
                    className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                  />
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
                  <Input
                    {...field}
                    value={field.value || clientData?.data?.barangay || ""}
                    className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                  />
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
                  <Input
                    {...field}
                    value={field.value || clientData?.data?.cityMunicipality || ""}
                    className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                  />
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
                  <Input
                    {...field}
                    value={field.value || clientData?.data?.province || ""}
                    className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                  />
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
                  <Input
                    {...field}
                    value={field.value || clientData?.data?.region || ""}
                    className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                  />
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
