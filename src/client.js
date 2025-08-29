import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase Project URL
const URL = 'https://hafmbsstqutrkiqomhwj.supabase.co';

// Replace with your actual Supabase API Key
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhZm1ic3N0cXV0cmtpcW9taHdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwNjAxMjEsImV4cCI6MjA3MTYzNjEyMX0.jHShMWycLkVBb0vnBAJl1IyQcAbMrDHT24ZSOnbsOg8';

// Create and export the Supabase client
export const supabase = createClient(URL, API_KEY);