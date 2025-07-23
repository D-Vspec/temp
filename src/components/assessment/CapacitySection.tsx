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
          render={({ field }) => {
            // Helper to check if 'other' is selected
            const hasOther = Array.isArray(field.value) && field.value.some(
              (v: any) => (typeof v === "string" && v === "other") || (typeof v === "object" && v?.value === "other")
            );
            
            // Helper to get the comment if present
            const otherComment = Array.isArray(field.value) 
              ? field.value.find((v: any) => typeof v === "object" && v?.value === "other")?.comment || ""
              : "";

            const updateFieldValue = (checked: boolean, optionValue: string) => {
              const currentValue = field.value || [];
              if (checked) {
                field.onChange([...currentValue, optionValue]);
              } else {
                field.onChange(currentValue.filter((v: any) => 
                  typeof v === "string" ? v !== optionValue : v?.value !== optionValue
                ));
              }
            };

            const updateOtherValue = (checked: boolean, comment: string = "") => {
              let currentValue = field.value || [];
              // Remove any existing 'other' entries
              currentValue = currentValue.filter(
                (v: any) => !(typeof v === "string" && v === "other") && !(typeof v === "object" && v?.value === "other")
              );
              
              if (checked) {
                field.onChange([...currentValue, { value: "other", comment }]);
              } else {
                field.onChange(currentValue);
              }
            };

            return (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Primary Source of Loan Repayment</FormLabel>
                <FormControl>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={field.value?.some((v: any) => 
                          (typeof v === "string" && v === "agriculture") || (typeof v === "object" && v?.value === "agriculture")
                        )}
                        onCheckedChange={(checked) => updateFieldValue(checked, "agriculture")}
                        id="primaryLoanRepayment-agriculture"
                      />
                      <Label htmlFor="primaryLoanRepayment-agriculture" className="cursor-pointer flex-1 text-sm">
                        From agriculture (fishing, livestock raising, gardening)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={field.value?.some((v: any) => 
                          (typeof v === "string" && v === "informal_business") || (typeof v === "object" && v?.value === "informal_business")
                        )}
                        onCheckedChange={(checked) => updateFieldValue(checked, "informal_business")}
                        id="primaryLoanRepayment-informal"
                      />
                      <Label htmlFor="primaryLoanRepayment-informal" className="cursor-pointer flex-1 text-sm">
                        Informal business/livelihood (buy & sell, Avon dealer, laundry, manicurist, numbers game collector, tricycle driver, habal-habal)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={field.value?.some((v: any) => 
                          (typeof v === "string" && v === "regular_income") || (typeof v === "object" && v?.value === "regular_income")
                        )}
                        onCheckedChange={(checked) => updateFieldValue(checked, "regular_income")}
                        id="primaryLoanRepayment-regular"
                      />
                      <Label htmlFor="primaryLoanRepayment-regular" className="cursor-pointer flex-1 text-sm">
                        Occupation or business with regular and stable income (e.g., tricycle or jeepney boundary driving, salary, rental income)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={field.value?.some((v: any) => 
                          (typeof v === "string" && v === "permanent_stall") || (typeof v === "object" && v?.value === "permanent_stall")
                        )}
                        onCheckedChange={(checked) => updateFieldValue(checked, "permanent_stall")}
                        id="primaryLoanRepayment-stall"
                      />
                      <Label htmlFor="primaryLoanRepayment-stall" className="cursor-pointer flex-1 text-sm">
                        Business with a permanent stall (e.g., sari-sari store, market stall, eatery)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={field.value?.some((v: any) => 
                          (typeof v === "string" && v === "registered_business") || (typeof v === "object" && v?.value === "registered_business")
                        )}
                        onCheckedChange={(checked) => updateFieldValue(checked, "registered_business")}
                        id="primaryLoanRepayment-registered"
                      />
                      <Label htmlFor="primaryLoanRepayment-registered" className="cursor-pointer flex-1 text-sm">
                        Business with a permanent stall that is legitimately registered with DTI and has a municipal license
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={hasOther}
                        onCheckedChange={(checked) => updateOtherValue(checked, otherComment)}
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
            );
          }}
        />

        <FormField
          control={control}
          name="otherLoanRepayment"
          render={({ field }) => {
            // Helper to check if 'other' is selected
            const hasOther = Array.isArray(field.value) && field.value.some(
              (v: any) => (typeof v === "string" && v === "other") || (typeof v === "object" && v?.value === "other")
            );
            
            // Helper to get the comment if present
            const otherComment = Array.isArray(field.value)
              ? field.value.find((v: any) => typeof v === "object" && v?.value === "other")?.comment || ""
              : "";

            const updateFieldValue = (checked: boolean, optionValue: string) => {
              const currentValue = field.value || [];
              if (checked) {
                field.onChange([...currentValue, optionValue]);
              } else {
                field.onChange(currentValue.filter((v: any) => 
                  typeof v === "string" ? v !== optionValue : v?.value !== optionValue
                ));
              }
            };

            const updateOtherValue = (checked: boolean, comment: string = "") => {
              let currentValue = field.value || [];
              // Remove any existing 'other' entries
              currentValue = currentValue.filter(
                (v: any) => !(typeof v === "string" && v === "other") && !(typeof v === "object" && v?.value === "other")
              );
              
              if (checked) {
                field.onChange([...currentValue, { value: "other", comment }]);
              } else {
                field.onChange(currentValue);
              }
            };

            return (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Other Sources of Loan Repayment</FormLabel>
                <FormControl>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={field.value?.some((v: any) => 
                          (typeof v === "string" && v === "pension_subsidy") || (typeof v === "object" && v?.value === "pension_subsidy")
                        )}
                        onCheckedChange={(checked) => updateFieldValue(checked, "pension_subsidy")}
                        id="otherLoanRepayment-pension"
                      />
                      <Label htmlFor="otherLoanRepayment-pension" className="cursor-pointer flex-1 text-sm">
                        Applicant receives pension or government subsidy (e.g., 4Ps)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={field.value?.some((v: any) => 
                          (typeof v === "string" && v === "sideline") || (typeof v === "object" && v?.value === "sideline")
                        )}
                        onCheckedChange={(checked) => updateFieldValue(checked, "sideline")}
                        id="otherLoanRepayment-sideline"
                      />
                      <Label htmlFor="otherLoanRepayment-sideline" className="cursor-pointer flex-1 text-sm">
                        Applicant has a sideline or side hustle
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={field.value?.some((v: any) => 
                          (typeof v === "string" && v === "land_income") || (typeof v === "object" && v?.value === "land_income")
                        )}
                        onCheckedChange={(checked) => updateFieldValue(checked, "land_income")}
                        id="otherLoanRepayment-land"
                      />
                      <Label htmlFor="otherLoanRepayment-land" className="cursor-pointer flex-1 text-sm">
                        Applicant earns income from land (coconut, rice, banana, or vegetable farming)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={field.value?.some((v: any) => 
                          (typeof v === "string" && v === "family_income") || (typeof v === "object" && v?.value === "family_income")
                        )}
                        onCheckedChange={(checked) => updateFieldValue(checked, "family_income")}
                        id="otherLoanRepayment-family"
                      />
                      <Label htmlFor="otherLoanRepayment-family" className="cursor-pointer flex-1 text-sm">
                        Applicant's spouse or child contributes income from informal or non-permanent work
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={field.value?.some((v: any) => 
                          (typeof v === "string" && v === "remittances") || (typeof v === "object" && v?.value === "remittances")
                        )}
                        onCheckedChange={(checked) => updateFieldValue(checked, "remittances")}
                        id="otherLoanRepayment-remittances"
                      />
                      <Label htmlFor="otherLoanRepayment-remittances" className="cursor-pointer flex-1 text-sm">
                        Applicant regularly receives remittances from parent, sibling, spouse, or child with a permanent/regular job
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <Checkbox
                        checked={hasOther}
                        onCheckedChange={(checked) => updateOtherValue(checked, otherComment)}
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
            );
          }}
        />
      </div>
    </FormSection>
  )
}