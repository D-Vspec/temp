"use client"

import type { Control } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

interface SpouseInformationSectionProps {
  control: Control<any>
}

export function SpouseInformationSection({ control }: SpouseInformationSectionProps) {
  return (
    <Card className="border-2 border-black">
      <CardHeader className="bg-gray-100">
        <CardTitle className="text-center font-bold">SPOUSE INFORMATION</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={control}
              name="spouseName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>COMPLETE NAME:</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="spouseNationality"
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
              name="spouseBirthPlace"
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
              name="spouseBirthDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>BIRTHDATE:</FormLabel>
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
              name="spouseMothersMaidenName"
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

          {/* Spouse Work Information Table */}
          <div className="mt-8">
            <h3 className="font-bold mb-4 text-center">WORK INFORMATION</h3>
            <div className="border-collapse border-2 border-black">
              {/* Header row */}
              <div className="grid grid-cols-3 border-b border-black">
                <div className="border-r border-black bg-gray-100 p-2"></div>
                <div className="border-r border-black bg-gray-100 p-2 text-center font-bold text-sm">EMPLOYED</div>
                <div className="bg-gray-100 p-2 text-center font-bold text-sm">SELF-EMPLOYED / BUSINESS</div>
              </div>

              {/* Employer's/ Business Name */}
              <div className="grid grid-cols-3 border-b border-black min-h-[40px]">
                <div className="border-r border-black p-2 bg-gray-50 font-medium text-sm flex items-center">
                  Employer's/ Business Name
                </div>
                <div className="border-r border-black p-1">
                  <FormField
                    control={control}
                    name="spouseEmployerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="border-0 bg-transparent p-1 text-sm min-h-[32px] resize-none"
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
                <div className="p-1">
                  <FormField
                    control={control}
                    name="spouseBusinessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="border-0 bg-transparent p-1 text-sm min-h-[32px] resize-none"
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
              </div>

              {/* Office/Business Address */}
              <div className="grid grid-cols-3 border-b border-black min-h-[40px]">
                <div className="border-r border-black p-2 bg-gray-50 font-medium text-sm flex items-center">
                  Office/Business Address
                </div>
                <div className="border-r border-black p-1">
                  <FormField
                    control={control}
                    name="spouseOfficeAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="border-0 bg-transparent p-1 text-sm min-h-[32px] resize-none"
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
                <div className="p-1">
                  <FormField
                    control={control}
                    name="spouseBusinessAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="border-0 bg-transparent p-1 text-sm min-h-[32px] resize-none"
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
              </div>

              {/* Nature of Business/ Industry */}
              <div className="grid grid-cols-3 border-b border-black min-h-[40px]">
                <div className="border-r border-black p-2 bg-gray-50 font-medium text-sm flex items-center">
                  Nature of Business/ Industry
                </div>
                <div className="border-r border-black p-1">
                  <FormField
                    control={control}
                    name="spouseNatureOfBusiness"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="border-0 bg-transparent p-1 text-sm min-h-[32px] resize-none"
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
                <div className="p-1">
                  <FormField
                    control={control}
                    name="spouseBusinessNature"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="border-0 bg-transparent p-1 text-sm min-h-[32px] resize-none"
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
              </div>

              {/* Telephone Nos. */}
              <div className="grid grid-cols-3 border-b border-black min-h-[40px]">
                <div className="border-r border-black p-2 bg-gray-50 font-medium text-sm flex items-center">
                  Telephone Nos.
                </div>
                <div className="border-r border-black p-1">
                  <FormField
                    control={control}
                    name="spouseTelephoneNos"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="border-0 bg-transparent p-1 text-sm min-h-[32px] resize-none"
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
                <div className="p-1">
                  <FormField
                    control={control}
                    name="spouseBusinessPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="border-0 bg-transparent p-1 text-sm min-h-[32px] resize-none"
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
              </div>

              {/* Position/Occupation */}
              <div className="grid grid-cols-3 border-b border-black min-h-[40px]">
                <div className="border-r border-black p-2 bg-gray-50 font-medium text-sm flex items-center">
                  Position/Occupation
                </div>
                <div className="border-r border-black p-1">
                  <FormField
                    control={control}
                    name="spousePosition"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="border-0 bg-transparent p-1 text-sm min-h-[32px] resize-none"
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
                <div className="p-1">
                  <FormField
                    control={control}
                    name="spouseBusinessPosition"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="border-0 bg-transparent p-1 text-sm min-h-[32px] resize-none"
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
              </div>

              {/* No. of Years in Employment/Business */}
              <div className="grid grid-cols-3 border-b border-black min-h-[40px]">
                <div className="border-r border-black p-2 bg-gray-50 font-medium text-sm flex items-center">
                  No. of Years in Employment/Business
                </div>
                <div className="border-r border-black p-1">
                  <FormField
                    control={control}
                    name="spouseYearsInEmployment"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="border-0 bg-transparent p-1 text-sm min-h-[32px] resize-none"
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
                <div className="p-1">
                  <FormField
                    control={control}
                    name="spouseYearsInBusiness"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="border-0 bg-transparent p-1 text-sm min-h-[32px] resize-none"
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
              </div>

              {/* Bottom section with TIN, SSS/GSIS on left, Previous Employer in middle, DTI, SEC on right */}
              <div className="grid grid-cols-3 border-b border-black min-h-[60px]">
                <div className="border-r border-black p-2 bg-gray-50">
                  <div className="space-y-2">
                    <FormField
                      control={control}
                      name="spouseTin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-medium">TIN</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="border-b border-black border-t-0 border-l-0 border-r-0 rounded-none bg-transparent p-1 text-sm min-h-[24px] resize-none"
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
                      name="spouseSssGsis"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-medium">SSS/GSIS No.</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="border-b border-black border-t-0 border-l-0 border-r-0 rounded-none bg-transparent p-1 text-sm min-h-[24px] resize-none"
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
                </div>
                <div className="border-r border-black p-2">
                  <FormField
                    control={control}
                    name="spousePreviousEmployer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium">
                          Previous Employer (if less than 2 years in current employment)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="border-b border-black border-t-0 border-l-0 border-r-0 rounded-none bg-transparent p-1 text-sm min-h-[24px] resize-none"
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
                <div className="p-2">
                  <div className="space-y-2">
                    <FormField
                      control={control}
                      name="spouseDtiRegistration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-medium">DTI Registration No.</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="border-b border-black border-t-0 border-l-0 border-r-0 rounded-none bg-transparent p-1 text-sm min-h-[24px] resize-none"
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
                      name="spouseSecRegistration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-medium">SEC Registration No.</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="border-b border-black border-t-0 border-l-0 border-r-0 rounded-none bg-transparent p-1 text-sm min-h-[24px] resize-none"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
