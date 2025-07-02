"use client"

import { useWatch, type Control } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from 'lucide-react'

interface BorrowerInformationSectionProps {
  control: Control<any>
}

export function BorrowerInformationSection({ control }: BorrowerInformationSectionProps) {
  const sourcesOfFunds = useWatch({ control, name: "sourcesOfFunds" })

  return (
    <Card className="border-2 border-black">
      <CardHeader className="bg-gray-100">
        <CardTitle className="text-center font-bold">BORROWER'S INFORMATION</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-4">COMPLETE NAME</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FormField
                control={control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="middleName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Middle Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="extensionName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Extension Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={control}
              name="birthDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>BIRTHDATE</FormLabel>
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
                          {field.value ? format(field.value, "MM/dd/yyyy") : <span>Select date</span>}
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
              name="birthPlace"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>BIRTHPLACE:</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NATIONALITY:</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={control}
              name="numberOfDependents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel># OF DEPENDENTS</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="cpNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CP #:</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="civilStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CIVIL STATUS:</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>EMAIL ADDRESS:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="fbAccount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FB ACCOUNT:</FormLabel>
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
              name="educationalAttainment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>HIGHEST EDUCATIONAL ATTAINMENT:</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="mothersMaidenName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>MOTHER'S MAIDEN NAME:</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Sources of Funds */}
          <div>
            <FormField
              control={control}
              name="sourcesOfFunds"
              render={() => (
                <FormItem>
                  <FormLabel className="font-bold">SOURCES OF FUNDS (Pls check)</FormLabel>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                    {["Salary", "Business", "Remittance", "Others"].map((item) => (
                      <FormField
                        key={item}
                        control={control}
                        name="sourcesOfFunds"
                        render={({ field }) => {
                          return (
                            <FormItem key={item} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(field.value?.filter((value: string) => value !== item))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{item}</FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            {sourcesOfFunds?.includes("Others") && (
              <FormField
                control={control}
                name="otherSourceSpecify"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel className="text-sm text-gray-600 italic ml-6">(Please specify)</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
