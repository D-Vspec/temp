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
import { CalendarIcon } from "lucide-react"

interface PersonalInformationSectionProps {
  control?: Control<any>
  data?: any
  readOnly?: boolean
}

export function PersonalInformationSection({ control, data, readOnly = false }: PersonalInformationSectionProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A"
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    } catch {
      return "Invalid Date"
    }
  }

  // If readOnly is true or we only have data without control, render the static view
  if (readOnly || (data && !control)) {
    return (
      <Card className="border-2 border-black max-w-6xl mx-auto">
        <CardHeader className="bg-gray-100">
          <CardTitle className="text-center font-bold text-lg">PERSONAL INFORMATION</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Salutation and Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div>
                <label className="font-bold text-sm block mb-2">SALUTATION</label>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      checked={data?.salutation === "mr"} 
                      readOnly 
                      className="h-4 w-4"
                    />
                    <span className="text-sm">MR.</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      checked={data?.salutation === "ms"} 
                      readOnly 
                      className="h-4 w-4"
                    />
                    <span className="text-sm">MS.</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      checked={data?.salutation === "others"} 
                      readOnly 
                      className="h-4 w-4"
                    />
                    <span className="text-sm">OTHERS</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="font-bold text-sm block mb-2">LAST NAME:</label>
                <div className="border-b-2 border-black pb-1">
                  <span className="text-sm">{data?.lastName || "N/A"}</span>
                </div>
              </div>
              
              <div>
                <label className="font-bold text-sm block mb-2">FIRST NAME:</label>
                <div className="border-b-2 border-black pb-1">
                  <span className="text-sm">{data?.firstName || "N/A"}</span>
                </div>
              </div>
              
              <div>
                <label className="font-bold text-sm block mb-2">MIDDLE NAME:</label>
                <div className="border-b-2 border-black pb-1">
                  <span className="text-sm">{data?.middleName || "N/A"}</span>
                </div>
              </div>
              
              <div>
                <label className="font-bold text-sm block mb-2">GENDER:</label>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      checked={data?.gender === "male"} 
                      readOnly 
                      className="h-4 w-4"
                    />
                    <span className="text-sm">MALE</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      checked={data?.gender === "female"} 
                      readOnly 
                      className="h-4 w-4"
                    />
                    <span className="text-sm">FEMALE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="font-bold text-sm block mb-2">BIRTHDATE:</label>
                <div className="border-b-2 border-black pb-1">
                  <span className="text-sm">{formatDate(data?.birthDate)}</span>
                </div>
              </div>
              
              <div>
                <label className="font-bold text-sm block mb-2">PLACE OF BIRTH:</label>
                <div className="border-b-2 border-black pb-1">
                  <span className="text-sm">{data?.placeOfBirth || "N/A"}</span>
                </div>
              </div>
              
              <div>
                <label className="font-bold text-sm block mb-2">HEIGHT:</label>
                <div className="border-b-2 border-black pb-1">
                  <span className="text-sm">{data?.height ? `${data.height} cm` : "N/A"}</span>
                </div>
              </div>
              
              <div>
                <label className="font-bold text-sm block mb-2">CONTACT #:</label>
                <div className="border-b-2 border-black pb-1">
                  <span className="text-sm">{data?.contactNumber || "N/A"}</span>
                </div>
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="font-bold text-sm block mb-2">NO. OF DEPENDENTS:</label>
                <div className="border-b-2 border-black pb-1">
                  <span className="text-sm">{data?.numberOfDependents || "N/A"}</span>
                </div>
              </div>
              
              <div>
                <label className="font-bold text-sm block mb-2">MARITAL STATUS:</label>
                <div className="border-b-2 border-black pb-1">
                  <span className="text-sm">{data?.maritalStatus?.charAt(0).toUpperCase() + data?.maritalStatus?.slice(1) || "N/A"}</span>
                </div>
              </div>
              
              <div>
                <label className="font-bold text-sm block mb-2">NATIONALITY:</label>
                <div className="border-b-2 border-black pb-1">
                  <span className="text-sm">{data?.nationality || "N/A"}</span>
                </div>
              </div>
              
              <div>
                <label className="font-bold text-sm block mb-2">WEIGHT:</label>
                <div className="border-b-2 border-black pb-1">
                  <span className="text-sm">{data?.weight ? `${data.weight} kg` : "N/A"}</span>
                </div>
              </div>
            </div>

            {/* Fourth Row - Spouse Information */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="font-bold text-sm block mb-2">EDUCATION:</label>
                <div className="border-b-2 border-black pb-1">
                  <span className="text-sm">{data?.education || "N/A"}</span>
                </div>
              </div>
              
              <div>
                <label className="font-bold text-sm block mb-2">SPOUSE NAME:</label>
                <div className="border-b-2 border-black pb-1">
                  <span className="text-sm">{data?.spouseName || "N/A"}</span>
                </div>
              </div>
              
              <div>
                <label className="font-bold text-sm block mb-2">SPOUSE BIRTHDATE:</label>
                <div className="border-b-2 border-black pb-1">
                  <span className="text-sm">{formatDate(data?.spouseBirthDate)}</span>
                </div>
              </div>
              
              <div>
                <label className="font-bold text-sm block mb-2">SPOUSE WORK:</label>
                <div className="border-b-2 border-black pb-1">
                  <span className="text-sm">{data?.spouseWork || "N/A"}</span>
                </div>
              </div>
            </div>

            {/* Fifth Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="font-bold text-sm block mb-2">SPOUSE MONTHLY INCOME:</label>
                <div className="border-b-2 border-black pb-1">
                  <span className="text-sm">{data?.spouseMonthlyIncome ? `₹${data.spouseMonthlyIncome}` : "N/A"}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // If we have form control, render the editable form
  if (control) {
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
                            {field.value ? formatDate(field.value.toISOString()) : <span>Select date</span>}
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
                            {field.value ? formatDate(field.value.toISOString()) : <span>Select date</span>}
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

  // Default empty state
  return (
    <Card className="border-2 border-black">
      <CardHeader className="bg-gray-100">
        <CardTitle className="text-center font-bold">PERSONAL INFORMATION</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="text-center text-gray-500">
          No data available
        </div>
      </CardContent>
    </Card>
  )
}