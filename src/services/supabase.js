import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pwbpnzhgeoqfokllnsyd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3YnBuemhnZW9xZm9rbGxuc3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MjQ1MTAsImV4cCI6MjAwOTUwMDUxMH0.R5iDs6Fz0Sl0pZDfawHvph5p7j7d0ldOTK4Emh_JAhs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
