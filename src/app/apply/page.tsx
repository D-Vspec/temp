"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { LoanDetailsSection } from "@/components/form-sections/loan-details-section"
import { BorrowerInformationSection } from "@/components/form-sections/borrower-information-section"
import { AddressInformationSection } from "@/components/form-sections/address-information-section"
import { WorkInformationSection } from "@/components/form-sections/work-information-section"
import { SpouseInformationSection } from "@/components/form-sections/spouse-information-section"
import { DependentsSection } from "@/components/form-sections/dependents-section"
import { FinancialInformationSection } from "@/components/form-sections/financial-information-section"
import { AssetsLiabilitiesSection } from "@/components/form-sections/assets-liabilities-section"
import { AgreementSection } from "@/components/form-sections/agreement-section"
import { SignatureSection } from "@/components/form-sections/signature-section"

const formSchema = z.object({
  // Loan Details
  loanPurpose: z.string().min(1, "Loan purpose is required"),
  desiredLoanAmount: z.string().min(1, "Desired loan amount is required"),
  paymentMode: z.string().min(1, "Payment mode is required"),
  loanTerm: z.string().min(1, "Loan term is required"),

  // Borrower Information
  lastName: z.string().min(1, "Last name is required"),
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  extensionName: z.string().optional(),
  birthDate: z.date({ required_error: "Birth date is required" }),
  birthPlace: z.string().min(1, "Birth place is required"),
  nationality: z.string().min(1, "Nationality is required"),
  numberOfDependents: z.string().min(1, "Number of dependents is required"),
  cpNumber: z.string().min(1, "CP number is required"),
  civilStatus: z.string().min(1, "Civil status is required"),
  emailAddress: z.string().email("Invalid email address"),
  fbAccount: z.string().optional(),
  educationalAttainment: z.string().min(1, "Educational attainment is required"),
  mothersMaidenName: z.string().min(1, "Mother's maiden name is required"),

  // Sources of Funds
  sourcesOfFunds: z.array(z.string()).min(1, "Select at least one source of funds"),
  otherSourceSpecify: z.string().optional(),

  // Address Information
  homeAddress: z.string().min(1, "Home address is required"),
  homeStatus: z.string().min(1, "Home status is required"),
  rentAmount: z.string().optional(),
  mortgageAmount: z.string().optional(),
  yearsOfResidencyHome: z.string().min(1, "Years of residency is required"),
  presentAddress: z.string().min(1, "Present address is required"),
  yearsOfResidencyPresent: z.string().min(1, "Years of residency is required"),
  previousAddress: z.string().optional(),
  yearsOfResidencyPrevious: z.string().optional(),

  // Work Information - Borrower
  borrowerEmploymentType: z.string().min(1, "Employment type is required"),
  borrowerEmployerName: z.string().min(1, "Employer/Business name is required"),
  borrowerOfficeAddress: z.string().min(1, "Office/Business address is required"),
  borrowerNatureOfBusiness: z.string().min(1, "Nature of business is required"),
  borrowerTelephoneNos: z.string().min(1, "Telephone number is required"),
  borrowerPosition: z.string().min(1, "Position/Occupation is required"),
  borrowerYearsInEmployment: z.string().min(1, "Years in employment is required"),
  borrowerTin: z.string().min(1, "TIN is required"),
  borrowerSssGsis: z.string().min(1, "SSS/GSIS number is required"),
  borrowerPreviousEmployer: z.string().optional(),
  borrowerDtiRegistration: z.string().optional(),
  borrowerSecRegistration: z.string().optional(),

  // Spouse Information
  spouseName: z.string().optional(),
  spouseNationality: z.string().optional(),
  spouseBirthPlace: z.string().optional(),
  spouseBirthDate: z.date().optional(),
  spouseMothersMaidenName: z.string().optional(),

  // Spouse Work Information
  spouseEmploymentType: z.string().optional(),
  spouseEmployerName: z.string().optional(),
  spouseOfficeAddress: z.string().optional(),
  spouseNatureOfBusiness: z.string().optional(),
  spouseTelephoneNos: z.string().optional(),
  spousePosition: z.string().optional(),
  spouseYearsInEmployment: z.string().optional(),
  spouseTin: z.string().optional(),
  spouseSssGsis: z.string().optional(),
  spousePreviousEmployer: z.string().optional(),
  spouseDtiRegistration: z.string().optional(),
  spouseSecRegistration: z.string().optional(),

  // Dependents
  dependents: z.array(
    z.object({
      name: z.string(),
      age: z.string(),
      schoolCompany: z.string(),
      levelYearsEmployed: z.string(),
    }),
  ),

  // Financial Information
  borrowerBasicSalary: z.string().optional(),
  borrowerAllowances: z.string().optional(),
  borrowerBusinessIncome: z.string().optional(),
  borrowerRentalIncome: z.string().optional(),
  borrowerOtherIncome: z.string().optional(),
  spouseBasicSalary: z.string().optional(),
  spouseAllowances: z.string().optional(),
  spouseBusinessIncome: z.string().optional(),
  spouseRentalIncome: z.string().optional(),
  spouseOtherIncome: z.string().optional(),

  // Monthly Expenses
  livingExpenses: z.string().optional(),
  rentUtilities: z.string().optional(),
  education: z.string().optional(),
  transportation: z.string().optional(),
  loanAmortizations: z.string().optional(),
  otherExpenses: z.string().optional(),

  // Assets
  realEstateLocation: z.string().optional(),
  realEstateValue: z.string().optional(),
  automobileDetails: z.string().optional(),
  automobileValue: z.string().optional(),
  sharesOfStock: z.array(
    z.object({
      company: z.string(),
      numberOfShares: z.string(),
      marketValue: z.string(),
    }),
  ),
  depositAccounts: z.array(
    z.object({
      bank: z.string(),
      balance: z.string(),
    }),
  ),
  creditCards: z.array(
    z.object({
      bankCompany: z.string(),
      balance: z.string(),
    }),
  ),
  loans: z.array(
    z.object({
      creditor: z.string(),
      balance: z.string(),
    }),
  ),
})

export default function LoanApplicationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dependents: [{ name: "", age: "", schoolCompany: "", levelYearsEmployed: "" }],
      sharesOfStock: [{ company: "", numberOfShares: "", marketValue: "" }],
      depositAccounts: [{ bank: "", balance: "" }],
      creditCards: [{ bankCompany: "", balance: "" }],
      loans: [{ creditor: "", balance: "" }],
      sourcesOfFunds: [],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 border-2 border-black p-4">
          <h1 className="text-xl font-bold mb-2">LOAN APPLICATION FORM</h1>
          <h2 className="text-lg font-semibold">BAYANIHAN BANK, INC.</h2>
          <p className="text-sm">111 QUEZON ST. ATIMONAN, QUEZON</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <LoanDetailsSection control={form.control} />
            <BorrowerInformationSection control={form.control} />
            <AddressInformationSection control={form.control} />
            <WorkInformationSection control={form.control} />
            <SpouseInformationSection control={form.control} />
            <DependentsSection control={form.control} />
            <FinancialInformationSection control={form.control} />
            <AssetsLiabilitiesSection control={form.control} />
            <AgreementSection />
            <SignatureSection />

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <Button
                type="submit"
                className="w-full max-w-md bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 text-lg"
              >
                Submit Loan Application
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
