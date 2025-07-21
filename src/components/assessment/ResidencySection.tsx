import { RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import FormSection from "./FormSection"
import ScoreOption from "./ScoreOption"
import { AssessmentData } from "@/types/client"

interface ResidencySectionProps {
  assessmentData: AssessmentData
  onAssessmentChange: (field: keyof AssessmentData, value: string) => void
}

export default function ResidencySection({ assessmentData, onAssessmentChange }: ResidencySectionProps) {
  return (
    <FormSection title="RESIDENCY ASSESSMENT" bgColor="bg-green-50">
      <div className="space-y-6">
        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Length of Stay in Barangay</Label>
          <RadioGroup value={assessmentData.lengthOfStay} onValueChange={(value) => onAssessmentChange('lengthOfStay', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="Couple has lived in the barangay for 1–2 years" field="lengthOfStay" />
              <ScoreOption value="2" label="Couple has lived in the barangay for 3–5 years" field="lengthOfStay" />
              <ScoreOption value="3" label="Couple has lived in the barangay for more than 5 years" field="lengthOfStay" />
              <ScoreOption value="4" label="Spouse has lived in the barangay since childhood; spouse's parents, siblings, and relatives also reside there" field="lengthOfStay" />
              <ScoreOption value="5" label="Applicant has lived in the barangay since childhood; parents, siblings, and relatives also reside in same barangay" field="lengthOfStay" />
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Ownership of Residence</Label>
          <RadioGroup value={assessmentData.ownershipOfResidence} onValueChange={(value) => onAssessmentChange('ownershipOfResidence', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="Renting the home" field="ownershipOfResidence" />
              <ScoreOption value="2" label="Squatter on the land where the home is built" field="ownershipOfResidence" />
              <ScoreOption value="3" label="Tenant on the land where the home is built" field="ownershipOfResidence" />
              <ScoreOption value="4" label="Living with parents or in-laws" field="ownershipOfResidence" />
              <ScoreOption value="5" label="Owns house and lot with title" field="ownershipOfResidence" />
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Barangay Record</Label>
          <RadioGroup value={assessmentData.barangayRecord} onValueChange={(value) => onAssessmentChange('barangayRecord', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="Only spouse is known in the barangay" field="barangayRecord" />
              <ScoreOption value="2" label="Born and raised in the barangay with no negative record" field="barangayRecord" />
              <ScoreOption value="3" label="From a well-known and reputable family in the barangay" field="barangayRecord" />
              <ScoreOption value="4" label="Has a relative in the barangay council (excluding spouse, children, parents, and siblings)" field="barangayRecord" />
              <ScoreOption value="5" label="Self, spouse, parent, or sibling was elected to barangay office" field="barangayRecord" />
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Family Status</Label>
          <RadioGroup value={assessmentData.familyStatus} onValueChange={(value) => onAssessmentChange('familyStatus', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="Separated and living with a new partner" field="familyStatus" />
              <ScoreOption value="2" label="Widowed or separated and living alone" field="familyStatus" />
              <ScoreOption value="3" label="Single" field="familyStatus" />
              <ScoreOption value="4" label="Living with a partner but not legally married" field="familyStatus" />
              <ScoreOption value="5" label="Legally married" field="familyStatus" />
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Toilet Status</Label>
          <RadioGroup value={assessmentData.toiletStatus} onValueChange={(value) => onAssessmentChange('toiletStatus', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="No personal toilet in the home" field="toiletStatus" />
              <ScoreOption value="2" label="Toilet is outside the home" field="toiletStatus" />
              <ScoreOption value="3" label="Toilet is inside but without a water line" field="toiletStatus" />
              <ScoreOption value="4" label="Toilet is inside with a water line" field="toiletStatus" />
              <ScoreOption value="5" label="Toilet is inside, has a water line, and tiled flooring" field="toiletStatus" />
            </div>
          </RadioGroup>
        </div>
      </div>
    </FormSection>
  )
}
