DROP POLICY IF EXISTS "Anyone can submit an RSVP" ON public.rsvps;

CREATE POLICY "Anyone can submit an RSVP"
ON public.rsvps FOR INSERT TO anon
WITH CHECK (name IS NOT NULL AND attending IS NOT NULL);