-- Create waitlist table to store contact form submissions
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (public form submission)
CREATE POLICY "Anyone can submit to waitlist" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (true);

-- No select policy for anonymous users - data is only accessible via backend
-- Admin access would be through authenticated dashboard or direct database access