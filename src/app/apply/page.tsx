"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { PersonalInformationSection } from "@/components/form-sections/personal-information-section"
import { AddressInformationSection } from "@/components/form-sections/address-information-section"
import { BeneficiariesSection } from "@/components/form-sections/beneficiaries-section"
import { CoInsuredSection } from "@/components/form-sections/co-insured-section"
import { DataPrivacySection } from "@/components/form-sections/data-privacy-section"
import { BusinessHouseholdSection } from "@/components/form-sections/business-household-section"

const formSchema = z.object({
  // Personal Information
  salutation: z.string().min(1, "Salutation is required"),
  lastName: z.string().min(1, "Last name is required"),
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  gender: z.string().min(1, "Gender is required"),
  birthDate: z.date({ required_error: "Birth date is required" }),
  placeOfBirth: z.string().min(1, "Place of birth is required"),
  height: z.string().min(1, "Height is required"),
  contactNumber: z.string().min(1, "Contact number is required"),
  numberOfDependents: z.string().min(1, "Number of dependents is required"),
  maritalStatus: z.string().min(1, "Marital status is required"),
  nationality: z.string().min(1, "Nationality is required"),
  weight: z.string().min(1, "Weight is required"),
  education: z.string().min(1, "Education is required"),
  spouseName: z.string().optional(),
  spouseBirthDate: z.date().optional(),
  spouseWork: z.string().optional(),
  spouseMonthlyIncome: z.string().optional(),

  // Address Information
  streetAddress: z.string().min(1, "Street address is required"),
  barangay: z.string().min(1, "Barangay is required"),
  cityMunicipality: z.string().min(1, "City/Municipality is required"),
  province: z.string().min(1, "Province is required"),
  region: z.string().min(1, "Region is required"),

  // Beneficiaries Information
  beneficiary1Name: z.string().min(1, "Beneficiary name is required"),
  beneficiary1BirthDate: z.date({ required_error: "Beneficiary birth date is required" }),
  beneficiary1Age: z.string().min(1, "Beneficiary age is required"),
  beneficiary1Relationship: z.string().min(1, "Beneficiary relationship is required"),

  // Co-Insured Information
  coInsured1Name: z.string().min(1, "Co-insured name is required"),
  coInsured1BirthDate: z.date({ required_error: "Co-insured birth date is required" }),
  coInsured1Age: z.string().min(1, "Co-insured age is required"),
  coInsured1Relationship: z.string().min(1, "Co-insured relationship is required"),

  // Data Privacy Consent
  dataPrivacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the data privacy consent",
  }),

  // Business and Household Financial Information
  borrowerNameFinancial: z.string().optional(),
  businessIncome: z.array(
    z.object({
      description: z.string(),
      daily: z.string().optional(),
      weekly: z.string().optional(),
      semiMonthly: z.string().optional(),
      monthly: z.string().optional(),
    }),
  ),
  businessExpenses: z.array(
    z.object({
      description: z.string(),
      daily: z.string().optional(),
      weekly: z.string().optional(),
      semiMonthly: z.string().optional(),
      monthly: z.string().optional(),
    }),
  ),
  householdIncome: z.array(
    z.object({
      description: z.string(),
      daily: z.string().optional(),
      weekly: z.string().optional(),
      semiMonthly: z.string().optional(),
      monthly: z.string().optional(),
    }),
  ),
  householdExpenses: z.array(
    z.object({
      description: z.string(),
      daily: z.string().optional(),
      weekly: z.string().optional(),
      semiMonthly: z.string().optional(),
      monthly: z.string().optional(),
    }),
  ),
  estimatedDebtService: z.string().optional(),
  repaymentCapacityRate: z.string().optional(),
  maximumLoanEntitlement: z.string().optional(),
  comments: z.string().optional(),
})

export default function ClientInformationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dataPrivacyConsent: false,
      businessIncome: [{ description: "", daily: "", weekly: "", semiMonthly: "", monthly: "" }],
      businessExpenses: [{ description: "", daily: "", weekly: "", semiMonthly: "", monthly: "" }],
      householdIncome: [{ description: "", daily: "", weekly: "", semiMonthly: "", monthly: "" }],
      householdExpenses: [{ description: "", daily: "", weekly: "", semiMonthly: "", monthly: "" }],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-8 border-2 border-black p-4">
          <h1 className="text-xl font-bold mb-2">BAYANIHAN BANK</h1>
          <h2 className="text-lg font-semibold">111 QUEZON ST. ATIMONAN, QUEZON</h2>
          <p className="text-lg font-bold mt-4">CLIENT INFORMATION SHEET</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <PersonalInformationSection control={form.control} />
            <AddressInformationSection control={form.control} />
            <BeneficiariesSection control={form.control} />
            <CoInsuredSection control={form.control} />
            <BusinessHouseholdSection control={form.control} />
            <DataPrivacySection control={form.control} />

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <Button
                type="submit"
                className="w-full max-w-md bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 text-lg"
              >
                Submit Client Information
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
