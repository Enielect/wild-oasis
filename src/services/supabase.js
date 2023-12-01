import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bcghnuqlnearmepwjmwd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjZ2hudXFsbmVhcm1lcHdqbXdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4MzM3MzYsImV4cCI6MjAxNDQwOTczNn0.pIASVBXIUFsDlJvOHtohB7rhUFB6r3IZ5eB3YxoxMUI";
export const supabase = createClient(supabaseUrl, supabaseKey);
