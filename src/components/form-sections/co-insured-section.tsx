"use client"

import type { Control } from "react-hook-form"
import { useFieldArray } from "react-hook-form"
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, Plus, Trash2 } from "lucide-react"

interface CoInsuredSectionProps {
  control: Control<any>
}

export function CoInsuredSection({ control }: CoInsuredSectionProps) {
  const {
    fields: coInsuredFields,
    append: appendCoInsured,
    remove: removeCoInsured,
  } = useFieldArray({
    control,
    name: "coInsured",
  })

  return (
    <Card className="border-2 border-black">
      <CardHeader className="bg-gray-100">
        <CardTitle className="text-center font-bold">CO-INSURED INFORMATION</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-5 gap-2 font-bold text-sm border-b pb-2">
            <div>Co-Insured Name</div>
            <div>Birth Date</div>
            <div>Age</div>
            <div>Relationship</div>
            <div>Action</div>
          </div>

          {coInsuredFields.map((field, index) => (
            <div key={field.id} className="grid grid-cols-5 gap-2 items-end">
              <FormField
                control={control}
                name={`coInsured.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`coInsured.${index}.birthDate`}
                render={({ field }) => (
                  <FormItem>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal border-b-2 border-t-0 border-l-0 border-r-0 rounded-none bg-transparent hover:bg-gray-50",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? format(field.value, "MMMM dd, yyyy") : <span>Select date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`coInsured.${index}.age`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`coInsured.${index}.relationship`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeCoInsured(index)}
                className="bg-red-50 text-red-600 hover:bg-red-100 h-8 w-8 p-0"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            onClick={() => appendCoInsured({ name: "", birthDate: undefined, age: "", relationship: "" })}
            className="bg-blue-50 text-blue-600 hover:bg-blue-100"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Co-Insured
          </Button>

          {/* Total Count */}
          <div className="mt-4 grid grid-cols-5 gap-2 font-bold border-t pt-2">
            <div>Total Co-Insured: {coInsuredFields.length}</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
