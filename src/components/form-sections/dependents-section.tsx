"use client"

import { type Control, useFieldArray } from "react-hook-form"
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"

interface DependentsSectionProps {
  control: Control<any>
}

export function DependentsSection({ control }: DependentsSectionProps) {
  const {
    fields: dependentFields,
    append: appendDependent,
    remove: removeDependent,
  } = useFieldArray({
    control,
    name: "dependents",
  })

  return (
    <Card className="border-2 border-black">
      <CardHeader className="bg-gray-100">
        <CardTitle className="text-center font-bold">BORROWER'S DEPENDENTS</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4 font-bold border-b-2 pb-2">
            <div>Name</div>
            <div>Age</div>
            <div>School/Company</div>
            <div>Level / Years Employed</div>
          </div>
          {dependentFields.map((field, index) => (
            <div key={field.id} className="grid grid-cols-4 gap-4 items-end">
              <FormField
                control={control}
                name={`dependents.${index}.name`}
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
                name={`dependents.${index}.age`}
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
                name={`dependents.${index}.schoolCompany`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2">
                <FormField
                  control={control}
                  name={`dependents.${index}.levelYearsEmployed`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
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
                  onClick={() => removeDependent(index)}
                  className="bg-red-50 text-red-600 hover:bg-red-100"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => appendDependent({ name: "", age: "", schoolCompany: "", levelYearsEmployed: "" })}
            className="bg-blue-50 text-blue-600 hover:bg-blue-100"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Dependent
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

