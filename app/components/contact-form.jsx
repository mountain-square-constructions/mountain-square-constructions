// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Loader } from "lucide-react";
// import React, { useState } from "react";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Toaster } from "@/components/ui/sonner";
// import { toast } from "sonner";
// import * as z from "zod";
// import SectionContainer from "./section-container";

// // Define validation schema using zod
// const createFormSchema = (formType) => {
//   // Base schema with common fields
//   const baseSchema = {
//     firstname: z
//       .string()
//       .min(1, "First name is required")
//       .max(50, "First name is too long"),
//     email: z.string().min(1, "Email is required").email("Invalid email format"),
//     phonenumber: z
//       .string()
//       .min(1, "Phone number is required")
//       .regex(/^\d{10}$/, "Phone number must be 10 digits"),
//     message: z.string().optional(),
//   };

//   // Add any form-specific validations based on formType
//   switch (formType) {
//     case "contact":
//       // For contact form, make message required
//       return z.object({
//         ...baseSchema,
//         message: z.string().min(1, "Message is required"),
//       });
//     case "newsletter":
//       // For newsletter, message is optional
//       return z.object(baseSchema);
//     default:
//       return z.object(baseSchema);
//   }
// };

// const ContactForm = ({ formType = "contact", isIndividual = false }) => {
//   const [isSelectLoaded, setIsSelectLoaded] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const defaultValues = {
//     firstname: "",
//     email: "",
//     phonenumber: "",
//     message: "",
//   };

//   const schema = createFormSchema(formType);
//   const form = useForm({
//     resolver: zodResolver(schema),
//     defaultValues,
//   });

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);

//     try {
//       // Dynamically import react-select if needed for future extension
//       if (!isSelectLoaded && isIndividual) {
//         setIsSelectLoaded(true);
//       }

//       // Here you would typically send data to your API endpoint
//       // Simulating API call with timeout
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Format data if needed based on formType
//       const formattedData = {
//         ...data,
//         formType,
//       };

//       console.log(
//         `Form submission successful with formatted data:`,
//         formattedData
//       );

//       // Show success toast
//       toast({
//         title: "Success",
//         description: "Your form has been successfully submitted!",
//         variant: "success",
//       });

//       // Reset form after successful submission
//       form.reset();
//     } catch (error) {
//       console.error("Form submission failed:", error);

//       // Show error toast
//       toast({
//         title: "Error",
//         description: "Form submission failed. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
//             <FormField
//               control={form.control}
//               name="firstname"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <Input
//                       placeholder="Enter Your First Name*"
//                       className="border-2 rounded-2xl border-gray-200 md:text-[20px]  h-16 focus-visible:ring-0 focus-visible:ring-offset-0 py-0"
//                       {...field}
//                       aria-label="First Name"
//                     />
//                   </FormControl>
//                   <FormMessage className="text-[12px] !mt-0" />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <Input
//                       type="email"
//                       placeholder="Enter Your Email*"
//                       className="border-2 rounded-2xl border-gray-200 md:text-[20px]  h-16 focus-visible:ring-0 focus-visible:ring-offset-0 py-0"
//                       {...field}
//                       aria-label="Email"
//                     />
//                   </FormControl>
//                   <FormMessage className="text-[12px] !mt-0" />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="phonenumber"
//               render={({ field: { onChange, ...field } }) => (
//                 <FormItem>
//                   <FormControl>
//                     <Input
//                       type="tel"
//                       placeholder="Enter Your Phone Number*"
//                       className="border-2 rounded-2xl border-gray-200 md:text-[20px]  h-16 focus-visible:ring-0 focus-visible:ring-offset-0 py-0"
//                       onChange={(e) => {
//                         // Only allow digits
//                         const value = e.target.value.replace(/\D/g, "");
//                         // Limit to 10 digits
//                         onChange(value.slice(0, 10));
//                       }}
//                       {...field}
//                       aria-label="Phone Number"
//                     />
//                   </FormControl>
//                   <FormMessage className="text-[12px] !mt-0" />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="message"
//               render={({ field }) => (
//                 <FormItem
//                   className={formType === "contact" ? "sm:col-span-2" : ""}
//                 >
//                   <FormControl>
//                     <Textarea
//                       placeholder="Tell us about your requirements"
//                       className={`border-2 rounded-2xl border-gray-200 md:text-[20px] focus-visible:ring-0 focus-visible:ring-offset-0 py-2 px-2 w-full font-montserrat text-[14px] ${
//                         formType === "contact"
//                           ? "min-h-[150px]"
//                           : "min-h-[100px]"
//                       }`}
//                       {...field}
//                       aria-label="Message"
//                     />
//                   </FormControl>
//                   <FormMessage className="text-[12px] !mt-0" />
//                 </FormItem>
//               )}
//             />
//           </div>

