"use client"

import type { Control } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

interface WorkInformationSectionProps {
  control: Control<any>
}

export function WorkInformationSection({ control }: WorkInformationSectionProps) {
  return (
    <Card className="border-2 border-black">
      <CardHeader className="bg-gray-100 py-2">
        <CardTitle className="text-center font-bold text-sm">WORK INFORMATION</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="border-collapse">
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
                name="borrowerEmployerName"
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
                name="borrowerBusinessName"
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
                name="borrowerOfficeAddress"
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
                name="borrowerBusinessAddress"
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
                name="borrowerNatureOfBusiness"
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
                name="borrowerBusinessNature"
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
                name="borrowerTelephoneNos"
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
                name="borrowerBusinessPhone"
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
                name="borrowerPosition"
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
                name="borrowerBusinessPosition"
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
                name="borrowerYearsInEmployment"
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
                name="borrowerYearsInBusiness"
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
                  name="borrowerTin"
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
                  name="borrowerSssGsis"
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
                name="borrowerPreviousEmployer"
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
                  name="borrowerDtiRegistration"
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
                  name="borrowerSecRegistration"
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
      </CardContent>
    </Card>
  )
}
