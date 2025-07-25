import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import FormSection from "./FormSection"
import { Control } from "react-hook-form"

interface CenterStatusSectionProps {
  control: Control<any>
}

export default function CenterStatusSection({ control }: CenterStatusSectionProps) {
  return (
    <FormSection title="CENTER STATUS ASSESSMENT" bgColor="bg-purple-50">
      <div className="space-y-6">
        <FormField
          control={control}
          name="numberOfCenterMembers"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Number of Center Members</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="1" id="numberOfCenterMembers-1" />
                      <Label htmlFor="numberOfCenterMembers-1" className="cursor-pointer flex-1 text-sm">
                        5 to 10 members
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="2" id="numberOfCenterMembers-2" />
                      <Label htmlFor="numberOfCenterMembers-2" className="cursor-pointer flex-1 text-sm">
                        11 to 15 members
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="3" id="numberOfCenterMembers-3" />
                      <Label htmlFor="numberOfCenterMembers-3" className="cursor-pointer flex-1 text-sm">
                        26 or more members
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="4" id="numberOfCenterMembers-4" />
                      <Label htmlFor="numberOfCenterMembers-4" className="cursor-pointer flex-1 text-sm">
                        16 to 20 members
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="5" id="numberOfCenterMembers-5" />
                      <Label htmlFor="numberOfCenterMembers-5" className="cursor-pointer flex-1 text-sm">
                        21 to 25 members
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
          name="attendanceToMeetings"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Attendance to Monthly/Quarterly Meetings (past 6 months)</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="1" id="attendanceToMeetings-1" />
                      <Label htmlFor="attendanceToMeetings-1" className="cursor-pointer flex-1 text-sm">
                        Attended once in 6 months
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="2" id="attendanceToMeetings-2" />
                      <Label htmlFor="attendanceToMeetings-2" className="cursor-pointer flex-1 text-sm">
                        Attended twice in 6 months
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="3" id="attendanceToMeetings-3" />
                      <Label htmlFor="attendanceToMeetings-3" className="cursor-pointer flex-1 text-sm">
                        Attended 3 times in 6 months
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="4" id="attendanceToMeetings-4" />
                      <Label htmlFor="attendanceToMeetings-4" className="cursor-pointer flex-1 text-sm">
                        Attended 4 times in 6 months
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="5" id="attendanceToMeetings-5" />
                      <Label htmlFor="attendanceToMeetings-5" className="cursor-pointer flex-1 text-sm">
                        Attended 5 or more times in 6 months
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
          name="programBenefitsReceived"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Program Benefits Received</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="1" id="programBenefitsReceived-1" />
                      <Label htmlFor="programBenefitsReceived-1" className="cursor-pointer flex-1 text-sm">
                        No benefits received
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="2" id="programBenefitsReceived-2" />
                      <Label htmlFor="programBenefitsReceived-2" className="cursor-pointer flex-1 text-sm">
                        Received only one benefit
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="3" id="programBenefitsReceived-3" />
                      <Label htmlFor="programBenefitsReceived-3" className="cursor-pointer flex-1 text-sm">
                        Received two or more benefits
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
          name="yearsInProgram"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Years in Program</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="1" id="yearsInProgram-1" />
                      <Label htmlFor="yearsInProgram-1" className="cursor-pointer flex-1 text-sm">
                        2 years or less
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="2" id="yearsInProgram-2" />
                      <Label htmlFor="yearsInProgram-2" className="cursor-pointer flex-1 text-sm">
                        3 to 4 years
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="3" id="yearsInProgram-3" />
                      <Label htmlFor="yearsInProgram-3" className="cursor-pointer flex-1 text-sm">
                        5 to 6 years
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="4" id="yearsInProgram-4" />
                      <Label htmlFor="yearsInProgram-4" className="cursor-pointer flex-1 text-sm">
                        6 to 7 years
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="5" id="yearsInProgram-5" />
                      <Label htmlFor="yearsInProgram-5" className="cursor-pointer flex-1 text-sm">
                        8 years or more
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
          name="pastdueRatio"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">Pastdue Ratio</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="1" id="pastdueRatio-1" />
                      <Label htmlFor="pastdueRatio-1" className="cursor-pointer flex-1 text-sm">
                        4% or higher
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="2" id="pastdueRatio-2" />
                      <Label htmlFor="pastdueRatio-2" className="cursor-pointer flex-1 text-sm">
                        3%
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="3" id="pastdueRatio-3" />
                      <Label htmlFor="pastdueRatio-3" className="cursor-pointer flex-1 text-sm">
                        2%
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="4" id="pastdueRatio-4" />
                      <Label htmlFor="pastdueRatio-4" className="cursor-pointer flex-1 text-sm">
                        1%
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                      <RadioGroupItem value="5" id="pastdueRatio-5" />
                      <Label htmlFor="pastdueRatio-5" className="cursor-pointer flex-1 text-sm">
                        0% (no past due)
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