import { RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import FormSection from "./FormSection"
import ScoreOption from "./ScoreOption"
import { AssessmentData } from "@/types/client"

interface CenterStatusSectionProps {
  assessmentData: AssessmentData
  onAssessmentChange: (field: keyof AssessmentData, value: string) => void
}

export default function CenterStatusSection({ assessmentData, onAssessmentChange }: CenterStatusSectionProps) {
  return (
    <FormSection title="CENTER STATUS ASSESSMENT" bgColor="bg-purple-50">
      <div className="space-y-6">
        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Number of Center Members</Label>
          <RadioGroup value={assessmentData.numberOfCenterMembers} onValueChange={(value) => onAssessmentChange('numberOfCenterMembers', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="5 to 10 members" field="numberOfCenterMembers" />
              <ScoreOption value="2" label="11 to 15 members" field="numberOfCenterMembers" />
              <ScoreOption value="3" label="26 or more members" field="numberOfCenterMembers" />
              <ScoreOption value="4" label="16 to 20 members" field="numberOfCenterMembers" />
              <ScoreOption value="5" label="21 to 25 members" field="numberOfCenterMembers" />
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Attendance to Monthly/Quarterly Meetings (past 6 months)</Label>
          <RadioGroup value={assessmentData.attendanceToMeetings} onValueChange={(value) => onAssessmentChange('attendanceToMeetings', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="Attended once in 6 months" field="attendanceToMeetings" />
              <ScoreOption value="2" label="Attended twice in 6 months" field="attendanceToMeetings" />
              <ScoreOption value="3" label="Attended 3 times in 6 months" field="attendanceToMeetings" />
              <ScoreOption value="4" label="Attended 4 times in 6 months" field="attendanceToMeetings" />
              <ScoreOption value="5" label="Attended 5 or more times in 6 months" field="attendanceToMeetings" />
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Program Benefits Received</Label>
          <RadioGroup value={assessmentData.programBenefitsReceived} onValueChange={(value) => onAssessmentChange('programBenefitsReceived', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="No benefits received" field="programBenefitsReceived" />
              <ScoreOption value="2" label="Received only one benefit" field="programBenefitsReceived" />
              <ScoreOption value="3" label="Received two or more benefits" field="programBenefitsReceived" />
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Years in Program</Label>
          <RadioGroup value={assessmentData.yearsInProgram} onValueChange={(value) => onAssessmentChange('yearsInProgram', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="2 years or less" field="yearsInProgram" />
              <ScoreOption value="2" label="3 to 4 years" field="yearsInProgram" />
              <ScoreOption value="3" label="5 to 6 years" field="yearsInProgram" />
              <ScoreOption value="4" label="6 to 7 years" field="yearsInProgram" />
              <ScoreOption value="5" label="8 years or more" field="yearsInProgram" />
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Pastdue Ratio</Label>
          <RadioGroup value={assessmentData.pastdueRatio} onValueChange={(value) => onAssessmentChange('pastdueRatio', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="4% or higher" field="pastdueRatio" />
              <ScoreOption value="2" label="3%" field="pastdueRatio" />
              <ScoreOption value="3" label="2%" field="pastdueRatio" />
              <ScoreOption value="4" label="1%" field="pastdueRatio" />
              <ScoreOption value="5" label="0% (no past due)" field="pastdueRatio" />
            </div>
          </RadioGroup>
        </div>
      </div>
    </FormSection>
  )
}
