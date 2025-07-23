import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import FormSection from "./FormSection"
import { Control } from "react-hook-form"

interface RecordSectionProps {
  control: Control<any>
}

export default function RecordSection({ control }: RecordSectionProps) {
  return (
    <FormSection title="RECORD ASSESSMENT" bgColor="bg-yellow-50">
      <div className="space-y-6">
        <FormField
          control={control}
          name="timeInProgram"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Time in Program</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="1" id="timeInProgram-1" />
                      <Label htmlFor="timeInProgram-1" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">1</span> - 2nd cycle or earlier
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="2" id="timeInProgram-2" />
                      <Label htmlFor="timeInProgram-2" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">2</span> - 3rd to 4th cycle
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="3" id="timeInProgram-3" />
                      <Label htmlFor="timeInProgram-3" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">3</span> - 5th to 6th cycle
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="4" id="timeInProgram-4" />
                      <Label htmlFor="timeInProgram-4" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">4</span> - 7th to 8th cycle
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="5" id="timeInProgram-5" />
                      <Label htmlFor="timeInProgram-5" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">5</span> - 9th cycle and beyond
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="centerCollectionRecord"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Center Collection Record</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="1" id="centerCollectionRecord-1" />
                      <Label htmlFor="centerCollectionRecord-1" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">1</span> - Weekly payments not completed
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="2" id="centerCollectionRecord-2" />
                      <Label htmlFor="centerCollectionRecord-2" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">2</span> - Payments incomplete on due date but completed within the week
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="3" id="centerCollectionRecord-3" />
                      <Label htmlFor="centerCollectionRecord-3" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">3</span> - Payments completed but more than 2 hours late or after AD follow-up
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="4" id="centerCollectionRecord-4" />
                      <Label htmlFor="centerCollectionRecord-4" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">4</span> - Payments completed on time
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="5" id="centerCollectionRecord-5" />
                      <Label htmlFor="centerCollectionRecord-5" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">5</span> - Payments completed within schedule promptly
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="paymentHistory"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Payment History</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="1" id="paymentHistory-1" />
                      <Label htmlFor="paymentHistory-1" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">1</span> - No weekly payments and not covered by other members
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="2" id="paymentHistory-2" />
                      <Label htmlFor="paymentHistory-2" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">2</span> - 1–2 red marks in passbook
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="3" id="paymentHistory-3" />
                      <Label htmlFor="paymentHistory-3" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">3</span> - Covered by center within time
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="4" id="paymentHistory-4" />
                      <Label htmlFor="paymentHistory-4" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">4</span> - Weekly contributions are up to date
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="5" id="paymentHistory-5" />
                      <Label htmlFor="paymentHistory-5" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">5</span> - Personally pays on time
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="numberOfLendingGroups"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Number of Lending Groups</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="1" id="numberOfLendingGroups-1" />
                      <Label htmlFor="numberOfLendingGroups-1" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">1</span> - Member of more than 4 loan groups
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="2" id="numberOfLendingGroups-2" />
                      <Label htmlFor="numberOfLendingGroups-2" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">2</span> - No experience with any loan group
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="3" id="numberOfLendingGroups-3" />
                      <Label htmlFor="numberOfLendingGroups-3" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">3</span> - Member of 3 to 4 loan groups
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="4" id="numberOfLendingGroups-4" />
                      <Label htmlFor="numberOfLendingGroups-4" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">4</span> - Spouse is a member of another loan group
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="5" id="numberOfLendingGroups-5" />
                      <Label htmlFor="numberOfLendingGroups-5" className="cursor-pointer flex-1 text-sm">
                        <span className="font-medium text-blue-600">5</span> - Member of 1 to 2 loan groups
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </FormSection>
  )
}