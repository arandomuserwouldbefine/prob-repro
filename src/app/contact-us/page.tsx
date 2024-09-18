import { Banner } from "@/components/banner";
import { ContactForm } from "./_components/contact-form";


export default async function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-4">
      <main className="flex-1 w-full max-w-2xl">
        <section className="w-full py-4 md:py-8 lg:py-10 xl:py-20">
          <Banner title="Contact Us" subTitle="We'd love to hear from you. Please fill out the form below." />
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
