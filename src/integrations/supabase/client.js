import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://taevzmilfbtdbyjlegwh.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhZXZ6bWlsZmJ0ZGJ5amxlZ3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MjMwMDIsImV4cCI6MjA2NTI5OTAwMn0.LUEnzlKZIW-B1Ih09ypovqA3C1gKnCONCHjk8n8Dmj4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY); 