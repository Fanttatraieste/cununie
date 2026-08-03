import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const rsvpSchema = z.object({
  name: z.string().min(2, "Numele este obligatoriu"),
  email: z.string().email("Adresă de email invalidă").optional().or(z.literal("")),
  attending: z.enum(["yes", "no"]),
  guestCount: z.coerce.number().int().min(1, "Minim 1 persoană").max(10, "Maxim 10 persoane"),
  dietaryRestrictions: z.string().optional(),
  message: z.string().optional(),
});

export const submitRsvp = createServerFn({ method: "POST" })
  .validator((data) => rsvpSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await (supabase.from("rsvps") as any).insert({
      name: data.name,
      email: data.email || null,
      attending: data.attending === "yes",
      guest_count: data.attending === "yes" ? data.guestCount : 0,
      dietary_restrictions: data.dietaryRestrictions || null,
      message: data.message || null,
    });
    if (error) throw new Error(error.message);
    return { success: true };
  });