//           <div className="flex justify-center">
//             <Button
//               type="submit"
//               className="mt-5 text-[20px] py-1 h-12 font-medium bg-[#e64a27] w-full hover:bg-[#e64a27]/90"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <>
//                   Submitting
//                   <Loader size={16} className="animate-spin ml-2" />
//                 </>
//               ) : (
//                 "Submit"
//               )}
//             </Button>
//           </div>
//         </form>
//       </Form>
//       <Toaster />
//     </>
//   );
// };

// export default ContactForm;
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import * as z from "zod";
import SectionContainer from "./section-container";

// Define validation schema using zod
const createFormSchema = (formType) => {
  // Base schema with common fields
  const baseSchema = {
    firstname: z
      .string()
      .min(1, "First name is required")
      .max(50, "First name is too long"),
    email: z.string().min(1, "Email is required").email("Invalid email format"),
    phonenumber: z
      .string()
      .min(1, "Phone number is required")
      .regex(/^\d{10}$/, "Phone number must be 10 digits"),
    message: z.string().optional(),
  };

  // Add any form-specific validations based on formType
  switch (formType) {
    case "contact":
      // For contact form, make message required
      return z.object({
        ...baseSchema,
        message: z.string().min(1, "Message is required"),
      });
    case "newsletter":
      // For newsletter, message is optional
      return z.object(baseSchema);
    default:
      return z.object(baseSchema);
  }
};

const ContactForm = ({
  formType = "contact",
  isIndividual = false,
  web3FormAccessKey = "cc3b4c9a-f631-44af-9c2b-d25beaa34f80",
}) => {
  const router = useRouter();
  const [isSelectLoaded, setIsSelectLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const defaultValues = {
    firstname: "",
    email: "",
    phonenumber: "",
    message: "",
  };

  const schema = createFormSchema(formType);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Dynamically import react-select if needed for future extension
      if (!isSelectLoaded && isIndividual) {
        setIsSelectLoaded(true);
      }

      // Format data for Web3Forms
      const formData = {
        access_key: web3FormAccessKey,
        name: data.firstname,
        email: data.email,
        phone: data.phonenumber,
        message: data.message,
        form_type: formType, // Add form type as additional info
        subject: `New ${formType} form submission from ${data.firstname}`,
      };

      // Send data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Form submission successful with Web3Forms:", result);

        // Instead of using toast, redirect directly to thank you page
        router.push("/thankyou-page");
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Form submission failed:", error);

      // Show error notification using a simpler approach
      alert("Form submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
          {/* Add honeypot field to prevent spam - Web3Forms feature */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter Your First Name*"
                      className="border-2 rounded-2xl border-gray-400 md:text-[20px] h-16 focus-visible:ring-0 focus-visible:ring-offset-0 py-0"
                      {...field}
                      aria-label="First Name"
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] !mt-0" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter Your Email*"
                      className="border-2 rounded-2xl border-gray-400 md:text-[20px] h-16 focus-visible:ring-0 focus-visible:ring-offset-0 py-0"
                      {...field}
                      aria-label="Email"
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] !mt-0" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phonenumber"
              render={({ field: { onChange, ...field } }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Enter Your Phone Number*"
                      className="border-2 rounded-2xl border-gray-400 md:text-[20px] h-16 focus-visible:ring-0 focus-visible:ring-offset-0 py-0"
                      onChange={(e) => {
                        // Only allow digits
                        const value = e.target.value.replace(/\D/g, "");
                        // Limit to 10 digits
                        onChange(value.slice(0, 10));
                      }}
                      {...field}
                      aria-label="Phone Number"
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] !mt-0" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem
                  className={formType === "contact" ? "sm:col-span-2" : ""}
                >
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your requirements"
                      className={`border-2 rounded-2xl border-gray-400 md:text-[20px] focus-visible:ring-0 focus-visible:ring-offset-0 py-2 px-2 w-full font-montserrat text-[14px] ${
                        formType === "contact"
                          ? "min-h-[150px]"
                          : "min-h-[100px]"
                      }`}
                      {...field}
                      aria-label="Message"
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] !mt-0" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="mt-5 text-[20px] py-1 h-12 font-medium bg-[#e64a27] w-full hover:bg-[#e64a27]/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  Submitting
                  <Loader size={16} className="animate-spin ml-2" />
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
