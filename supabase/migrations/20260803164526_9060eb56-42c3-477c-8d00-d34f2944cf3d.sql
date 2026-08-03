CREATE TABLE public.rsvps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text,
  attending boolean NOT NULL,
  guest_count integer NOT NULL DEFAULT 1,
  dietary_restrictions text,
  message text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.rsvps TO anon;
GRANT SELECT ON public.rsvps TO authenticated;
GRANT ALL ON public.rsvps TO service_role;

ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an RSVP"
ON public.rsvps FOR INSERT TO anon
WITH CHECK (true);

CREATE POLICY "Authenticated users can view RSVPs"
ON public.rsvps FOR SELECT TO authenticated
USING (true);