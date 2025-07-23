import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import FormSection from "./FormSection"
import { Control } from "react-hook-form"

interface CapacitySectionProps {
  control: Control<any>
}

export default function CapacitySection({ control }: CapacitySectionProps) {
  return (
    <FormSection title="CAPACITY ASSESSMENT" bgColor="bg-blue-50">
      <div className="space-y-6">
        <FormField
          control={control}
          name="primaryLoanRepayment"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Primary Source of Loan Repayment</FormLabel>
              <FormControl>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("agriculture")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "agriculture"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "agriculture"))
                        }
                      }}
                      id="primaryLoanRepayment-agriculture"
                    />
                    <Label htmlFor="primaryLoanRepayment-agriculture" className="cursor-pointer flex-1 text-sm">
                      From agriculture (fishing, livestock raising, gardening)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("informal_business")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "informal_business"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "informal_business"))
                        }
                      }}
                      id="primaryLoanRepayment-informal"
                    />
                    <Label htmlFor="primaryLoanRepayment-informal" className="cursor-pointer flex-1 text-sm">
                      Informal business/livelihood (buy & sell, Avon dealer, laundry, manicurist, numbers game collector, tricycle driver, habal-habal)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("regular_income")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "regular_income"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "regular_income"))
                        }
                      }}
                      id="primaryLoanRepayment-regular"
                    />
                    <Label htmlFor="primaryLoanRepayment-regular" className="cursor-pointer flex-1 text-sm">
                      Occupation or business with regular and stable income (e.g., tricycle or jeepney boundary driving, salary, rental income)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("permanent_stall")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "permanent_stall"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "permanent_stall"))
                        }
                      }}
                      id="primaryLoanRepayment-stall"
                    />
                    <Label htmlFor="primaryLoanRepayment-stall" className="cursor-pointer flex-1 text-sm">
                      Business with a permanent stall (e.g., sari-sari store, market stall, eatery)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("registered_business")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "registered_business"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "registered_business"))
                        }
                      }}
                      id="primaryLoanRepayment-registered"
                    />
                    <Label htmlFor="primaryLoanRepayment-registered" className="cursor-pointer flex-1 text-sm">
                      Business with a permanent stall that is legitimately registered with DTI and has a municipal license
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("other")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "other"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "other"))
                        }
                      }}
                      id="primaryLoanRepayment-other"
                    />
                    <Label htmlFor="primaryLoanRepayment-other" className="cursor-pointer flex-1 text-sm">
                      Other
                    </Label>
                  </div>
                  {field.value?.includes("other") && (
                    <div className="ml-6 mt-2">
                      <FormField
                        control={control}
                        name="primaryLoanRepaymentOtherComment"
                        render={({ field: commentField }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...commentField}
                                placeholder="Please specify..."
                                className="text-sm"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="otherLoanRepayment"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Other Sources of Loan Repayment</FormLabel>
              <FormControl>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("pension_subsidy")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "pension_subsidy"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "pension_subsidy"))
                        }
                      }}
                      id="otherLoanRepayment-pension"
                    />
                    <Label htmlFor="otherLoanRepayment-pension" className="cursor-pointer flex-1 text-sm">
                      Applicant receives pension or government subsidy (e.g., 4Ps)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("sideline")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "sideline"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "sideline"))
                        }
                      }}
                      id="otherLoanRepayment-sideline"
                    />
                    <Label htmlFor="otherLoanRepayment-sideline" className="cursor-pointer flex-1 text-sm">
                      Applicant has a sideline or side hustle
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("land_income")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "land_income"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "land_income"))
                        }
                      }}
                      id="otherLoanRepayment-land"
                    />
                    <Label htmlFor="otherLoanRepayment-land" className="cursor-pointer flex-1 text-sm">
                      Applicant earns income from land (coconut, rice, banana, or vegetable farming)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("family_income")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "family_income"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "family_income"))
                        }
                      }}
                      id="otherLoanRepayment-family"
                    />
                    <Label htmlFor="otherLoanRepayment-family" className="cursor-pointer flex-1 text-sm">
                      Applicant's spouse or child contributes income from informal or non-permanent work
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("remittances")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "remittances"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "remittances"))
                        }
                      }}
                      id="otherLoanRepayment-remittances"
                    />
                    <Label htmlFor="otherLoanRepayment-remittances" className="cursor-pointer flex-1 text-sm">
                      Applicant regularly receives remittances from parent, sibling, spouse, or child with a permanent/regular job
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("other")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "other"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "other"))
                        }
                      }}
                      id="otherLoanRepayment-other"
                    />
                    <Label htmlFor="otherLoanRepayment-other" className="cursor-pointer flex-1 text-sm">
                      Other
                    </Label>
                  </div>
                  {field.value?.includes("other") && (
                    <div className="ml-6 mt-2">
                      <FormField
                        control={control}
                        name="otherLoanRepaymentOtherComment"
                        render={({ field: commentField }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...commentField}
                                placeholder="Please specify..."
                                className="text-sm"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <FormField
          control={control}
          name="cashFlowAnalysis"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Result of Cash Flow Analysis</FormLabel>
              <FormControl>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("below_180")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "below_180"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "below_180"))
                        }
                      }}
                      id="cashFlowAnalysis-below"
                    />
                    <Label htmlFor="cashFlowAnalysis-below" className="cursor-pointer flex-1 text-sm">
                      Weekly cash flow is below ₱180.00
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("exactly_180")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "exactly_180"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "exactly_180"))
                        }
                      }}
                      id="cashFlowAnalysis-exactly"
                    />
                    <Label htmlFor="cashFlowAnalysis-exactly" className="cursor-pointer flex-1 text-sm">
                      Weekly cash flow is exactly ₱180.00
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("above_180")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "above_180"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "above_180"))
                        }
                      }}
                      id="cashFlowAnalysis-above"
                    />
                    <Label htmlFor="cashFlowAnalysis-above" className="cursor-pointer flex-1 text-sm">
                      Weekly cash flow is more than ₱180.00
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("sufficient")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "sufficient"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "sufficient"))
                        }
                      }}
                      id="cashFlowAnalysis-sufficient"
                    />
                    <Label htmlFor="cashFlowAnalysis-sufficient" className="cursor-pointer flex-1 text-sm">
                      Cash flow is sufficient or matches the desired weekly loan installment
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("exceeds")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "exceeds"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "exceeds"))
                        }
                      }}
                      id="cashFlowAnalysis-exceeds"
                    />
                    <Label htmlFor="cashFlowAnalysis-exceeds" className="cursor-pointer flex-1 text-sm">
                      Cash flow exceeds the desired weekly loan installment
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("other")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "other"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "other"))
                        }
                      }}
                      id="cashFlowAnalysis-other"
                    />
                    <Label htmlFor="cashFlowAnalysis-other" className="cursor-pointer flex-1 text-sm">
                      Other
                    </Label>
                  </div>
                  {field.value?.includes("other") && (
                    <div className="ml-6 mt-2">
                      <FormField
                        control={control}
                        name="cashFlowAnalysisOtherComment"
                        render={({ field: commentField }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...commentField}
                                placeholder="Please specify..."
                                className="text-sm"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="forcedSavings"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Amount of Forced Savings</FormLabel>
              <FormControl>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("no_savings")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "no_savings"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "no_savings"))
                        }
                      }}
                      id="forcedSavings-none"
                    />
                    <Label htmlFor="forcedSavings-none" className="cursor-pointer flex-1 text-sm">
                      No forced savings
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("5_to_10_percent")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "5_to_10_percent"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "5_to_10_percent"))
                        }
                      }}
                      id="forcedSavings-5-10"
                    />
                    <Label htmlFor="forcedSavings-5-10" className="cursor-pointer flex-1 text-sm">
                      Forced savings is 5%–10% of the loan amount
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("11_to_20_percent")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "11_to_20_percent"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "11_to_20_percent"))
                        }
                      }}
                      id="forcedSavings-11-20"
                    />
                    <Label htmlFor="forcedSavings-11-20" className="cursor-pointer flex-1 text-sm">
                      Forced savings is 11%–20% of the loan amount
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("21_to_35_percent")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "21_to_35_percent"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "21_to_35_percent"))
                        }
                      }}
                      id="forcedSavings-21-35"
                    />
                    <Label htmlFor="forcedSavings-21-35" className="cursor-pointer flex-1 text-sm">
                      Forced savings is 21%–35% of the loan amount
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("above_35_percent")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "above_35_percent"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "above_35_percent"))
                        }
                      }}
                      id="forcedSavings-above-35"
                    />
                    <Label htmlFor="forcedSavings-above-35" className="cursor-pointer flex-1 text-sm">
                      Forced savings is more than 35% of the loan amount
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                    <Checkbox
                      checked={field.value?.includes("other")}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || []
                        if (checked) {
                          field.onChange([...currentValue, "other"])
                        } else {
                          field.onChange(currentValue.filter((v: string) => v !== "other"))
                        }
                      }}
                      id="forcedSavings-other"
                    />
                    <Label htmlFor="forcedSavings-other" className="cursor-pointer flex-1 text-sm">
                      Other
                    </Label>
                  </div>
                  {field.value?.includes("other") && (
                    <div className="ml-6 mt-2">
                      <FormField
                        control={control}
                        name="forcedSavingsOtherComment"
                        render={({ field: commentField }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...commentField}
                                placeholder="Please specify..."
                                className="text-sm"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
      </div>
    </FormSection>
  )
}