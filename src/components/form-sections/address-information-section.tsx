"use client"

import type { Control } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

interface AddressInformationSectionProps {
  control: Control<any>
}

export function AddressInformationSection({ control }: AddressInformationSectionProps) {
  return (
    <Card className="border-2 border-black">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <FormField
              control={control}
              name="homeAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">HOME/PERMANENT ADDRESS:</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                      rows={1}
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement
                        target.style.height = "auto"
                        target.style.height = target.scrollHeight + "px"
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FormField
              control={control}
              name="homeStatus"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="owned">Owned</SelectItem>
                      <SelectItem value="living-with-relatives">Living with relatives</SelectItem>
                      <SelectItem value="renting">Renting</SelectItem>
                      <SelectItem value="mortgaged">Presently mortgage</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="rentAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Renting for Php</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="mortgageAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Presently mortgage for Php</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="yearsOfResidencyHome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>YEARS OF RESIDENCY</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={control}
              name="presentAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PRESENT ADDRESS:</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                      rows={1}
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement
                        target.style.height = "auto"
                        target.style.height = target.scrollHeight + "px"
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="yearsOfResidencyPresent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>YEARS OF RESIDENCY</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={control}
              name="previousAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PREVIOUS ADDRESS:</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                      rows={1}
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement
                        target.style.height = "auto"
                        target.style.height = target.scrollHeight + "px"
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="yearsOfResidencyPrevious"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>YEARS OF RESIDENCY</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
