"use client"

import type { Control } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

interface PersonalInformationSectionProps {
  control: Control<any>
}

export function PersonalInformationSection({ control }: PersonalInformationSectionProps) {
  return (
    <Card className="border-2 border-black">
      <CardHeader className="bg-gray-100">
        <CardTitle className="text-center font-bold">PERSONAL INFORMATION</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Salutation and Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <FormField
              control={control}
              name="salutation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">SALUTATION</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mr" id="mr" />
                        <label htmlFor="mr" className="text-sm">
                          MR.
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ms" id="ms" />
                        <label htmlFor="ms" className="text-sm">
                          MS.
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="others" id="others" />
                        <label htmlFor="others" className="text-sm">
                          OTHERS
                        </label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">LAST NAME:</FormLabel>
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
                  <FormLabel className="font-bold">FIRST NAME:</FormLabel>
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
                  <FormLabel className="font-bold">MIDDLE NAME:</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">GENDER:</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <label htmlFor="male" className="text-sm">
                          MALE
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <label htmlFor="female" className="text-sm">
                          FEMALE
                        </label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FormField
              control={control}
              name="birthDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">BIRTHDATE:</FormLabel>
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
              name="placeOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">PLACE OF BIRTH:</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">HEIGHT:</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">CONTACT #:</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FormField
              control={control}
              name="numberOfDependents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">NO. OF DEPENDENTS:</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="maritalStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">MARITAL STATUS:</FormLabel>
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
            <FormField
              control={control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">NATIONALITY:</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">WEIGHT:</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Fourth Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FormField
              control={control}
              name="education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">EDUCATION:</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="spouseName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">SPOUSE NAME:</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="spouseBirthDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">BIRTHDATE:</FormLabel>
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
              name="spouseWork"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">WORK:</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Fifth Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FormField
              control={control}
              name="spouseMonthlyIncome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">MONTHLY INCOME:</FormLabel>
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
