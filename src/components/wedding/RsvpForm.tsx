import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";

import { submitRsvp } from "@/lib/rsvp.functions";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LeafDivider } from "./Leaf";
import { Reveal } from "./Section";

const rsvpSchema = z.object({
  name: z.string().min(2, "Numele este obligatoriu"),
  email: z.string().email("Adresă de email invalidă").optional().or(z.literal("")),
  attending: z.enum(["yes", "no"]),
  guestCount: z.coerce.number().int().min(1, "Minim 1 persoană").max(10, "Maxim 10 persoane"),
  dietaryRestrictions: z.string().optional(),
  message: z.string().optional(),
});

type RsvpFormValues = z.infer<typeof rsvpSchema>;

export function RsvpForm() {
  const [submitted, setSubmitted] = useState(false);
  const sendRsvp = useServerFn(submitRsvp);

  const form = useForm<RsvpFormValues>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: "",
      email: "",
      attending: "yes",
      guestCount: 1,
      dietaryRestrictions: "",
      message: "",
    },
  });

  const onSubmit = async (values: RsvpFormValues) => {
    try {
      await sendRsvp({ data: values });
      setSubmitted(true);
      toast.success("Răspunsul tău a fost înregistrat. Mulțumim!");
    } catch (error) {
      toast.error("Nu am putut salva răspunsul. Încearcă din nou.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center">
        <LeafDivider className="text-primary-foreground/70" />
        <p className="mt-8 font-serif text-2xl font-light italic text-primary-foreground">Mulțumim pentru confirmare!</p>
        <p className="mt-2 font-sans text-sm text-primary-foreground/70">Răspunsul tău a fost înregistrat.</p>
      </div>
    );
  }

  return (
    <Reveal>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-primary-foreground/70">
                  Nume și prenume
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: Ana Popescu"
                    className="rounded-none border-0 border-b border-primary-foreground/20 bg-transparent px-0 py-3 font-serif text-lg text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-primary-foreground/70">
                  Email (opțional)
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="exemplu@email.com"
                    className="rounded-none border-0 border-b border-primary-foreground/20 bg-transparent px-0 py-3 font-serif text-lg text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="attending"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-primary-foreground/70">
                  Vei participa?
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-6"
                  >
                    <FormItem className="flex items-center gap-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" className="border-primary-foreground/40 text-primary-foreground" />
                      </FormControl>
                      <FormLabel className="font-sans text-sm font-normal text-primary-foreground">
                        Da, voi participa
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" className="border-primary-foreground/40 text-primary-foreground" />
                      </FormControl>
                      <FormLabel className="font-sans text-sm font-normal text-primary-foreground">
                        Nu, nu pot ajunge
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="guestCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-primary-foreground/70">
                  Număr de persoane
                </FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  value={String(field.value)}
                >
                  <FormControl>
                    <SelectTrigger className="w-32 rounded-none border-0 border-b border-primary-foreground/20 bg-transparent px-0 py-3 font-serif text-lg text-primary-foreground focus:ring-0 [&>span]:text-primary-foreground">
                      <SelectValue placeholder="Alege" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <SelectItem key={n} value={String(n)}>
                        {n}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dietaryRestrictions"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-primary-foreground/70">
                  Restricții alimentare (opțional)
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Alergii, preferințe vegetariene etc."
                    className="min-h-[80px] rounded-none border-0 border-b border-primary-foreground/20 bg-transparent px-0 font-serif text-lg text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-primary-foreground/70">
                  Mesaj pentru miri (opțional)
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Un gând, o melodie preferată..."
                    className="min-h-[80px] rounded-none border-0 border-b border-primary-foreground/20 bg-transparent px-0 font-serif text-lg text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full rounded-full bg-background py-6 font-sans text-[0.7rem] uppercase tracking-[0.22em] text-primary transition-colors hover:bg-background/90"
          >
            {form.formState.isSubmitting ? "Se trimite..." : "Confirmă prezența"}
          </Button>
        </form>
      </Form>
    </Reveal>
  );
}
