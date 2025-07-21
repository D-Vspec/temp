import { RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import FormSection from "./FormSection"
import ScoreOption from "./ScoreOption"
import { AssessmentData } from "@/types/client"

interface CapacitySectionProps {
  assessmentData: AssessmentData
  onAssessmentChange: (field: keyof AssessmentData, value: string) => void
}

export default function CapacitySection({ assessmentData, onAssessmentChange }: CapacitySectionProps) {
  return (
    <FormSection title="CAPACITY ASSESSMENT" bgColor="bg-blue-50">
      <div className="space-y-6">
        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Primary Source of Loan Repayment</Label>
          <RadioGroup value={assessmentData.primaryLoanRepayment} onValueChange={(value) => onAssessmentChange('primaryLoanRepayment', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="From agriculture (fishing, livestock raising, gardening)" field="primaryLoanRepayment" />
              <ScoreOption value="2" label="Informal business/livelihood (buy & sell, Avon dealer, laundry, manicurist, numbers game collector, tricycle driver, habal-habal)" field="primaryLoanRepayment" />
              <ScoreOption value="3" label="Occupation or business with regular and stable income (e.g., tricycle or jeepney boundary driving, salary, rental income)" field="primaryLoanRepayment" />
              <ScoreOption value="4" label="Business with a permanent stall (e.g., sari-sari store, market stall, eatery)" field="primaryLoanRepayment" />
              <ScoreOption value="5" label="Business with a permanent stall that is legitimately registered with DTI and has a municipal license" field="primaryLoanRepayment" />
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Other Sources of Loan Repayment</Label>
          <RadioGroup value={assessmentData.otherLoanRepayment} onValueChange={(value) => onAssessmentChange('otherLoanRepayment', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="Applicant receives pension or government subsidy (e.g., 4Ps)" field="otherLoanRepayment" />
              <ScoreOption value="2" label="Applicant has a sideline or side hustle" field="otherLoanRepayment" />
              <ScoreOption value="3" label="Applicant earns income from land (coconut, rice, banana, or vegetable farming)" field="otherLoanRepayment" />
              <ScoreOption value="4" label="Applicant's spouse or child contributes income from informal or non-permanent work" field="otherLoanRepayment" />
              <ScoreOption value="5" label="Applicant regularly receives remittances from parent, sibling, spouse, or child with a permanent/regular job" field="otherLoanRepayment" />
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Result of Cash Flow Analysis</Label>
          <RadioGroup value={assessmentData.cashFlowAnalysis} onValueChange={(value) => onAssessmentChange('cashFlowAnalysis', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="Weekly cash flow is below ₱180.00" field="cashFlowAnalysis" />
              <ScoreOption value="2" label="Weekly cash flow is exactly ₱180.00" field="cashFlowAnalysis" />
              <ScoreOption value="3" label="Weekly cash flow is more than ₱180.00" field="cashFlowAnalysis" />
              <ScoreOption value="4" label="Cash flow is sufficient or matches the desired weekly loan installment" field="cashFlowAnalysis" />
              <ScoreOption value="5" label="Cash flow exceeds the desired weekly loan installment" field="cashFlowAnalysis" />
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">Amount of Forced Savings</Label>
          <RadioGroup value={assessmentData.forcedSavings} onValueChange={(value) => onAssessmentChange('forcedSavings', value)}>
            <div className="space-y-2">
              <ScoreOption value="1" label="No forced savings" field="forcedSavings" />
              <ScoreOption value="2" label="Forced savings is 5%–10% of the loan amount" field="forcedSavings" />
              <ScoreOption value="3" label="Forced savings is 11%–20% of the loan amount" field="forcedSavings" />
              <ScoreOption value="4" label="Forced savings is 21%–35% of the loan amount" field="forcedSavings" />
              <ScoreOption value="5" label="Forced savings is more than 35% of the loan amount" field="forcedSavings" />
            </div>
          </RadioGroup>
        </div>
      </div>
    </FormSection>
  )
}
