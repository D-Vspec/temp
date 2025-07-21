import { RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import FormSection from "./FormSection"
import ScoreOption from "./ScoreOption"
import { AssessmentData } from "@/types/client"

interface RecordSectionProps {
  assessmentData: AssessmentData
  onAssessmentChange: (field: keyof AssessmentData, value: string) => void
}

export default function RecordSection({ assessmentData, onAssessmentChange }: RecordSectionProps) {
  return (
    <FormSection title="RECORD ASSESSMENT" bgColor="bg-yellow-50">
      <div className="space-y-6">
        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Time in Program</Label>
          <RadioGroup value={assessmentData.timeInProgram} onValueChange={(value) => onAssessmentChange('timeInProgram', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="2nd cycle or earlier" field="timeInProgram" />
              <ScoreOption value="2" label="3rd to 4th cycle" field="timeInProgram" />
              <ScoreOption value="3" label="5th to 6th cycle" field="timeInProgram" />
              <ScoreOption value="4" label="7th to 8th cycle" field="timeInProgram" />
              <ScoreOption value="5" label="9th cycle and beyond" field="timeInProgram" />
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Center Collection Record</Label>
          <RadioGroup value={assessmentData.centerCollectionRecord} onValueChange={(value) => onAssessmentChange('centerCollectionRecord', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="Weekly payments not completed" field="centerCollectionRecord" />
              <ScoreOption value="2" label="Payments incomplete on due date but completed within the week" field="centerCollectionRecord" />
              <ScoreOption value="3" label="Payments completed but more than 2 hours late or after AD follow-up" field="centerCollectionRecord" />
              <ScoreOption value="4" label="Payments completed on time" field="centerCollectionRecord" />
              <ScoreOption value="5" label="Payments completed within schedule promptly" field="centerCollectionRecord" />
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Payment History</Label>
          <RadioGroup value={assessmentData.paymentHistory} onValueChange={(value) => onAssessmentChange('paymentHistory', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="No weekly payments and not covered by other members" field="paymentHistory" />
              <ScoreOption value="2" label="1–2 red marks in passbook" field="paymentHistory" />
              <ScoreOption value="3" label="Covered by center within time" field="paymentHistory" />
              <ScoreOption value="4" label="Weekly contributions are up to date" field="paymentHistory" />
              <ScoreOption value="5" label="Personally pays on time" field="paymentHistory" />
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Number of Lending Groups</Label>
          <RadioGroup value={assessmentData.numberOfLendingGroups} onValueChange={(value) => onAssessmentChange('numberOfLendingGroups', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="Member of more than 4 loan groups" field="numberOfLendingGroups" />
              <ScoreOption value="2" label="No experience with any loan group" field="numberOfLendingGroups" />
              <ScoreOption value="3" label="Member of 3 to 4 loan groups" field="numberOfLendingGroups" />
              <ScoreOption value="4" label="Spouse is a member of another loan group" field="numberOfLendingGroups" />
              <ScoreOption value="5" label="Member of 1 to 2 loan groups" field="numberOfLendingGroups" />
            </div>
          </RadioGroup>
        </div>
      </div>
    </FormSection>
  )
}
