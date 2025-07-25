"use client"

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import FormSection from "./FormSection"
import type { Control, FieldValues } from "react-hook-form"

// Define types for the form values
type OptionValue = string | { value: string; comment: string }

interface FormData extends FieldValues {
  primaryLoanRepayment: OptionValue[]
  otherLoanRepayment: OptionValue[]
}

interface CapacitySectionProps {
  control: Control<FormData>
}

// Type guard to check if value is an object with value and comment
const isObjectValue = (value: any): value is { value: string; comment: string } => {
  return typeof value === "object" && value !== null && "value" in value && "comment" in value
}

// Type guard to check if value is a string
const isStringValue = (value: any): value is string => {
  return typeof value === "string"
}

export default function CapacitySection({ control }: CapacitySectionProps) {
  return (
    <FormSection title="CAPACITY ASSESSMENT" bgColor="bg-blue-50">
      <div className="space-y-6">
        <FormField
          control={control}
          name="primaryLoanRepayment"
          render={({ field }) => {
            const fieldValue = Array.isArray(field.value) ? field.value : []

            // Helper to check if 'other' is selected
            const hasOther = fieldValue.some(
              (v: OptionValue) => (isStringValue(v) && v === "other") || (isObjectValue(v) && v.value === "other"),
            )

            // Helper to get the comment if present
            const otherItem = fieldValue.find((v: OptionValue) => isObjectValue(v) && v.value === "other")
            const otherComment = isObjectValue(otherItem) ? otherItem.comment : ""

            const updateFieldValue = (checked: boolean, optionValue: string) => {
              const currentValue = fieldValue
              if (checked) {
                field.onChange([...currentValue, optionValue])
              } else {
                field.onChange(
                  currentValue.filter((v: OptionValue) =>
                    isStringValue(v) ? v !== optionValue : v.value !== optionValue,
                  ),
                )
              }
            }

            const updateOtherValue = (checked: boolean, comment = "") => {
              let currentValue = fieldValue
              // Remove any existing 'other' entries
              currentValue = currentValue.filter(
                (v: OptionValue) => !(isStringValue(v) && v === "other") && !(isObjectValue(v) && v.value === "other"),
              )

              if (checked) {
                field.onChange([...currentValue, { value: "other", comment }])
              } else {
                field.onChange(currentValue)
              }
            }

            const isOptionChecked = (optionValue: string) => {
              return fieldValue.some(
                (v: OptionValue) =>
                  (isStringValue(v) && v === optionValue) || (isObjectValue(v) && v.value === optionValue),
              )
            }

            return (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">
                  Primary Source of Loan Repayment
                </FormLabel>
                <FormControl>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={isOptionChecked("agriculture")}
                        onCheckedChange={(checked) => updateFieldValue(Boolean(checked), "agriculture")}
                        id="primaryLoanRepayment-agriculture"
                      />
                      <Label htmlFor="primaryLoanRepayment-agriculture" className="cursor-pointer flex-1 text-sm">
                        From agriculture (fishing, livestock raising, gardening)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={isOptionChecked("informal_business")}
                        onCheckedChange={(checked) => updateFieldValue(Boolean(checked), "informal_business")}
                        id="primaryLoanRepayment-informal"
                      />
                      <Label htmlFor="primaryLoanRepayment-informal" className="cursor-pointer flex-1 text-sm">
                        Informal business/livelihood (buy & sell, Avon dealer, laundry, manicurist, numbers game
                        collector, tricycle driver, habal-habal)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={isOptionChecked("regular_income")}
                        onCheckedChange={(checked) => updateFieldValue(Boolean(checked), "regular_income")}
                        id="primaryLoanRepayment-regular"
                      />
                      <Label htmlFor="primaryLoanRepayment-regular" className="cursor-pointer flex-1 text-sm">
                        Occupation or business with regular and stable income (e.g., tricycle or jeepney boundary
                        driving, salary, rental income)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={isOptionChecked("permanent_stall")}
                        onCheckedChange={(checked) => updateFieldValue(Boolean(checked), "permanent_stall")}
                        id="primaryLoanRepayment-stall"
                      />
                      <Label htmlFor="primaryLoanRepayment-stall" className="cursor-pointer flex-1 text-sm">
                        Business with a permanent stall (e.g., sari-sari store, market stall, eatery)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={isOptionChecked("registered_business")}
                        onCheckedChange={(checked) => updateFieldValue(Boolean(checked), "registered_business")}
                        id="primaryLoanRepayment-registered"
                      />
                      <Label htmlFor="primaryLoanRepayment-registered" className="cursor-pointer flex-1 text-sm">
                        Business with a permanent stall that is legitimately registered with DTI and has a municipal
                        license
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={hasOther}
                        onCheckedChange={(checked) => updateOtherValue(Boolean(checked), otherComment)}
                        id="primaryLoanRepayment-other"
                      />
                      <Label htmlFor="primaryLoanRepayment-other" className="cursor-pointer flex-1 text-sm">
                        Other
                      </Label>
                    </div>

                    {hasOther && (
                      <div className="ml-6 mt-2">
                        <Input
                          value={otherComment}
                          placeholder="Please specify..."
                          className="text-sm"
                          onChange={(e) => updateOtherValue(true, e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <FormField
          control={control}
          name="otherLoanRepayment"
          render={({ field }) => {
            const fieldValue = Array.isArray(field.value) ? field.value : []

            // Helper to check if 'other' is selected
            const hasOther = fieldValue.some(
              (v: OptionValue) => (isStringValue(v) && v === "other") || (isObjectValue(v) && v.value === "other"),
            )

            // Helper to get the comment if present
            const otherItem = fieldValue.find((v: OptionValue) => isObjectValue(v) && v.value === "other")
            const otherComment = isObjectValue(otherItem) ? otherItem.comment : ""

            const updateFieldValue = (checked: boolean, optionValue: string) => {
              const currentValue = fieldValue
              if (checked) {
                field.onChange([...currentValue, optionValue])
              } else {
                field.onChange(
                  currentValue.filter((v: OptionValue) =>
                    isStringValue(v) ? v !== optionValue : v.value !== optionValue,
                  ),
                )
              }
            }

            const updateOtherValue = (checked: boolean, comment = "") => {
              let currentValue = fieldValue
              // Remove any existing 'other' entries
              currentValue = currentValue.filter(
                (v: OptionValue) => !(isStringValue(v) && v === "other") && !(isObjectValue(v) && v.value === "other"),
              )

              if (checked) {
                field.onChange([...currentValue, { value: "other", comment }])
              } else {
                field.onChange(currentValue)
              }
            }

            const isOptionChecked = (optionValue: string) => {
              return fieldValue.some(
                (v: OptionValue) =>
                  (isStringValue(v) && v === optionValue) || (isObjectValue(v) && v.value === optionValue),
              )
            }

            return (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">
                  Other Sources of Loan Repayment
                </FormLabel>
                <FormControl>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={isOptionChecked("pension_subsidy")}
                        onCheckedChange={(checked) => updateFieldValue(Boolean(checked), "pension_subsidy")}
                        id="otherLoanRepayment-pension"
                      />
                      <Label htmlFor="otherLoanRepayment-pension" className="cursor-pointer flex-1 text-sm">
                        Applicant receives pension or government subsidy (e.g., 4Ps)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={isOptionChecked("sideline")}
                        onCheckedChange={(checked) => updateFieldValue(Boolean(checked), "sideline")}
                        id="otherLoanRepayment-sideline"
                      />
                      <Label htmlFor="otherLoanRepayment-sideline" className="cursor-pointer flex-1 text-sm">
                        Applicant has a sideline or side hustle
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={isOptionChecked("land_income")}
                        onCheckedChange={(checked) => updateFieldValue(Boolean(checked), "land_income")}
                        id="otherLoanRepayment-land"
                      />
                      <Label htmlFor="otherLoanRepayment-land" className="cursor-pointer flex-1 text-sm">
                        Applicant earns income from land (coconut, rice, banana, or vegetable farming)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={isOptionChecked("family_income")}
                        onCheckedChange={(checked) => updateFieldValue(Boolean(checked), "family_income")}
                        id="otherLoanRepayment-family"
                      />
                      <Label htmlFor="otherLoanRepayment-family" className="cursor-pointer flex-1 text-sm">
                        Applicant's spouse or child contributes income from informal or non-permanent work
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={isOptionChecked("remittances")}
                        onCheckedChange={(checked) => updateFieldValue(Boolean(checked), "remittances")}
                        id="otherLoanRepayment-remittances"
                      />
                      <Label htmlFor="otherLoanRepayment-remittances" className="cursor-pointer flex-1 text-sm">
                        Applicant regularly receives remittances from parent, sibling, spouse, or child with a
                        permanent/regular job
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={hasOther}
                        onCheckedChange={(checked) => updateOtherValue(Boolean(checked), otherComment)}
                        id="otherLoanRepayment-other"
                      />
                      <Label htmlFor="otherLoanRepayment-other" className="cursor-pointer flex-1 text-sm">
                        Other
                      </Label>
                    </div>

                    {hasOther && (
                      <div className="ml-6 mt-2">
                        <Input
                          value={otherComment}
                          placeholder="Please specify..."
                          className="text-sm"
                          onChange={(e) => updateOtherValue(true, e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />
      </div>
    </FormSection>
  )
}
