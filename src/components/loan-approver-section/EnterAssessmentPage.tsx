import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Save, X } from "lucide-react"
import ClientHeader from "@/components/ClientHeader"
import ClientSelector from "@/components/ClientSelector"
import FormSection from "@/components/assessment/FormSection"
import CapacitySection from "@/components/assessment/CapacitySection"
import ResidencySection from "@/components/assessment/ResidencySection"
import RecordSection from "@/components/assessment/RecordSection"
import CenterStatusSection from "@/components/assessment/CenterStatusSection"
import { AssessmentData, Client } from "@/types/client"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form } from "@/components/ui/form"

interface EnterAssessmentPageProps {
  clients: Client[]
  selectedClientId: string
  clientData: any
  isLoadingClients: boolean
  onClientSelect: (clientId: string) => void
}

const formSchema = z.object({
  // selectedClientId: z.string().min(1, "Client ID is required"),
  // Record Section
  timeInProgram: z.string().min(1, "Time in Program is required").or(z.number().transform(String)),
  centerCollectionRecord: z.string().min(1, "Center Collection Record is required").or(z.number().transform(String)),
  paymentHistory: z.string().min(1, "Payment History is required").or(z.number().transform(String)),
  numberOfLendingGroups: z.string().min(1, "Number of Lending Groups is required").or(z.number().transform(String)),
  // Center Status Section
  numberOfCenterMembers: z.string().min(1, "Number of Center Members is required").or(z.number().transform(String)),
  attendanceToMeetings: z.string().min(1, "Attendance to Meetings is required").or(z.number().transform(String)),
  programBenefitsReceived: z.string().min(1, "Program Benefits Received is required").or(z.number().transform(String)),
  yearsInProgram: z.string().min(1, "Years in Program is required").or(z.number().transform(String)),
  pastdueRatio: z.string().min(1, "Pastdue Ratio is required").or(z.number().transform(String)),
  remarks: z.string().optional(),
  assessmentDate: z.string().optional(),
  // typeOfForm: z.string().min(1, "Type of form is required"),
})


export default function EnterAssessmentPage({ 
  clients, 
  selectedClientId, 
  clientData, 
  isLoadingClients, 
  onClientSelect 
}: EnterAssessmentPageProps) {
  const [isLoading, setIsLoading] = useState(false)

  // Add react-hook-form
  const form = useForm<any>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      assessmentDate: new Date().toISOString().split('T')[0],
      remarks: "",
      // Add other assessment fields as needed
    },
  })

  // Update assessment date when component mounts or client changes
  useEffect(() => {
    form.setValue('assessmentDate', new Date().toISOString().split('T')[0])
  }, [selectedClientId, form])

  const onSubmit = async (values: any) => {
    if (!selectedClientId) {
      toast.error("Please select a client first")
      return
    }
    try {
      console.log('ho')
      setIsLoading(true)
      // Normalize primaryLoanRepayment and otherLoanRepayment fields
      const normalizeOptions = (arr: any[]) =>
        arr.map((v) => typeof v === "string" ? v : v.value === "other" ? { value: "other", comment: v.comment } : v)

      const payload = {
        clientId: selectedClientId,
        data: {
          ...values,
        }
      }
      console.log("=== ASSESSMENT SUBMIT PAYLOAD ===")
      console.log(JSON.stringify(payload, null, 2))
      const response = await fetch("http://localhost:5000/process_assessment_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      })
      if (response.ok) {
        toast.success("Assessment saved successfully!")
        console.log("=== ASSESSMENT SAVED ===")
        console.log(JSON.stringify(payload, null, 2))
        form.reset({
          assessmentDate: new Date().toISOString().split('T')[0],
          remarks: "",
          timeInProgram: "",
          centerCollectionRecord: "",
          paymentHistory: "",
          numberOfLendingGroups: "",
          numberOfCenterMembers: "",
          attendanceToMeetings: "",
          programBenefitsReceived: "",
          yearsInProgram: "",
          pastdueRatio: ""
        })
      } else {
        throw new Error(`Failed to save assessment: ${response.status}`)
      }
    } catch (error) {
      console.error("Error saving assessment:", error)
      toast.error("Failed to save assessment", {
        description: "Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Update handleAssessmentChange to use form.setValue
  const handleAssessmentChange = (field: string, value: string) => {
    form.setValue(field, value)
  }

  // Update handleCancel to reset form
  const handleCancel = () => {
    form.reset({
      assessmentDate: new Date().toISOString().split('T')[0],
      remarks: "",
      // Reset other assessment fields as needed
    })
    toast.success("Form reset successfully")
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="w-full mx-auto">
        <ClientHeader />
        <ClientSelector 
          clients={clients}
          selectedClientId={selectedClientId} 
          onClientSelect={onClientSelect}
          isLoadingClients={isLoadingClients}
        />

        {/* Loading State */}
        {isLoading && (
          <Card className="border-2 border-black">
            <CardContent className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Saving assessment...</p>
            </CardContent>
          </Card>
        )}

        {/* Assessment Form */}
        {selectedClientId && !isLoading && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit((values) => onSubmit({ ...values, selectedClientId }))} className="space-y-6">
              {/* Assessment Header */}
              <Card className="border-2 border-black">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-lg font-bold text-center">CLIENT ASSESSMENT FORM</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="assessmentDate" className="text-sm font-medium">Assessment Date</Label>
                      <Input
                        id="assessmentDate"
                        type="date"
                        value={form.watch("assessmentDate")}
                        onChange={(e) => handleAssessmentChange('assessmentDate', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="selectedClient" className="text-sm font-medium">Selected Client ID</Label>
                      <Input
                        id="selectedClient"
                        value={selectedClientId}
                        disabled
                        className="mt-1 bg-gray-50"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Assessment Sections */}
              {/* <CapacitySection control={form.control} />
              <ResidencySection control={form.control} /> */}
              <RecordSection control={form.control} />
              <CenterStatusSection control={form.control} />
              {/* Additional Remarks */}
              <FormSection title="ADDITIONAL REMARKS" bgColor="bg-orange-50">
                <div>
                  <Label htmlFor="remarks" className="text-sm font-medium text-gray-700 mb-2 block">
                    Assessment Notes and Comments
                  </Label>
                  <Textarea
                    id="remarks"
                    placeholder="Enter any additional observations, notes, or comments about the client assessment..."
                    value={form.watch("remarks")}
                    onChange={(e) => handleAssessmentChange('remarks', e.target.value)}
                    rows={4}
                    className="w-full"
                  />
                </div>
              </FormSection>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Assessment
                </Button>
                <Button
                  type="button"
                  onClick={handleCancel}
                  variant="outline"
                  className="border-2 border-gray-400 px-8 py-3 text-lg font-semibold"
                >
                  <X className="w-5 h-5 mr-2" />
                  Reset Form
                </Button>
              </div>
            </form>
          </Form>
        )}

        {/* No Client Selected State */}
        {!selectedClientId && (
          <Card className="border-2 border-black">
            <CardContent className="p-8 text-center">
              <p className="text-gray-600 text-lg">
                Please select a client from the dropdown above to enter assessment details.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}