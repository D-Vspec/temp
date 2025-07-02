"use client"

import type { Control } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

interface FinancialInformationSectionProps {
  control: Control<any>
}

export function FinancialInformationSection({ control }: FinancialInformationSectionProps) {
  return (
    <Card className="border-2 border-black">
      <CardHeader className="bg-gray-100">
        <CardTitle className="text-center font-bold">FINANCIAL INFORMATION</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Monthly Income */}
          <div>
            <h3 className="font-bold mb-4 text-center">MONTHLY INCOME</h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="font-bold">Borrower</div>
              <div className="font-bold">Spouse</div>
              <div className="font-bold">Total</div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 items-center">
                <FormField
                  control={control}
                  name="borrowerBasicSalary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Basic Salary</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                          rows={1}
                          onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement
                            target.style.height = "auto"
                            target.style.height = target.scrollHeight + "px"
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="spouseBasicSalary"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                          rows={1}
                          onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement
                            target.style.height = "auto"
                            target.style.height = target.scrollHeight + "px"
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-50">
                  {/* Auto-calculated total would go here */}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center">
                <FormField
                  control={control}
                  name="borrowerAllowances"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Allowances</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                          rows={1}
                          onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement
                            target.style.height = "auto"
                            target.style.height = target.scrollHeight + "px"
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="spouseAllowances"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                          rows={1}
                          onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement
                            target.style.height = "auto"
                            target.style.height = target.scrollHeight + "px"
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-50">
                  {/* Auto-calculated total would go here */}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center">
                <FormField
                  control={control}
                  name="borrowerBusinessIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Income</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                          rows={1}
                          onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement
                            target.style.height = "auto"
                            target.style.height = target.scrollHeight + "px"
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="spouseBusinessIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                          rows={1}
                          onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement
                            target.style.height = "auto"
                            target.style.height = target.scrollHeight + "px"
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-50">
                  {/* Auto-calculated total would go here */}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center">
                <FormField
                  control={control}
                  name="borrowerRentalIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rental Income</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                          rows={1}
                          onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement
                            target.style.height = "auto"
                            target.style.height = target.scrollHeight + "px"
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="spouseRentalIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                          rows={1}
                          onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement
                            target.style.height = "auto"
                            target.style.height = target.scrollHeight + "px"
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-50">
                  {/* Auto-calculated total would go here */}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center">
                <FormField
                  control={control}
                  name="borrowerOtherIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Income from other sources</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                          rows={1}
                          onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement
                            target.style.height = "auto"
                            target.style.height = target.scrollHeight + "px"
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="spouseOtherIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                          rows={1}
                          onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement
                            target.style.height = "auto"
                            target.style.height = target.scrollHeight + "px"
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-50">
                  {/* Auto-calculated total would go here */}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center font-bold">
                <div>Total</div>
                <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-100">
                  {/* Auto-calculated total would go here */}
                </div>
                <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-100">
                  {/* Auto-calculated total would go here */}
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Expenses */}
          <div>
            <h3 className="font-bold mb-4 text-center">MONTHLY EXPENSES</h3>
            <div className="space-y-4">
              <FormField
                control={control}
                name="livingExpenses"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Living Expenses</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                        rows={1}
                        onInput={(e) => {
                          const target = e.target as HTMLTextAreaElement
                          target.style.height = "auto"
                          target.style.height = target.scrollHeight + "px"
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="rentUtilities"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rent and Utilities</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                        rows={1}
                        onInput={(e) => {
                          const target = e.target as HTMLTextAreaElement
                          target.style.height = "auto"
                          target.style.height = target.scrollHeight + "px"
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="education"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Education</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                        rows={1}
                        onInput={(e) => {
                          const target = e.target as HTMLTextAreaElement
                          target.style.height = "auto"
                          target.style.height = target.scrollHeight + "px"
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="transportation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Transportation</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                        rows={1}
                        onInput={(e) => {
                          const target = e.target as HTMLTextAreaElement
                          target.style.height = "auto"
                          target.style.height = target.scrollHeight + "px"
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="loanAmortizations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loan Amortizations</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                        rows={1}
                        onInput={(e) => {
                          const target = e.target as HTMLTextAreaElement
                          target.style.height = "auto"
                          target.style.height = target.scrollHeight + "px"
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="otherExpenses"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loans/ Credit cards/ Insurance / other expenses</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none resize-none min-h-[40px]"
                        rows={1}
                        onInput={(e) => {
                          const target = e.target as HTMLTextAreaElement
                          target.style.height = "auto"
                          target.style.height = target.scrollHeight + "px"
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="font-bold">
                <div>Total</div>
                <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-100">
                  {/* Auto-calculated total would go here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
